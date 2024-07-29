const tableHeadData: string[] = [
  "name",
  "email",
  "notes",
  "status",
  "created at",
  "action",
];

const WaitListTableHead = () => {
  return (
    <>
      <thead>
        <tr className="bg-[#FFF7F2]">
          {tableHeadData.map((data, index) => {
            return (
              <th
                key={index}
                className={`whitespace-nowrap p-4 text-left text-sm font-normal capitalize leading-4 text-neutral-dark-2 ${data === "name" ? "w-[300px]" : data === "action" ? "w-[86px]" : "w-[202px]"}`}
              >
                {data}
              </th>
            );
          })}
        </tr>
      </thead>
    </>
  );
};

export default WaitListTableHead;
