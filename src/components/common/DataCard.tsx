import Image from "next/image";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

function DataCard() {
  //   const data: { price: number; pecentage: number }[] = [
  //     { price: 45_000, pecentage: 20 },
  //     { price: 45_000, pecentage: 20 },
  //     { price: 45_000, pecentage: 20 },
  //   ];
  //   return (
  //     <div className="px-6 pt-[23px] pb-[28px]">
  //       <div className="flex justify-between">
  //         <span className="text-sm font-medium">Total Revenue</span>
  //         <span>
  //           <Image src="/dollar.svg" width={24} height={24} alt="#" />
  //         </span>
  //       </div>
  // <h4 className="text-[24px] font-semibold">
  //   <span>$</span>
  //   <span>45,000</span>
  // </h4>
  // <p className="">+20% from last month</p>
  //     </div>
  //   );
  return (
    <Card className="flex-1">
      <CardHeader className="pb-[6.5px]">
        <CardTitle className=" flex justify-between">
          <span className="text-sm font-medium">Total Revenue</span>
          <span>
            <Image src="/dollar.svg" width={24} height={24} alt="#" />
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-ful">
          <h4 className="text-[24px] font-semibold">
            <span>$</span>
            <span>45,000</span>
          </h4>
          <p className="text-xs font-normal text-natural-200">
            +20% from last month
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

export default DataCard;
