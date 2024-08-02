"use client";

import { useEffect, useMemo, useState } from "react";

import { Checkbox } from "~/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { Squeeze, squeezePages } from "../data/mock.squeeze";
import PageTableCell from "./PageTableCell";
import { useSearchParams } from "next/navigation";

export default function Pages() {

  const searchParams = useSearchParams();
  const search = searchParams.get('search');

  const [pages, setPages] = useState<Squeeze[]>([]);
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [checkAllStatus, setCheckAllStatus] = useState(false);

  const filteredPages = useMemo(() => search ? squeezePages.filter((each) => each.title.toLowerCase().includes(search.toLowerCase())) : squeezePages, [search]);

  useEffect(() => {
    setPages(filteredPages);
  }, [filteredPages]);

  const checkAll = () => {
    const checkMap: Record<string, boolean> = {};
    for (const each of pages) {
      checkMap[each.title] = true;
    }

    setChecked(checkMap);
    setCheckAllStatus(true);
  };

  const uncheckAll = () => {
    const checkMap: Record<string, boolean> = {};
    for (const each of pages) {
      checkMap[each.title] = false;
    }

    setChecked(checkMap);
    setCheckAllStatus(false);
  };

  return (
    <section>
      <Table divClassName="text-neutral-dark-2" className="">
        <TableHeader className="rounded border-b-0 bg-[#fff7f2]">
          <TableRow className="border-0">
            <TableHead
              className="flex items-center gap-2"
              style={{ border: "0px !important" }}
            >
              <Checkbox
                id="example-checkbox"
                checked={checkAllStatus}
                onCheckedChange={() => {
                  checkAllStatus ? uncheckAll() : checkAll();
                }}
                className="h-5 w-5"
              />
              Page Title
            </TableHead>
            <TableHead>Url Slug</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Created Date</TableHead>
            <TableHead>Activate</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="text-neutral-dark-2">
          {pages.map((each) => {
            return (
              <PageTableCell
                key={each.title}
                page={each}
                pages={pages}
                setPages={setPages}
                checked={checked}
                setChecked={setChecked}
              />
            );
          })}
        </TableBody>
      </Table>
    </section>
  );
}
