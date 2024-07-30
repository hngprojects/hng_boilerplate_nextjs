import { EllipsisVertical } from "lucide-react";

const index = async () => {
  return (
    <div className="mt-8">
      <div className="mt-4 flex w-full items-center justify-center bg-[#FFF7F2] p-4 text-base font-normal">
        <div className="flex w-[30%] items-center gap-1">
          <input type="checkbox" />
          <h4>Name</h4>
        </div>
        <h4 className="w-[30%] text-center">Type</h4>
        <h4 className="w-[30%] text-center">Created Date</h4>
        <h4 className="w-[30%] text-center">Status</h4>
        <h4 className="w-[10%] text-center">Action</h4>
      </div>

      <div className="mt-4 flex w-full items-center border-b-2 border-border p-4 text-sm font-medium">
        <div className="flex w-[30%] items-center gap-1">
          <input type="checkbox" />
          <h4>The Lemonade blender</h4>
        </div>
        <h4 className="w-[30%] text-center">Product</h4>
        <h4 className="w-[30%] text-center">01-01-24</h4>
        <h4 className="w-[30%] text-center">
          <span className="w-fit rounded-xl bg-red-200 px-8 py-1 text-center text-white">
            Offline
          </span>
        </h4>
        <h4 className="flex w-[10%] justify-center text-center">
          <button>
            <span className="">
              <EllipsisVertical />
            </span>
          </button>
        </h4>
      </div>
    </div>
  );
};

export default index;
