"use client";

import { format, subMonths } from "date-fns";
import { CalendarDaysIcon } from "lucide-react";
import { useState } from "react";
import { DateRange } from "react-day-picker";

import { Button } from "~/components/common/common-button";
import { Calendar } from "~/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { cn } from "~/lib/utils";

type DateSelectorProperties = {
  from?: Date;
  to?: Date;
  className?: string;
};
export function DateSelector({
  from = subMonths(new Date(), 1),
  to = new Date(),
  className,
}: DateSelectorProperties) {
  const [date, setDate] = useState<DateRange | undefined>({
    from,
    to,
  });

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "h-10 max-w-[256px] justify-start gap-1 p-2 text-left font-normal",
              !date && "text-muted-foreground",
            )}
          >
            <CalendarDaysIcon className="h-6 w-6" />
            <span className="truncate">
              {date?.from ? (
                date.to ? (
                  <>
                    {format(date.from, "LLL dd, y")} -{" "}
                    {format(date.to, "LLL dd, y")}
                  </>
                ) : (
                  format(date.from, "LLL dd, y")
                )
              ) : (
                "Pick a date"
              )}
            </span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
