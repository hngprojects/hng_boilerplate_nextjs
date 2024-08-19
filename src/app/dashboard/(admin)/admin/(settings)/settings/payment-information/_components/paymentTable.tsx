"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

const TableComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("Basic");

  const toggleTable = () => {
    setIsOpen(!isOpen);
  };

  const handlePlanChange = (value: string) => {
    setSelectedPlan(value);
  };

  const planValues: Record<string, number> = {
    Free: 1,
    Basic: 2,
    Advanced: 3,
    Premium: 4,
  };

  return (
    <section className="mt-4">
      <div
        className="my-3 flex cursor-pointer items-center gap-2"
        onClick={toggleTable}
      >
        <p>Compare all features</p>
        <ChevronDown
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </div>

      {isOpen && (
        <div
          className={`transition-max-height overflow-hidden duration-500 ease-in-out ${isOpen ? "max-h-[2000px]" : "max-h-0"}`}
        >
          <div className="overflow-x-auto border-[#CBD5E1] md:border-x md:border-b">
            <div className="mb-2 flex w-full items-center justify-between bg-[#FFF8F2] px-3 py-3 md:mb-0 md:py-7">
              <h2 className="font-semibold">Product Management</h2>
              <div className="md:hidden">
                <Select onValueChange={handlePlanChange}>
                  <SelectTrigger className="w-fit">
                    <SelectValue placeholder="Basic" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel></SelectLabel>
                      <SelectItem value="Free">Free</SelectItem>
                      <SelectItem value="Basic">Basic</SelectItem>
                      <SelectItem value="Advanced">Advanced</SelectItem>
                      <SelectItem value="Premium">Premium</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <table className="min-w-full bg-white">
              <tbody>
                <tr className="table-row w-full border-y border-[#CBD5E1]">
                  <td className="w-1/2 px-4 py-2 md:w-1/5">Projects</td>
                  <td className="hidden w-1/5 px-4 py-2 md:table-cell md:text-center">
                    Up to 5
                  </td>
                  <td className="hidden w-1/5 px-4 py-2 md:table-cell md:text-center">
                    Up to 5
                  </td>
                  <td className="hidden w-1/5 px-4 py-2 md:table-cell md:text-center">
                    Up to 5
                  </td>
                  <td className="hidden w-1/5 px-4 py-2 md:table-cell md:text-center">
                    Unlimited
                  </td>
                  <td className="w-1/2 px-4 py-2 text-right text-sm md:hidden">
                    {planValues[selectedPlan] === 1
                      ? "Up to 5"
                      : planValues[selectedPlan] === 4
                        ? "Unlimited"
                        : "Up to 5"}
                  </td>
                </tr>
                <tr className="w-full border">
                  <td className="w-1/2 px-4 py-2 md:w-1/5">File Upload</td>
                  <td className="hidden w-1/5 px-4 py-2 md:table-cell md:text-center">
                    10gb
                  </td>
                  <td className="hidden w-1/5 px-4 py-2 md:table-cell md:text-center">
                    20gb
                  </td>
                  <td className="hidden w-1/5 px-4 py-2 md:table-cell md:text-center">
                    50gb
                  </td>
                  <td className="hidden w-1/5 px-4 py-2 md:table-cell md:text-center">
                    Unlimited
                  </td>
                  <td className="w-1/2 px-4 py-2 text-right text-sm md:hidden">
                    {planValues[selectedPlan] === 1
                      ? "10gb"
                      : planValues[selectedPlan] === 2
                        ? "20gb"
                        : planValues[selectedPlan] === 3
                          ? "50gb"
                          : "Unlimited"}
                  </td>
                </tr>
                <tr className="w-full border">
                  <td className="w-1/2 px-4 py-2 md:w-1/5">User Account</td>
                  <td className="hidden w-1/5 px-4 py-2 text-center md:table-cell">
                    1
                  </td>
                  <td className="hidden w-1/5 px-4 py-2 text-center md:table-cell">
                    10
                  </td>
                  <td className="hidden w-1/5 px-4 py-2 text-center md:table-cell">
                    50
                  </td>
                  <td className="hidden w-1/5 px-4 py-2 text-center md:table-cell">
                    Unlimited
                  </td>
                  <td className="w-1/2 px-4 py-2 text-right text-sm md:hidden">
                    {planValues[selectedPlan] === 1
                      ? "1"
                      : planValues[selectedPlan] === 2
                        ? "10"
                        : planValues[selectedPlan] === 3
                          ? "50"
                          : "Unlimited"}
                  </td>
                </tr>
                <tr className="w-full border">
                  <td className="w-1/2 px-4 py-2 md:w-1/5">Teams</td>
                  <td className="hidden w-1/5 px-4 py-2 text-center md:table-cell">
                    1
                  </td>
                  <td className="hidden w-1/5 px-4 py-2 text-center md:table-cell">
                    Unlimited
                  </td>
                  <td className="hidden w-1/5 px-4 py-2 text-center md:table-cell">
                    Unlimited
                  </td>
                  <td className="hidden w-1/5 px-4 py-2 text-center md:table-cell">
                    Unlimited
                  </td>
                  <td className="w-1/2 px-4 py-2 text-right text-sm md:hidden">
                    {planValues[selectedPlan] === 1 ? "1" : "Unlimited"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-3 overflow-x-auto border-[#CBD5E1] md:mt-0 md:border-x md:border-b">
            <div className="mb-2 flex w-full items-center justify-between bg-[#FFF8F2] px-3 py-3 md:mb-0 md:py-7">
              <h2 className="font-semibold">Sharing and collaboration</h2>
              <div className="md:hidden">
                <Select>
                  <SelectTrigger className="w-fit">
                    <SelectValue placeholder="Basic" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel></SelectLabel>
                      <SelectItem value="Free">Free</SelectItem>
                      <SelectItem value="Basic">Basic</SelectItem>
                      <SelectItem value="Advanced">Advanced</SelectItem>
                      <SelectItem value="Premium">Premium</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <table className="min-w-full border-t border-[#FFF8F2] bg-white">
              <tbody>
                <tr className="border-y border-[#CBD5E1]">
                  <td className="w-1/2 px-4 py-2 md:w-1/5">Integration</td>
                  <td className="hidden w-1/5 px-4 py-2 text-center md:table-cell">
                    ✔︎
                  </td>
                  <td className="hidden w-1/5 px-4 py-2 text-center md:table-cell">
                    ✔︎
                  </td>
                  <td className="hidden w-1/5 px-4 py-2 text-center md:table-cell">
                    ✔︎
                  </td>
                  <td className="hidden w-1/5 px-4 py-2 text-center md:table-cell">
                    ✔︎
                  </td>
                  <td className="w-1/2 px-4 py-2 text-right text-sm md:hidden">
                    {planValues[selectedPlan] === 1 ? "✔︎" : "✔︎"}
                  </td>
                </tr>
                <tr className="w-full border-b">
                  <td className="w-1/2 px-4 py-2 md:w-1/5">Guest Access</td>
                  <td className="hidden w-1/5 px-4 py-2 text-center md:table-cell">
                    ✔︎
                  </td>
                  <td className="hidden w-1/5 px-4 py-2 text-center md:table-cell">
                    ✔︎
                  </td>
                  <td className="hidden w-1/5 px-4 py-2 text-center md:table-cell">
                    ✔︎
                  </td>
                  <td className="hidden w-1/5 px-4 py-2 text-center md:table-cell">
                    ✔︎
                  </td>
                  <td className="w-1/2 px-4 py-2 text-right text-sm md:hidden">
                    {planValues[selectedPlan] === 1 ? "✔︎" : "✔︎"}
                  </td>
                </tr>
                <tr className="w-full border-b">
                  <td className="w-1/2 px-4 py-2 md:w-1/5">Page Analysis</td>
                  <td className="hidden w-1/5 px-4 py-2 text-center md:table-cell">
                    ✔︎
                  </td>
                  <td className="hidden w-1/5 px-4 py-2 text-center md:table-cell">
                    ✔︎
                  </td>
                  <td className="hidden w-1/5 px-4 py-2 text-center md:table-cell">
                    ✔︎
                  </td>
                  <td className="hidden w-1/5 px-4 py-2 text-center md:table-cell">
                    ✔︎
                  </td>
                  <td className="w-1/2 px-4 py-2 text-right text-sm md:hidden">
                    {planValues[selectedPlan] === 1 ? "✔︎" : "✔︎"}
                  </td>
                </tr>
                <tr className="w-full border-b">
                  <td className="w-1/2 px-4 py-2 md:w-1/5">Task Management</td>
                  <td className="hidden w-1/5 px-4 py-2 text-center md:table-cell">
                    ✔︎
                  </td>
                  <td className="hidden w-1/5 px-4 py-2 text-center md:table-cell">
                    ✔︎
                  </td>
                  <td className="hidden w-1/5 px-4 py-2 text-center md:table-cell">
                    ✔︎
                  </td>
                  <td className="hidden w-1/5 px-4 py-2 text-center md:table-cell">
                    ✔︎
                  </td>
                  <td className="w-1/2 px-4 py-2 text-right text-sm md:hidden">
                    {planValues[selectedPlan] === 1 ? "✔︎" : "✔︎"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-3 overflow-x-auto border-[#CBD5E1] md:mt-0 md:border-x md:border-b">
            <div className="mb-2 flex w-full items-center justify-between bg-[#FFF8F2] px-3 py-3 md:mb-0 md:py-7">
              <h2 className="font-bold">Management and security</h2>
              <div className="md:hidden">
                <Select>
                  <SelectTrigger className="w-fit">
                    <SelectValue placeholder="Basic" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel></SelectLabel>
                      <SelectItem value="Free">Free</SelectItem>
                      <SelectItem value="Basic">Basic</SelectItem>
                      <SelectItem value="Advanced">Advanced</SelectItem>
                      <SelectItem value="Premium">Premium</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <table className="min-w-full bg-white">
              <tbody>
                <tr className="w-full border-y border-[#CBD5E1]">
                  <td className="w-1/2 px-4 py-2 md:w-1/5">Team Security</td>
                  <td className="hidden w-1/5 px-4 py-2 text-center md:table-cell"></td>
                  <td className="hidden w-1/5 px-4 py-2 text-center md:table-cell">
                    ✔︎
                  </td>
                  <td className="hidden w-1/5 px-4 py-2 text-center md:table-cell">
                    ✔︎
                  </td>
                  <td className="hidden w-1/5 px-4 py-2 text-center md:table-cell">
                    ✔︎
                  </td>
                  <td className="w-1/2 px-4 py-2 text-right text-sm md:hidden">
                    {planValues[selectedPlan] === 1 ? "" : "✔︎"}
                  </td>
                </tr>
                <tr className="w-full border">
                  <td className="w-1/2 px-4 py-2 md:w-1/5">Data Backup</td>
                  <td className="hidden w-1/5 px-4 py-2 text-center md:table-cell"></td>
                  <td className="hidden w-1/5 px-4 py-2 text-center md:table-cell">
                    ✔︎
                  </td>
                  <td className="hidden w-1/5 px-4 py-2 text-center md:table-cell">
                    ✔︎
                  </td>
                  <td className="hidden w-1/5 px-4 py-2 text-center md:table-cell">
                    ✔︎
                  </td>
                  <td className="w-1/2 px-4 py-2 text-right text-sm md:hidden">
                    {planValues[selectedPlan] === 1 ? "" : "✔︎"}
                  </td>
                </tr>
                <tr className="w-full border">
                  <td className="w-1/2 px-4 py-2 md:w-1/5">HIPAA Compliance</td>
                  <td className="hidden w-1/5 px-4 py-2 text-center md:table-cell"></td>
                  <td className="hidden w-1/5 px-4 py-2 text-center md:table-cell">
                    ✔︎
                  </td>
                  <td className="hidden w-1/5 px-4 py-2 text-center md:table-cell">
                    ✔︎
                  </td>
                  <td className="hidden w-1/5 px-4 py-2 text-center md:table-cell">
                    ✔︎
                  </td>
                  <td className="w-1/2 px-4 py-2 text-right text-sm md:hidden">
                    {planValues[selectedPlan] === 1 ? "" : "✔︎"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-3 overflow-x-auto border-[#CBD5E1] md:mt-0 md:border-x md:border-b">
            <div className="mb-2 flex w-full items-center justify-between bg-[#FFF8F2] px-3 py-3 md:mb-0 md:py-7">
              <h2 className="font-bold">Support</h2>
              <div className="md:hidden">
                <Select>
                  <SelectTrigger className="w-fit">
                    <SelectValue placeholder="Basic" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel></SelectLabel>
                      <SelectItem value="Free">Free</SelectItem>
                      <SelectItem value="Basic">Basic</SelectItem>
                      <SelectItem value="Advanced">Advanced</SelectItem>
                      <SelectItem value="Premium">Premium</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <table className="min-w-full bg-white">
              <tbody>
                <tr className="w-full border border-[#CBD5E1]">
                  <td className="w-1/2 px-4 py-2 md:w-1/5">Priority Support</td>
                  <td className="hidden w-1/5 px-4 py-2 text-center md:table-cell">
                    ✔︎
                  </td>
                  <td className="hidden w-1/5 px-4 py-2 text-center md:table-cell">
                    ✔︎
                  </td>
                  <td className="hidden w-1/5 px-4 py-2 text-center md:table-cell">
                    ✔︎
                  </td>
                  <td className="hidden w-1/5 px-4 py-2 text-center md:table-cell">
                    ✔︎
                  </td>
                  <td className="w-1/2 px-4 py-2 text-right text-sm md:hidden">
                    {planValues[selectedPlan] === 1 ? "✔︎" : "✔︎"}
                  </td>
                </tr>
                <tr className="w-full border">
                  <td className="w-1/2 px-4 py-2 md:w-1/5">Customer Support</td>
                  <td className="hidden w-1/5 px-4 py-2 text-center md:table-cell"></td>
                  <td className="hidden w-1/5 px-4 py-2 text-center md:table-cell">
                    ✔︎
                  </td>
                  <td className="hidden w-1/5 px-4 py-2 text-center md:table-cell">
                    ✔︎
                  </td>
                  <td className="hidden w-1/5 px-4 py-2 text-center md:table-cell">
                    ✔︎
                  </td>
                  <td className="w-1/2 px-4 py-2 text-right text-sm md:hidden">
                    {planValues[selectedPlan] === 1 ? "" : "✔︎"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  );
};

export default TableComponent;
