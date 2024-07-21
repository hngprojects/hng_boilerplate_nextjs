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
  const [selectedDate, setSelectedDate] = React.useState<
    DateRange | undefined
  >();

  function filterDateRanges(
    data: DataItem[],
    selectedDate: DateRange,
  ): DataItem[] {
    return data.filter(
      (item) =>
        selectedDate?.from &&
        item.date.from.getTime() >= selectedDate?.from.getTime() &&
        selectedDate?.to &&
        item.date.to.getTime() <= selectedDate?.to.getTime(),
    );
  }

  React.useEffect(() => {
    if (selectedDate) {
      filterDateRanges(data, selectedDate);
    }
  }, [data, selectedDate]);

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
                !selectedDate && "text-muted-foreground",
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {selectedDate?.from && selectedDate.to && (
                <>
                  {format(selectedDate.from, "LLL dd, y")} -{" "}
                  {format(selectedDate.to, "LLL dd, y")}
                </>
              )}

              {selectedDate?.from &&
                !selectedDate.to &&
                format(selectedDate.from, "LLL dd, y")}

              {!selectedDate?.from && !selectedDate?.to && (
                <span>Pick a date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="end">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={selectedDate?.from}
              selected={selectedDate}
              onSelect={setSelectedDate}
              numberOfMonths={2}
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
