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
    id: "Projects",
    feature_1: "Up to 5",
    feature_2: "Up to 5",
    feature_3: "Up to 5",
    time: "Unlimited",
  },
  {
    id: "File Upload",
    feature_1: "10gb",
    feature_2: "20gb",
    feature_3: "50gb",
    time: "Unlimited",
  },
  {
    id: "User Account",
    feature_1: "1",
    feature_2: "10",
    feature_3: "50",
    time: "Unlimited",
  },
  {
    id: "Teams",
    feature_1: "1",
    feature_2: "Unlimited",
    feature_3: "Unlimited",
    time: "Unlimited",
  },
];

const collaborations = [
  {
    id: "Integration",
    paymentStatus: <Check />,
    paymentMethod: <Check />,
    timeManagment: <Check />,
    time: <Check />,
  },
  {
    id: "Guest Access",
    paymentStatus: <Check />,
    paymentMethod: <Check />,
    timeManagment: <Check />,
    time: <Check />,
  },
  {
    id: "Page Analysis",
    paymentStatus: <Check />,
    paymentMethod: <Check />,
    timeManagment: <Check />,
    time: <Check />,
  },
  {
    id: "Task Managment",
    paymentStatus: <Check />,
    paymentMethod: <Check />,
    timeManagment: <Check />,
    time: <Check />,
  },
];

const managements = [
  {
    id: "Team Security",
    paymentStatus: "  ",
    totalAmount: <Check />,
    paymentMethod: <Check />,
    time: <Check />,
  },
  {
    id: "Data Backup",
    paymentStatus: "",
    totalAmount: <Check />,
    paymentMethod: <Check />,
    time: <Check />,
  },
  {
    id: "HIPAA Compliance",
    paymentStatus: "",
    totalAmount: <Check />,
    paymentMethod: <Check />,
    time: <Check />,
  },
];

const supports = [
  {
    id: "Priority Support",
    paymentStatus: <Check />,
    totalAmount: <Check />,
    paymentMethod: <Check />,
    time: <Check />,
  },
  {
    id: "Customer Support",
    paymentStatus: "",
    totalAmount: <Check />,
    paymentMethod: <Check />,
    time: <Check />,
  },
];

function FreePlan() {
  return (
    <div className="px-5">
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
            <TableRow key={project.id} className="text-center">
              <TableCell className="text-start font-medium">
                {project.id}
              </TableCell>
              <TableCell>{project.feature_1}</TableCell>
              <TableCell>{project.feature_2}</TableCell>
              <TableCell>{project.feature_3}</TableCell>
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
            <TableRow key={collaboration.id} className="text-center">
              <TableCell className="text-start font-medium">
                {collaboration.id}
              </TableCell>
              <TableCell className="grid place-items-center">
                {collaboration.paymentStatus}
              </TableCell>
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
            <TableRow key={management.id} className="text-center">
              <TableCell className="text-start font-medium">
                {management.id}
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
            <TableRow key={support.id} className="text-center">
              <TableCell className="text-start font-medium">
                {support.id}
              </TableCell>
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
    </div>
  );
}

export default FreePlan;
