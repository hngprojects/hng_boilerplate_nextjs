import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";

interface DataItem {
  id: string;
  name: string;
  status: "down" | "degraded" | "operational";
}

interface ComponentProperties {
  status: "down" | "degraded" | "operational";
  data: DataItem[];
}

const statusStyles = {
  down: "text-red-500",
  degraded: "text-yellow-500",
  operational: "text-green-500",
};

const StatusTable = ({ status, data }: ComponentProperties) => {
  const tableHeadClassName = `text-right text-sm font-normal capitalize p-2 text-left align-middle font-medium text-neutral-dark-2 sm:p-4 ${statusStyles[status]}`;

  return (
    <div className="rounded-sm border border-border">
      <div>
        <div className="flex items-center border-b border-b-border hover:bg-transparent">
          <div className="mr-auto px-2 text-left align-middle font-medium text-neutral-dark-2 sm:px-4">
            HNG Boilerplate Website
          </div>
          <div className={tableHeadClassName}>{status}</div>
        </div>
      </div>
      <div>
        {data.length === 0 ? (
          <div>
            <div className="text-center">Nothing to show here</div>
          </div>
        ) : (
          data.map(({ id, name, status }) => (
            <StatusTableRow id={id} key={id} name={name} status={status} />
          ))
        )}
      </div>
    </div>
  );
};

const StatusTableRow = ({ name, status, id }: DataItem) => {
  const cellClassName = `text-right text-sm font-normal capitalize p-2 text-left align-middle font-medium text-neutral-dark-2 sm:p-4 ${statusStyles[status]}`;

  return (
    <div className="hover:bg-transparent">
      <Accordion type="single" collapsible>
        <AccordionItem value={id}>
          <AccordionTrigger className="flex w-full items-center outline-none">
            <div className="mr-auto p-2 text-left align-middle font-medium text-neutral-dark-2 sm:p-4">
              {name}
            </div>
            <div className={cellClassName}>{status}</div>
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default StatusTable;
