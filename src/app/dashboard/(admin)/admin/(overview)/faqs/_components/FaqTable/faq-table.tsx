"use client";

import clsx from "clsx";
import { EllipsisVertical, Pencil, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import DeleteDialog from "../FaqModal/delete-dialog";
import { getFaqs } from "~/actions/externalPages";
import UpdateFaqModal from "../FaqModal/update-faq-modal";
import Pagination from "~/components/layouts/pagination/Pagination";
import TableSkeleton from "~/components/skeleton/tableskeleton";


// Define a type for the FAQ items
interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category:string
}


const FaqRow = ({ faqs }: { faqs: FaqItem }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [updateModal, setUpdateModal] = useState(false)
  const handleOpenDialog = () => setIsDialogOpen(true);
  const handleCloseDialog = () => setIsDialogOpen(false);
  const handleCloseUpdateDialog = () => setUpdateModal(false);

  // open dialog
  const handleOpenUpdateDialog = () => {
    setUpdateModal(true)
  };

  // 

  return (
    <>
      <TableRow className=" w-full border-b border-slate-300 p-4 text-sm font-medium text-black *:text-black last-of-type:border-b">
        <TableCell>
              {faqs.question}
        </TableCell>

        <TableCell>{faqs.category}</TableCell>
        <TableCell className="w-[500px]">{faqs.answer}</TableCell>

        <TableCell>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="border border-transparent bg-transparent text-black hover:border-primary hover:bg-transparent hover:text-primary focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                size={"icon"}
              >
                <EllipsisVertical />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel className="sr-only">Actions</DropdownMenuLabel>
              <DropdownMenuItem className="cursor-pointer" onClick={handleOpenUpdateDialog}>
                <Pencil className="mr-2" size={15}/> 
                Edit
                </DropdownMenuItem>
                {" "}
              <DropdownMenuItem className="cursor-pointer" onClick={handleOpenDialog}> 
                <Trash2 className="mr-2" size={15}/>
                {" "}
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </TableCell>
      </TableRow>
      {isDialogOpen && <DeleteDialog onClose={handleCloseDialog} faqs={faqs}/>}
      {updateModal && <UpdateFaqModal onClose={handleCloseUpdateDialog} faqs={faqs}/>}
    </>
  );
};


const FaqTable = () => {
  const [faqs, setFaqs] = useState<FaqItem[]>([]);
   const [loading, setLoading] = useState(true)
       const [displayedFaqs, setDisplayedFaqs] = useState<FaqItem[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;

    // Get FAQs
  useEffect(() => {
    const fetchFaqs = async () => {
      const result = await getFaqs();
      if (result && (result.status === 200 || result.status === 201)) {
        setFaqs(result.data.data);
      } else {
        setFaqs([]);
      }

      setLoading(false);
    };
    fetchFaqs();
  }, []);

    useEffect(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const newDisplayedJobs = faqs.slice(startIndex, startIndex + pageSize);
    setDisplayedFaqs(newDisplayedJobs);
  }, [faqs, currentPage]);


  return (
    <div className="overflow-x-auto">
      <Table className="w-full min-w-[500px]">
        <TableCaption className="sr-only">
          A list of faqs.
        </TableCaption>

        <TableHeader>
          <TableRow className="border-none bg-primary/10 shadow-none *:text-base *:text-neutral-950 *:shadow-none hover:bg-primary/10">
            <TableHead>Frequently Asked Questions</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Answers</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>


{loading ? 
<TableSkeleton/>
:<>
          {displayedFaqs?.map((faq, index) => {
            return <FaqRow key={index} faqs={faq} />;
          })}
</>}
        </TableBody>
      </Table>

      <div className="mt-8 flex w-full items-center justify-center text-sm text-muted-foreground">
        <div className="my-20">
        {!loading && faqs?.length > pageSize && (
          <Pagination
            total={faqs.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onChange={(page) => setCurrentPage(page)}
          />
        )}
      </div>
      </div>
    </div>
  );
};

export default FaqTable;
