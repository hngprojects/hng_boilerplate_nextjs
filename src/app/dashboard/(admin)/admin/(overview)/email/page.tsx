"use client";

import { ChevronLeft, ChevronRightIcon } from "lucide-react";
import Image from "next/image";

import Table from "~/app/dashboard/(admin)/admin/(overview)/email/_components/table";
import Topmenu from "~/app/dashboard/(admin)/admin/(overview)/email/_components/top-menu";
import { Button } from "~/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "~/components/ui/pagination";
import arrow from "./_components/assets/arrow-right-up.png";
import money from "./_components/assets/money.png";
import person from "./_components/assets/person.png";

const cards = [
  {
    name: "Total Templates",
    value: "$45,000.00",
    comment: "+20% from last month",
    image: money,
  },
  {
    name: "Recent Additions",
    value: "4,000",
    comment: "+10% from last month",
    image: person,
  },
  {
    name: "Pending actions",
    value: "$450,000.00",
    comment: "+150% from last month",
    image: arrow,
  },
];

const page = () => {
  return (
    <section className="flex flex-col">
      <div>
        <h1 className="text-xl font-bold md:text-2xl">
          Email Template Overview
        </h1>
        <h4 className="text-sm">Showing records from the last .....</h4>
      </div>
      <div className="mt-8 flex flex-col flex-wrap gap-4 lg:flex-row">
        {cards.map((card, index) => {
          return (
            <div
              key={index}
              className="flex w-full items-start justify-between rounded-xl p-6 shadow-lg lg:w-[30%]"
            >
              <div className="flex flex-col gap-1">
                <h4 className="text-sm font-medium">{card.name}</h4>
                <h2 className="text-2xl font-semibold">{card.value}</h2>
                <span className="text-xs font-normal">{card.comment}</span>
              </div>
              <Image src={card.image} alt={card.name} />
            </div>
          );
        })}
      </div>

      <div>
        <Topmenu />
      </div>
      <div className="">
        <Table />
      </div>

      <div className="mt-8 flex w-full items-center justify-between">
        <p>Showing 1 to 4 of 50 items</p>
        <div className="">
          <Pagination className="">
            <PaginationContent>
              <PaginationItem>
                <Button variant={"ghost"}>
                  <ChevronLeft />
                </Button>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink className="bg-transparent shadow-none" href="#">
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive={true}>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink className="bg-transparent shadow-none" href="#">
                  3
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <Button variant={"ghost"}>
                  Next <ChevronRightIcon />
                </Button>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </section>
  );
};

export default page;
