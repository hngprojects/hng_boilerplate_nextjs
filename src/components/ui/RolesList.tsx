"use client"

import React from "react";
import Link from "next/link";


interface Role {
    id: number;
    name: string;
  }
  
  const roles: Role[] = [
    { id: 1, name: 'Guest' },
    { id: 2, name: 'User' },
    { id: 3, name: 'Manager' },
    { id: 4, name: 'Project Lead' },
    { id: 5, name: 'Administrator' },
    
    // Add more roles here
  ];

  const RolesList  = () => {
//   return (
//     <div className="flex flex-col w-64 items-start gap-10 relative">
//       <div className="relative self-stretch mt-[-1.00px] font-h5-medium font-[number:var(--h5-medium-font-weight)] text-neutral-colorsdark-2 text-[length:var(--h5-medium-font-size)] tracking-[var(--h5-medium-letter-spacing)] leading-[var(--h5-medium-line-height)] [font-style:var(--h5-medium-font-style)]">
//         Roles
//       </div>
//       <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
//         <div className="flex h-[50px] items-center justify-around gap-[203px] p-1.5 relative self-stretch w-full bg-white rounded-md">
//           <div className="inline-flex items-center gap-4 relative flex-[0_0_auto] mt-[-2.50px] mb-[-2.50px]">
//             <div className="flex-col items-start gap-1 inline-flex relative flex-[0_0_auto]">
//               <div className="relative self-stretch mt-[-1.00px] font-body-medium-normal font-[number:var(--body-medium-normal-font-weight)] text-neutral-colorsdark-2 text-[length:var(--body-medium-normal-font-size)] tracking-[var(--body-medium-normal-letter-spacing)] leading-[var(--body-medium-normal-line-height)] [font-style:var(--body-medium-normal-font-style)]">
//                 Guest
//               </div>
//               <div className="relative w-fit font-body-regular-xsmall font-[number:var(--body-regular-xsmall-font-weight)] text-neutral-colorsdark-1 text-[length:var(--body-regular-xsmall-font-size)] tracking-[var(--body-regular-xsmall-letter-spacing)] leading-[var(--body-regular-xsmall-line-height)] [font-style:var(--body-regular-xsmall-font-style)]">
//                 Read-only access
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="flex items-center justify-around gap-[203px] p-1.5 relative self-stretch w-full flex-[0_0_auto] rounded-md">
//           <div className="items-center gap-4 inline-flex relative flex-[0_0_auto]">
//             <div className="flex-col items-start gap-1 inline-flex relative flex-[0_0_auto]">
//               <div className="relative self-stretch mt-[-1.00px] font-body-medium-normal font-[number:var(--body-medium-normal-font-weight)] text-neutral-colorsdark-2 text-[length:var(--body-medium-normal-font-size)] tracking-[var(--body-medium-normal-letter-spacing)] leading-[var(--body-medium-normal-line-height)] [font-style:var(--body-medium-normal-font-style)]">
//                 User
//               </div>
//               <div className="relative w-fit font-body-regular-xsmall font-[number:var(--body-regular-xsmall-font-weight)] text-neutral-colorsdark-1 text-[length:var(--body-regular-xsmall-font-size)] tracking-[var(--body-regular-xsmall-letter-spacing)] leading-[var(--body-regular-xsmall-line-height)] [font-style:var(--body-regular-xsmall-font-style)]">
//                 Read, write, update
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="flex items-center justify-around gap-[203px] p-1.5 relative self-stretch w-full flex-[0_0_auto] rounded-md">
//           <div className="items-center gap-4 inline-flex relative flex-[0_0_auto]">
//             <div className="flex-col items-start gap-1 inline-flex relative flex-[0_0_auto]">
//               <div className="relative self-stretch mt-[-1.00px] font-body-medium-normal font-[number:var(--body-medium-normal-font-weight)] text-neutral-colorsdark-2 text-[length:var(--body-medium-normal-font-size)] tracking-[var(--body-medium-normal-letter-spacing)] leading-[var(--body-medium-normal-line-height)] [font-style:var(--body-medium-normal-font-style)]">
//                 Manager
//               </div>
//               <div className="relative w-fit font-body-regular-xsmall font-[number:var(--body-regular-xsmall-font-weight)] text-neutral-colorsdark-1 text-[length:var(--body-regular-xsmall-font-size)] tracking-[var(--body-regular-xsmall-letter-spacing)] leading-[var(--body-regular-xsmall-line-height)] [font-style:var(--body-regular-xsmall-font-style)]">
//                 Read, write, approve
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="flex items-center justify-around gap-[203px] p-1.5 relative self-stretch w-full flex-[0_0_auto] rounded-md">
//           <div className="items-center gap-4 inline-flex relative flex-[0_0_auto]">
//             <div className="flex-col items-start gap-1 inline-flex relative flex-[0_0_auto]">
//               <div className="relative self-stretch mt-[-1.00px] font-body-medium-normal font-[number:var(--body-medium-normal-font-weight)] text-neutral-colorsdark-2 text-[length:var(--body-medium-normal-font-size)] tracking-[var(--body-medium-normal-letter-spacing)] leading-[var(--body-medium-normal-line-height)] [font-style:var(--body-medium-normal-font-style)]">
//                 Project Lead
//               </div>
//               <div className="relative w-fit font-body-regular-xsmall font-[number:var(--body-regular-xsmall-font-weight)] text-neutral-colorsdark-1 text-[length:var(--body-regular-xsmall-font-size)] tracking-[var(--body-regular-xsmall-letter-spacing)] leading-[var(--body-regular-xsmall-line-height)] [font-style:var(--body-regular-xsmall-font-style)]">
//                 Manage, coordinate, oversee
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="flex items-center justify-around gap-[203px] p-1.5 relative self-stretch w-full flex-[0_0_auto] rounded-md">
//           <div className="items-center gap-4 inline-flex relative flex-[0_0_auto]">
//             <div className="flex-col items-start gap-1 inline-flex relative flex-[0_0_auto]">
//               <div className="relative self-stretch mt-[-1.00px] font-body-medium-normal font-[number:var(--body-medium-normal-font-weight)] text-neutral-colorsdark-2 text-[length:var(--body-medium-normal-font-size)] tracking-[var(--body-medium-normal-letter-spacing)] leading-[var(--body-medium-normal-line-height)] [font-style:var(--body-medium-normal-font-style)]">
//                 Administrator
//               </div>
//               <div className="relative w-fit font-body-regular-xsmall font-[number:var(--body-regular-xsmall-font-weight)] text-neutral-colorsdark-1 text-[length:var(--body-regular-xsmall-font-size)] tracking-[var(--body-regular-xsmall-letter-spacing)] leading-[var(--body-regular-xsmall-line-height)] [font-style:var(--body-regular-xsmall-font-style)]">
//                 Full access, control
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );


  
   
    return (
      <div className="p-4 bg-gray-100 rounded-lg shadow-md">
        <h1 className="text-xl font-semibold mb-4">Roles List</h1>
        <div className="space-y-2">
          {roles.map(role => (
            
            <div 
              key={role.id}  
              className="p-2 bg-white rounded-lg cursor-pointer hover:bg-gray-200"
             
            >
                <Link href= "~components/ui/Permissions.tsx">
              {role.name}
              </Link>
            </div>
            
          ))}
        </div>
      </div>
    );
//   };
};

export default RolesList;