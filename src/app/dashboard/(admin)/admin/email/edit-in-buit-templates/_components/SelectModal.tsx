import { SquarePen } from "lucide-react";

interface SelectModalProperties {
  onSelect: (component: JSX.Element) => void;
}

const SelectModal: React.FC<SelectModalProperties> = ({ onSelect }) => {
  const handleSelect = (component: JSX.Element) => {
    onSelect(component);
  };
  return (
    <div className="mt-2 flex h-auto flex-col items-center justify-center bg-slate-100 px-5 py-10 lg:w-4/5 lg:px-10 lg:py-20">
      <h1 className="w-full text-center text-xl font-semibold text-gray-400 md:w-7/12 md:text-2xl lg:w-8/12 lg:text-2xl">
        Choose an element to add to this section
      </h1>
      <div className="mt-10 grid grid-cols-3 gap-1 md:grid-cols-4 lg:grid-cols-5">
        <button
          onClick={() => handleSelect(<div>Welcome</div>)}
          className="flex h-16 w-16 flex-col items-center justify-center rounded-md bg-white p-2 hover:border hover:border-orange-500 md:h-24 md:w-24"
        >
          <SquarePen className="h-4 w-4 md:h-9 md:w-9 lg:h-10 lg:w-10" />
          <p className="text-xs font-semibold md:text-base lg:text-lg">
            Header
          </p>
        </button>
        <button className="flex h-16 w-16 flex-col items-center justify-center rounded-md bg-white p-2 hover:border hover:border-orange-500 md:h-24 md:w-24">
          <SquarePen className="h-4 w-4 md:h-9 md:w-9 lg:h-10 lg:w-10" />
          <p className="text-xs font-semibold md:text-base lg:text-lg">
            Header
          </p>
        </button>
        <button className="flex h-16 w-16 flex-col items-center justify-center rounded-md bg-white p-2 hover:border hover:border-orange-500 md:h-24 md:w-24">
          <SquarePen className="h-4 w-4 md:h-9 md:w-9 lg:h-10 lg:w-10" />
          <p className="text-xs font-semibold md:text-base lg:text-lg">
            Header
          </p>
        </button>
        <button className="flex h-16 w-16 flex-col items-center justify-center rounded-md bg-white p-2 hover:border hover:border-orange-500 md:h-24 md:w-24">
          <SquarePen className="h-4 w-4 md:h-9 md:w-9 lg:h-10 lg:w-10" />
          <p className="text-xs font-semibold md:text-base lg:text-lg">
            Header
          </p>
        </button>
        <button className="flex h-16 w-16 flex-col items-center justify-center rounded-md bg-white p-2 hover:border hover:border-orange-500 md:h-24 md:w-24">
          <SquarePen className="h-4 w-4 md:h-9 md:w-9 lg:h-10 lg:w-10" />
          <p className="text-xs font-semibold md:text-base lg:text-lg">
            Header
          </p>
        </button>
      </div>
    </div>
  );
};

export default SelectModal;
