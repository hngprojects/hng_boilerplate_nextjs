import { Check } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
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
    task: "Projects",
    specification: "Up to 5",
  },
  {
    task: "File Upload",
    specification: "20gb",
  },
  {
    task: "User Account",
    specification: "10",
  },
  {
    task: "Teams",
    specification: "Unlimited",
  },
];

const collaborations = [
  {
    task: "Integration",
    confirmation: <Check />,
  },
  {
    task: "Guest Access",
    confirmation: <Check />,
  },
  {
    task: "Page Analysis",
    confirmation: <Check />,
  },
  {
    task: "Task Managment",
    confirmation: <Check />,
  },
];

const managements = [
  {
    task: "Team Security",
    confirmation: <Check />,
  },
  {
    task: "Data Backup",
    confirmation: <Check />,
  },
  {
    task: "HIPAA Compliance",
    confirmation: <Check />,
  },
];

const supports = [
  {
    task: "Priority Support",
    confirmation: <Check />,
  },
  {
    task: "Customer Support",
    confirmation: <Check />,
  },
];

const recentTransactions = [
  {
    date: "Date",
    paymentStatus: "Status",
    totalAmount: "Invoice",
  },
  {
    date: "7-7-24",
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
            <TableRow key={project.task}>
              <TableCell className="font-medium">{project.task}</TableCell>
              <TableCell>{project.specification}</TableCell>
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
            <TableRow key={collaboration.task}>
              <TableCell className="font-medium">
                {collaboration.task}
              </TableCell>
              <TableCell>{collaboration.confirmation}</TableCell>
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
            <TableRow key={management.task}>
              <TableCell className="font-medium">{management.task}</TableCell>
              <TableCell>{management.confirmation}</TableCell>
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
            <TableRow key={support.task}>
              <TableCell className="font-medium">{support.task}</TableCell>
              <TableCell>{support.confirmation}</TableCell>
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
            <TableRow key={recentTransaction.date}>
              <TableCell className="font-medium">
                {recentTransaction.date}
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

        <Dialog>
          <DialogTrigger asChild>
            <button className="bg-[#FFF]border-slate-200 rounded-[6px] border-slate-200 text-[14px] text-[#0F172A]">
              Cancel Subscription
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-sm:rounded-[6px] w-[80%] sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you are done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4"></div>
              <div className="grid grid-cols-4 items-center gap-4"></div>
            </div>
            <DialogFooter>
              <div className="flex flex-col items-center justify-end space-x-4 md:flex-row">
                <button className="rounded-[6px] bg-primary px-[16px] py-[8px] text-[#FFFFFF]">
                  Keep subscription
                </button>
                <button className="rounded-[6px] bg-primary px-[16px] py-[8px] text-[#FFFFFF]">
                  Cancel Subscription
                </button>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default BasicPlan;
