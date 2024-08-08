"use client";

import {
  CirclePlus,
  EllipsisVertical,
  Pencil,
  SearchIcon,
  Trash2,
} from "lucide-react";
import { useEffect, useState } from "react";

import { getFaqs } from "~/actions/externalPages";
import { Button } from "~/components/common/common-button";
import Pagination from "~/components/layouts/pagination/Pagination";
import TableSkeleton from "~/components/skeleton/tableskeleton";
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
import AddFaqModal from "./_components/FaqModal/add-faq-modal";
import DeleteDialog from "./_components/FaqModal/delete-dialog";
import UpdateFaqModal from "./_components/FaqModal/update-faq-modal";

// Define a type for the FAQ items
interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const FaqPage = () => {
  const [faqs, setFaqs] = useState<FaqItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [displayedFaqs, setDisplayedFaqs] = useState<FaqItem[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [createModal, setCreateModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [selectedFaq, setSelectedFaq] = useState<FaqItem | undefined>();
  const handleCloseDialog = () => setIsDialogOpen(false);
  const handleCloseUpdateDialog = () => setUpdateModal(false);
  const [callback, setCallback] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState("");
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
  }, [callback]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const newDisplayedJobs = faqs.slice(startIndex, startIndex + pageSize);
    setDisplayedFaqs(newDisplayedJobs);
  }, [faqs, currentPage]);

  // open update dialog and set selected FAQ
  const handleOpenUpdateDialog = (faq: FaqItem) => {
    setSelectedFaq(faq);
    setUpdateModal(true);
  };

  const handleOpenDialog = (faq: FaqItem) => {
    setSelectedFaq(faq);
    setIsDialogOpen(true);
  };

  // search filter
  const filteredFaqs = displayedFaqs?.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchValue.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchValue.toLowerCase()),
  );

  //
  return (
    <main className="px-1 py-3">
      <div className="flex w-full flex-col items-start justify-start gap-2.5 lg:w-fit">
        <h1 className="self-stretch text-[28px] font-semibold text-black">
          FAQ
        </h1>
        <p className="self-stretch text-sm font-normal leading-3 text-black">
          Manage your frequently asked questions efficiently.
        </p>
      </div>

      <div className="mt-6 flex w-full flex-col items-center justify-start gap-3 md:flex-row">
        <div className="flex h-10 w-[300px] items-center justify-between gap-2 rounded-[6px] border border-border bg-white px-3 text-sm font-normal placeholder:text-sm">
          <SearchIcon
            data-testid="search"
            className="h-4 w-4 text-neutral-dark-2"
          />
          <input
            className="h-full w-full border-none text-neutral-dark-2 outline-none ring-0 placeholder:text-neutral-dark-1"
            placeholder="Search option..."
            data-testid="input"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
          />
        </div>

        <div className="ml-0 flex w-full items-center justify-start gap-[10px] md:justify-end lg:ml-auto lg:w-fit">
          <Button
            onClick={() => setCreateModal(true)}
            className="inline-flex h-10 items-center justify-center bg-primary"
          >
            <CirclePlus />
            Add FAQ
          </Button>
        </div>
      </div>

      <div className="mt-10">
        <div className="overflow-x-auto">
          <Table className="min-w-[900px] lg:w-full">
            <TableCaption className="sr-only">A list of faqs.</TableCaption>

            <TableHeader>
              <TableRow className="border-none bg-primary/10 shadow-none *:text-base *:text-neutral-950 *:shadow-none hover:bg-primary/10">
                <TableHead>Frequently Asked Questions</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Answers</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {loading ? (
                <TableSkeleton />
              ) : (
                <>
                  {filteredFaqs?.map((faq, index) => {
                    return (
                      <TableRow
                        key={index}
                        className="w-full border-b border-slate-300 p-4 text-sm font-medium text-black *:text-black last-of-type:border-b"
                      >
                        <TableCell>{faq.question}</TableCell>

                        <TableCell>{faq.category}</TableCell>
                        <TableCell className="w-[500px]">
                          {faq.answer}
                        </TableCell>

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
                              <DropdownMenuLabel className="sr-only">
                                Actions
                              </DropdownMenuLabel>
                              <DropdownMenuItem
                                className="cursor-pointer"
                                onClick={() => handleOpenUpdateDialog(faq)}
                              >
                                <Pencil className="mr-2" size={15} />
                                Edit
                              </DropdownMenuItem>{" "}
                              <DropdownMenuItem
                                className="cursor-pointer"
                                onClick={() => handleOpenDialog(faq)}
                              >
                                <Trash2 className="mr-2" size={15} /> Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </>
              )}
            </TableBody>
          </Table>

          {/* create modal */}
          {createModal && (
            <AddFaqModal
              onClose={() => setCreateModal(false)}
              callback={callback}
              setCallback={setCallback}
            />
          )}

          {/* delete modal */}
          {isDialogOpen && selectedFaq && (
            <DeleteDialog
              onClose={handleCloseDialog}
              faqs={selectedFaq}
              callback={callback}
              setCallback={setCallback}
            />
          )}

          {/* update modal */}
          {updateModal && selectedFaq && (
            <UpdateFaqModal
              onClose={handleCloseUpdateDialog}
              faqs={selectedFaq}
              callback={callback}
              setCallback={setCallback}
            />
          )}

          {!loading && faqs?.length === 0 && (
            <p className="mt-40 text-center">No data available</p>
          )}

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
      </div>
    </main>
  );
};

export default FaqPage;
