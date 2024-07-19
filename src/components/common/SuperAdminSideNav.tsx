import { AlignJustify, Box, Building, Mail, Package2, Settings, Users } from "lucide-react";
import { House } from 'lucide-react';
import Link from "next/link";

const SuperAdminSideNav: React.FC = () => {
  return (
    <>
      <div className="w-[298px] bg-gray-50 h-screen">
        <div className="flex gap-2 p-6 border-b">
          <Package2 />

          <h1>Shadcn</h1>
        </div>
        <div className="p-4 flex flex-col gap-2 border-r">
          <Link href={"/"} className="flex gap-2 text-gray-500 px-3 py-4 hover:bg-orange-500 hover:text-white hover:rounded">
            <House />
            
            Dashboard 
          </Link>

          <Link href={"/"} className="flex gap-2 text-gray-500 px-3 py-4 hover:bg-orange-500 hover:text-white hover:rounded">
          <Box />
            
            Products
          </Link>

          <Link href={"/"} className="flex gap-2 text-gray-500 px-3 py-4 hover:bg-orange-500 hover:text-white hover:rounded">
          <Users />
            
            Users
          </Link>
          <Link href={"/"} className="flex gap-2 text-gray-500 px-3 py-4 hover:bg-orange-500 hover:text-white hover:rounded">
          <Mail />
            
            Email Templates
          </Link>
          <Link href={"/"} className="flex gap-2 text-gray-500 px-3 py-4 hover:bg-orange-500 hover:text-white hover:rounded">
          <AlignJustify />
            
            Squeezed Pages
          </Link>
          <Link href={"/"} className="flex gap-2 text-gray-500 px-3 py-4 hover:bg-orange-500 hover:text-white hover:rounded">
          <Building />
            
            Waitlist 
          </Link>
          <Link href={"/"} className="flex gap-2 text-gray-500 px-3 py-4 hover:bg-orange-500 hover:text-white hover:rounded">
          <Settings />
            
            Settings 
          </Link>
        </div>
      </div>
    </>
  );
};

export default SuperAdminSideNav;
