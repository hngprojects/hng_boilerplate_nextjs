import ExportToCsv from "~/components/exportToCSV/ExportToCsv";

export default function Members() {
  // Dummy data to test the export to csv funtionality
  const data = [
    { name: "John Doe", email: "john@example.com", role: "Admin" },
    { name: "Jane Smith", email: "jane@example.com", role: "User" },
  ];
  return (
    <div className="flex h-screen flex-col gap-5 px-5 py-7">
      <div className="flex w-11/12 flex-col gap-2 border-b border-border pb-8 lg:w-[750px] xl:w-[894px]">
        <h1 className="text-2xl font-medium">Members</h1>
        <p className="text-base">Manage who has access to this workspace</p>
      </div>

      {/* There is to be a componet here for invite link but it was never delivered */}
      <div className="flex w-11/12 flex-col gap-2 border-b border-border pb-8 lg:w-[750px] xl:w-[894px]">
        <h1 className="text-2xl font-medium">Invite Link</h1>
      </div>

      {/* There is to be another componet here for Manage members but it was never delivered */}
      <div className="flex w-11/12 flex-col gap-2 border-b border-border pb-8 lg:w-[750px] xl:w-[894px]">
        <h1 className="text-2xl font-medium">Manage Members</h1>
      </div>

      {/* Export menbers component created by myself */}
      <div className="w-11/12 border-b border-border pb-8 lg:w-[750px] xl:w-[894px]">
        <ExportToCsv members={data} />
      </div>
    </div>
  );
}
