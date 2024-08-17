import { Check } from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

const projectManagement = [
  {
    invoice: "Projects",
    paymentStatus: "Up to 5",
  },
  {
    invoice: "File Upload",
    paymentStatus: "20gb",
  },
  {
    invoice: "User Account",
    paymentStatus: "10",
  },
  {
    invoice: "Teams",
    paymentStatus: "Unlimited",
  },
];

const collaborations = [
  {
    invoice: "Integration",
    paymentStatus: <Check />,
  },
  {
    invoice: "Guest Access",
    paymentStatus: <Check />,
  },
  {
    invoice: "Page Analysis",
    paymentStatus: <Check />,
  },
  {
    invoice: "Task Managment",
    paymentStatus: <Check />,
  },
];

const managements = [
  {
    invoice: "Team Security",
    paymentStatus: <Check />,
  },
  {
    invoice: "Data Backup",
    paymentStatus: <Check />,
  },
  {
    invoice: "HIPAA Compliance",
    paymentStatus: <Check />,
  },
];

const supports = [
  {
    invoice: "Priority Support",
    paymentStatus: <Check />,
  },
  {
    invoice: "Customer Support",
    paymentStatus: <Check />,
  },
];

const recentTransactions = [
  {
    invoice: "Date",
    paymentStatus: "Status",
    totalAmount: "Invoice",
  },
  {
    invoice: "7-7-24",
    paymentStatus: "Paid",
    totalAmount: "Download",
  },
];

const BasicPlan = () => {
  return (
    <div>
      <p className="text-[24px] font-semibold text-neutral-dark-2">
        Current Plan
      </p>
      <div className="flex flex-col gap-y-[24px] py-[12px] md:py-[24px]">
        <div className="rounded-[12px] bg-[#FFF8F2]">
          <div className="flex flex-col gap-y-[8px] px-[17px] py-[24px]">
            <p className="font-semibold">Basic</p>
            <p className="text-[14px]">
              You are currently enjoying the benefits of our Basic plan. Your
              subscription will auto-renew on the 30th of July 2024
            </p>
            <p className="text-neutral-dark-1">$20/month</p>
          </div>
          <p className="px-[17px] pb-[3px] text-[14px] text-primary">
            Upgrade to access more features
          </p>
        </div>
        <div className="flex gap-x-[60px] rounded-[12px] bg-[#FFF8F2] px-[17px] py-[10px]">
          <p className="text-[16px] font-semibold">Current Plan Benefit</p>
          <ul className="flex flex-col gap-y-[16px] text-[14px] text-neutral-dark-2">
            <li>100 Projects</li>
            <li>Up to 50 subscribers</li>
            <li>Advanced analytics</li>
            <li>24-hour support</li>
          </ul>
        </div>
      </div>

      <Table className="border">
        <TableHeader className="w-full bg-[#FFF8F2]">
          <TableRow>
            <TableHead className="w-[300px] text-[16px] font-bold">
              Project Management
            </TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projectManagement.map((project) => (
            <TableRow key={project.invoice}>
              <TableCell className="font-medium">{project.invoice}</TableCell>
              <TableCell>{project.paymentStatus}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Table className="border">
        <TableHeader className="w-full bg-[#FFF8F2]">
          <TableRow>
            <TableHead className="w-[300px] text-[16px] font-bold">
              Sharing and Collaboration
            </TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {collaborations.map((collaboration) => (
            <TableRow key={collaboration.invoice}>
              <TableCell className="font-medium">
                {collaboration.invoice}
              </TableCell>
              <TableCell>{collaboration.paymentStatus}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Table className="border">
        <TableHeader className="w-full bg-[#FFF8F2]">
          <TableRow>
            <TableHead className="w-[300px] text-[16px] font-bold">
              Management and security
            </TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {managements.map((management) => (
            <TableRow key={management.invoice}>
              <TableCell className="font-medium">
                {management.invoice}
              </TableCell>
              <TableCell>{management.paymentStatus}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Table className="border">
        <TableHeader className="w-full bg-[#FFF8F2]">
          <TableRow>
            <TableHead className="w-[300px] text-[16px] font-bold">
              Support
            </TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {supports.map((support) => (
            <TableRow key={support.invoice}>
              <TableCell className="font-medium">{support.invoice}</TableCell>
              <TableCell>{support.paymentStatus}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Table className="border">
        <TableHeader className="w-full bg-[#FFF8F2]">
          <TableRow>
            <TableHead className="w-[300px] text-[16px] font-bold">
              Recent Transactions
            </TableHead>
            <TableHead></TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {recentTransactions.map((recentTransaction) => (
            <TableRow key={recentTransaction.invoice}>
              <TableCell className="font-medium">
                {recentTransaction.invoice}
              </TableCell>
              <TableCell>{recentTransaction.paymentStatus}</TableCell>
              <TableCell
                className={`${recentTransaction.totalAmount === "Download" ? "text-primary" : ""}`}
              >
                {recentTransaction.totalAmount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="mt-[24px] flex items-center justify-center gap-x-[30px] md:gap-x-[52px]">
        <button className="rounded-[6px] bg-primary px-[16px] py-[8px] text-[14px] text-[#FFFFFF]">
          Upgrade Subscription
        </button>
        <button className="bg-[#FFF]border-slate-200 rounded-[6px] border-slate-200 text-[14px] text-[#0F172A]">
          Cancel Subscription
        </button>
      </div>
    </div>
  );
};

export default BasicPlan;
