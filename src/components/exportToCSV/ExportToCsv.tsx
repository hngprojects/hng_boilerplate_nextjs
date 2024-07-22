"use client";

import CustomButton from "../common/Button/button";

interface Properties {
  members: object[];
}

function convertToCSV(data: object[]): string {
  const headers = Object.keys(data[0]).join(",");
  const rows = data.map((item) => Object.values(item).join(","));
  return `${headers}\n${rows.join("\n")}`;
}
export default function ExportToCsv({ members }: Properties) {
  const handleExportClick = () => {
    const csvData = convertToCSV(members);

    const blob = new Blob([csvData], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Members-List.csv";
    document.body.append(link);
    link.click();
  };

  return (
    <div className="flex w-full flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-col gap-2 lg:w-4/5">
        <h1 className="text-2xl font-medium">Export Members List</h1>
        <p className="text-base">
          Export a CSV with information of all members of your team
        </p>
      </div>

      <CustomButton
        variant="primary"
        size="lg"
        onClick={() => handleExportClick()}
      >
        Export CSV
      </CustomButton>
    </div>
  );
}
