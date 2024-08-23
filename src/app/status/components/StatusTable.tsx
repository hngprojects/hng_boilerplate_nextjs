"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { SquareMinus, SquarePlus } from "lucide-react";
import { useState } from "react";

import { DataItems } from "../page";

interface ComponentProperties {
  status: "down" | "degraded" | "operational";
  data: DataItems[];
}

const statusStyles = {
  down: "text-red-500",
  degraded: "text-yellow-500",
  operational: "text-green-500",
};

const StatusTable = ({ status, data }: ComponentProperties) => {
  const tableHeadClassName = getStatusClassName(status);

  return (
    <div className="rounded-sm border border-border">
      <HeaderRow status={status} className={tableHeadClassName} />

      <div>
        {data.length === 0 ? (
          <EmptyState />
        ) : (
          data.map(
            ({ id, name, status, lastChecked, responseTime, details }) => (
              <StatusTableRow
                key={id}
                id={id}
                name={name}
                status={status}
                lastChecked={lastChecked}
                responseTime={responseTime}
                details={details}
              />
            ),
          )
        )}
      </div>
    </div>
  );
};

const HeaderRow = ({
  status,
  className,
}: {
  status: string;
  className: string;
}) => (
  <div className="flex items-center border-b border-b-border hover:bg-transparent">
    <div className="mr-auto px-2 text-left align-middle font-medium text-neutral-dark-2 sm:px-4">
      HNG Boilerplate Website
    </div>
    <div className={className}>{status}</div>
  </div>
);

const EmptyState = () => (
  <div className="text-center">Nothing to show here</div>
);

const StatusTableRow = ({
  name,
  status,
  id,
  lastChecked,
  responseTime,
  details,
}: DataItems) => {
  const cellClassName = getStatusClassName(status);
  const [open, setOpen] = useState<string | "">("");

  return (
    <div className="border-b border-b-border last:border-b-0 hover:bg-transparent">
      <Accordion
        type="single"
        collapsible
        value={open}
        onValueChange={(value) => setOpen(value)}
      >
        <AccordionItem value={id}>
          <AccordionTrigger className="flex w-full items-center outline-none">
            <div className="mr-auto flex items-center gap-1 px-2 text-left align-middle text-sm font-medium text-neutral-dark-2 sm:px-4">
              <ToggleIcon isOpen={open === id} />
              <div>{name}</div>
            </div>
            <div className={cellClassName}>{status}</div>
          </AccordionTrigger>
          <AccordionContent className="align-middle text-sm font-normal text-neutral-dark-2">
            <InfoRow label="Last Checked" value={lastChecked} />
            <InfoRow label="Response Time" value={responseTime} />
            <InfoRow label="Details" value={details} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex items-center">
    <div className="mr-auto px-2 text-xs sm:px-4">{label}</div>
    <div className="p-2 text-left align-middle text-xs font-normal capitalize text-neutral-dark-2 sm:px-4">
      {value}
    </div>
  </div>
);

const getStatusClassName = (status: "down" | "degraded" | "operational") =>
  `text-sm font-normal capitalize p-2 text-left align-middle sm:p-4 ${statusStyles[status]}`;

const ToggleIcon = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div>
      {isOpen ? (
        <SquareMinus size={13} strokeWidth={0.5} />
      ) : (
        <SquarePlus size={13} strokeWidth={0.5} />
      )}
    </div>
  );
};

export default StatusTable;
