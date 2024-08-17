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
    totalAmount: "Up to 5",
    paymentMethod: "Up to 5",
    time: "Unlimited",
  },
  {
    invoice: "File Upload",
    paymentStatus: "10gb",
    totalAmount: "20gb",
    paymentMethod: "50gb",
    time: "Unlimited",
  },
  {
    invoice: "User Account",
    paymentStatus: "1",
    totalAmount: "10",
    paymentMethod: "50",
    time: "Unlimited",
  },
  {
    invoice: "Teams",
    paymentStatus: "1",
    totalAmount: "Unlimited",
    paymentMethod: "Unlimited",
    time: "Unlimited",
  },
];

const collaborations = [
  {
    invoice: "Integration",
    paymentStatus: <Check />,
    paymentMethod: <Check />,
    timeManagment: <Check />,
    time: <Check />,
  },
  {
    invoice: "Guest Access",
    paymentStatus: <Check />,
    paymentMethod: <Check />,
    timeManagment: <Check />,
    time: <Check />,
  },
  {
    invoice: "Page Analysis",
    paymentStatus: <Check />,
    paymentMethod: <Check />,
    timeManagment: <Check />,
    time: <Check />,
  },
  {
    invoice: "Task Managment",
    paymentStatus: <Check />,
    paymentMethod: <Check />,
    timeManagment: <Check />,
    time: <Check />,
  },
];

const managements = [
  {
    invoice: "Team Security",
    paymentStatus: "  ",
    totalAmount: <Check />,
    paymentMethod: <Check />,
    time: <Check />,
  },
  {
    invoice: "Data Backup",
    paymentStatus: "",
    totalAmount: <Check />,
    paymentMethod: <Check />,
    time: <Check />,
  },
  {
    invoice: "HIPAA Compliance",
    paymentStatus: "",
    totalAmount: <Check />,
    paymentMethod: <Check />,
    time: <Check />,
  },
];

const supports = [
  {
    invoice: "Priority Support",
    paymentStatus: <Check />,
    totalAmount: <Check />,
    paymentMethod: <Check />,
    time: <Check />,
  },
  {
    invoice: "Customer Support",
    paymentStatus: "",
    totalAmount: <Check />,
    paymentMethod: <Check />,
    time: <Check />,
  },
];

function FreePlan() {
  return (
    <>
      <Table className="border">
        <TableHeader className="w-full bg-[#FFF8F2]">
          <TableRow>
            <TableHead className="w-[300px] text-[16px] font-bold">
              Project Management
            </TableHead>
            <TableHead></TableHead>
            <TableHead></TableHead>
            <TableHead></TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projectManagement.map((project) => (
            <TableRow key={project.invoice}>
              <TableCell className="font-medium">{project.invoice}</TableCell>
              <TableCell>{project.paymentStatus}</TableCell>
              <TableCell>{project.paymentMethod}</TableCell>
              <TableCell>{project.totalAmount}</TableCell>
              <TableCell>{project.time}</TableCell>
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
            <TableHead></TableHead>
            <TableHead></TableHead>
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
              <TableCell>{collaboration.paymentMethod}</TableCell>
              <TableCell>{collaboration.timeManagment}</TableCell>
              <TableCell>{collaboration.time}</TableCell>
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
            <TableHead></TableHead>
            <TableHead></TableHead>
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
              <TableCell>{management.totalAmount}</TableCell>
              <TableCell>{management.paymentMethod}</TableCell>
              <TableCell>{management.time}</TableCell>
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
            <TableHead></TableHead>
            <TableHead></TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {supports.map((support) => (
            <TableRow key={support.invoice}>
              <TableCell className="font-medium">{support.invoice}</TableCell>
              <TableCell>{support.paymentStatus}</TableCell>
              <TableCell>{support.totalAmount}</TableCell>
              <TableCell>{support.paymentMethod}</TableCell>
              <TableCell>{support.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="mt-[20px] flex flex-col md:gap-[24px]">
        <p className="text-[24px] font-bold">Current Plan</p>
        <div className="flex flex-col gap-[8px] rounded-[12px] bg-[#FFF8F2] md:py-[24px] md:pl-[17px] md:pr-[94px]">
          <p className="text-[20px] font-semibold">Free</p>
          <p className="text-[13px]">
            Your account is on a free 90-day trial of our free plan, through
            September 27th, Upgrade anytime to stay on this plan when your trial
            ends.
          </p>
          <p className="text-neutral-dark-1">$0/month</p>
        </div>
      </div>
    </>
  );
}

export default FreePlan;
