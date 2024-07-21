"use client";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import * as React from "react";
import { DateRange } from "react-day-picker";

import { Button } from "~/components/ui/button";
import { Calendar } from "~/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { cn } from "~/lib/utils";

interface DataItem {
  id: number;
  name: string;
  date: {
    from: Date;
    to: Date;
  };
}

interface DataProperties {
  className?: React.HTMLAttributes<HTMLDivElement>;
  data: DataItem[];
}

export function DatePickerWithRange({ className, data }: DataProperties) {
  const [date, setDate] = React.useState<DateRange | undefined>();

  function filterDateRanges(
    data: DataItem[],
    selectedDate: DateRange,
  ): DataItem[] {
    const filteredData = data.filter(
      (item) =>
        selectedDate?.from &&
        item.date.from.getTime() >= selectedDate?.from.getTime() &&
        selectedDate?.to &&
        item.date.to.getTime() <= selectedDate?.to.getTime(),
    );
    return filteredData;
  }

  React.useEffect(() => {
    if (date) {
      filterDateRanges(data, date);
    }
  }, [data, date]);

  return (
    <div className="">
      <div className={cn("grid gap-2", className)}>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id="date"
              variant={"outline"}
              data-testid="date-range-picker-button"
              className={cn(
                "w-[300px] justify-start text-left font-normal",
                !date && "text-muted-foreground",
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
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
                <span>Pick a date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="end">
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
    </div>
  );
}
