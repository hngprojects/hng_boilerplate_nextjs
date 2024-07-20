"use client"
import React, { useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import CalenderIcon from "../../../../public/calander.svg";
import styles from "../DateSwitcher/DateSwitcher.module.css"

export default function DateSwitcher() {
    const [dates, setDates] = useState<DateObject[]>([
        new DateObject({ year: 2024, month: 1, day: 20 }),
        new DateObject({ year: 2024, month: 2, day: 9 }),
    ]);

    return (
        <div className="relative">
            <div className={`flex items-center gap-[4px] p-[8px] rounded-sm border border-solid border-stroke ${styles.datepickerContainer}`}>
                <CalenderIcon />
                <DatePicker
                    value={dates}
                    onChange={setDates}
                    arrow={false}
                    multiple
                    numberOfMonths={2}
                    // className="bg-white border border-[#F97316] text-[#F97316] focus:border-[#F97316] focus:ring-[#F97316]"
                />
            </div>
        </div>
    );
}
