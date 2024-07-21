

//  const Permissions = () => {
//   return (
//     <div className="flex flex-col w-[757px] h-[595px] items-end gap-6 pl-6 pr-0 py-0 relative border-l [border-left-style:solid] border-stroke-colorsstroke">
//       <div className="flex flex-col items-start gap-2 pt-0 pb-4 px-0 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-stroke-colorsstroke">
//         <div className="relative self-stretch mt-[-1.00px] font-h5-semibold font-[number:var(--h5-semibold-font-weight)] text-neutral-colorsdark-2 text-[length:var(--h5-semibold-font-size)] tracking-[var(--h5-semibold-letter-spacing)] leading-[var(--h5-semibold-line-height)] [font-style:var(--h5-semibold-font-style)]">
//           Permissions
//         </div>
//         <p className="relative self-stretch font-body-regular-xsmall font-[number:var(--body-regular-xsmall-font-weight)] text-neutral-colorsdark-1 text-[length:var(--body-regular-xsmall-font-size)] tracking-[var(--body-regular-xsmall-letter-spacing)] leading-[var(--body-regular-xsmall-line-height)] [font-style:var(--body-regular-xsmall-font-style)]">
//           See the list of permissions for this role
//         </p>
//       </div>
//       <div className="flex flex-col items-end gap-16 relative self-stretch w-full flex-[0_0_auto]">
//         <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
//           <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
//             <div className="relative self-stretch mt-[-1.00px] font-h6-medium font-[number:var(--h6-medium-font-weight)] text-neutral-colorsdark-2 text-[length:var(--h6-medium-font-size)] tracking-[var(--h6-medium-letter-spacing)] leading-[var(--h6-medium-line-height)] [font-style:var(--h6-medium-font-style)]">
//               Transactions permissions
//             </div>
//             <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
//               <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
//                 <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
//                   <div className="relative w-fit mt-[-1.00px] font-body-regular-small font-[number:var(--body-regular-small-font-weight)] text-neutral-colorsdark-1 text-[length:var(--body-regular-small-font-size)] tracking-[var(--body-regular-small-letter-spacing)] leading-[var(--body-regular-small-line-height)] [font-style:var(--body-regular-small-font-style)]">
//                     Can view transactions
//                   </div>
//                 </div>
//                 <div className="justify-end inline-flex items-center gap-2 relative flex-[0_0_auto]">
//                   <div className="relative w-11 h-6 bg-primaryprimary-color rounded-[50px]">
//                     <div className="relative w-5 h-5 top-0.5 left-[22px] bg-[#fffffffa] rounded-[10px]" />
//                   </div>
//                 </div>
//               </div>
//               <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
//                 <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
//                   <div className="relative w-fit mt-[-1.00px] font-body-regular-small font-[number:var(--body-regular-small-font-weight)] text-neutral-colorsdark-1 text-[length:var(--body-regular-small-font-size)] tracking-[var(--body-regular-small-letter-spacing)] leading-[var(--body-regular-small-line-height)] [font-style:var(--body-regular-small-font-style)]">
//                     Can view refunds
//                   </div>
//                 </div>
//                 <div className="justify-end inline-flex items-center gap-2 relative flex-[0_0_auto]">
//                   <div className="relative w-11 h-6 bg-primaryprimary-color rounded-[50px]">
//                     <div className="relative w-5 h-5 top-0.5 left-[22px] bg-[#fffffffa] rounded-[10px]" />
//                   </div>
//                 </div>
//               </div>
//               <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
//                 <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
//                   <div className="relative w-fit mt-[-1.00px] font-body-regular-small font-[number:var(--body-regular-small-font-weight)] text-neutral-colorsdark-1 text-[length:var(--body-regular-small-font-size)] tracking-[var(--body-regular-small-letter-spacing)] leading-[var(--body-regular-small-line-height)] [font-style:var(--body-regular-small-font-style)]">
//                     Can log refunds
//                   </div>
//                 </div>
//                 <div className="justify-end inline-flex items-center gap-2 relative flex-[0_0_auto]">
//                   <div className="relative w-11 h-6 bg-primaryprimary-color rounded-[50px]">
//                     <div className="relative w-5 h-5 top-0.5 left-[22px] bg-[#fffffffa] rounded-[10px]" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
//             <div className="relative w-[152px] h-[22px]">
//               <div className="absolute -top-px left-0 font-h6-medium font-[number:var(--h6-medium-font-weight)] text-neutral-colorsdark-2 text-[length:var(--h6-medium-font-size)] tracking-[var(--h6-medium-letter-spacing)] leading-[var(--h6-medium-line-height)] [font-style:var(--h6-medium-font-style)]">
//                 User permissions
//               </div>
//             </div>
//             <div className="flex-col items-start gap-6 flex relative self-stretch w-full flex-[0_0_auto]">
//               <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
//                 <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
//                   <div className="relative w-fit mt-[-1.00px] font-body-regular-small font-[number:var(--body-regular-small-font-weight)] text-neutral-colorsdark-1 text-[length:var(--body-regular-small-font-size)] tracking-[var(--body-regular-small-letter-spacing)] leading-[var(--body-regular-small-line-height)] [font-style:var(--body-regular-small-font-style)]">
//                     Can view users
//                   </div>
//                 </div>
//                 <div className="justify-end inline-flex items-center gap-2 relative flex-[0_0_auto]">
//                   <div className="relative w-11 h-6 bg-primaryprimary-color rounded-[50px]">
//                     <div className="relative w-5 h-5 top-0.5 left-[22px] bg-[#fffffffa] rounded-[10px]" />
//                   </div>
//                 </div>
//               </div>
//               <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
//                 <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
//                   <div className="relative w-fit mt-[-1.00px] font-body-regular-small font-[number:var(--body-regular-small-font-weight)] text-neutral-colorsdark-1 text-[length:var(--body-regular-small-font-size)] tracking-[var(--body-regular-small-letter-spacing)] leading-[var(--body-regular-small-line-height)] [font-style:var(--body-regular-small-font-style)]">
//                     Can create users
//                   </div>
//                 </div>
//                 <div className="justify-end inline-flex items-center gap-2 relative flex-[0_0_auto]">
//                   <div className="relative w-11 h-6 bg-primaryprimary-color rounded-[50px]">
//                     <div className="relative w-5 h-5 top-0.5 left-[22px] bg-[#fffffffa] rounded-[10px]" />
//                   </div>
//                 </div>
//               </div>
//               <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
//                 <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
//                   <div className="relative w-fit mt-[-1.00px] font-body-regular-small font-[number:var(--body-regular-small-font-weight)] text-neutral-colorsdark-1 text-[length:var(--body-regular-small-font-size)] tracking-[var(--body-regular-small-letter-spacing)] leading-[var(--body-regular-small-line-height)] [font-style:var(--body-regular-small-font-style)]">
//                     Can edit users
//                   </div>
//                 </div>
//                 <div className="justify-end inline-flex items-center gap-2 relative flex-[0_0_auto]">
//                   <div className="relative w-11 h-6 bg-primaryprimary-color rounded-[50px]">
//                     <div className="relative w-5 h-5 top-0.5 left-[22px] bg-[#fffffffa] rounded-[10px]" />
//                   </div>
//                 </div>
//               </div>
//               <div className="items-center justify-between flex relative self-stretch w-full flex-[0_0_auto]">
//                 <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
//                   <div className="relative w-fit mt-[-1.00px] font-body-regular-small font-[number:var(--body-regular-small-font-weight)] text-neutral-colorsdark-1 text-[length:var(--body-regular-small-font-size)] tracking-[var(--body-regular-small-letter-spacing)] leading-[var(--body-regular-small-line-height)] [font-style:var(--body-regular-small-font-style)]">
//                     Can blacklist/whitelist users
//                   </div>
//                 </div>
//                 <div className="justify-end inline-flex items-center gap-2 relative flex-[0_0_auto]">
//                   <div className="relative w-11 h-6 bg-primaryprimary-color rounded-[50px]">
//                     <div className="relative w-5 h-5 top-0.5 left-[22px] bg-[#fffffffa] rounded-[10px]" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-col w-[150px] items-start gap-2.5 relative flex-[0_0_auto]">
//           <Buttons
//             buttonText="Save Preferences"
//             className="!self-stretch !flex-[0_0_auto] !flex !w-full"
//             state="hover"
//             type="outline"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Permissions;