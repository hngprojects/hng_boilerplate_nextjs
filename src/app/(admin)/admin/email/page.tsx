import NewTemplate from "./_components/new-template/NewTemplate";
import Toptab from "./_components/Toptab";

const tabs = [
  {
    name: "New Template",
    value: "new",
    content: <NewTemplate />,
  },
  {
    name: "Manage Template",
    value: "manage",
    content: <div></div>,
  },
];

const page = () => {
  return <div>{<Toptab tabs={tabs} />}</div>;
};

export default page;
