import CardDataContent from "~/components/SuperAdminUserPage/ui/CardData";
import UsersDataTable from "~/components/SuperAdminUserPage/UsersDataTable";

export default function Home() {
  return (
    <div className="flex w-[80%] flex-col">
      <div className="p-7">
        <CardDataContent />
      </div>

      <div className="text-wrap p-7">
        <UsersDataTable />
      </div>
    </div>
  );
}
