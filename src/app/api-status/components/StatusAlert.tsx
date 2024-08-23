import { Alert, AlertTitle } from "~/components/ui/alert";

interface ComponentProperties {
  status: "down" | "degraded" | "operational";
  message?: string;
}

const statusStyles = {
  down: {
    border: "border-red-400",
    bg: "bg-red-100",
    text: "text-red-500",
  },
  degraded: {
    border: "border-yellow-400",
    bg: "bg-yellow-100",
    text: "text-yellow-500",
  },
  operational: {
    border: "border-green-400",
    bg: "bg-green-100",
    text: "text-green-500",
  },
};

const StatusAlert = ({ status, message }: ComponentProperties) => {
  const { border, bg, text } = statusStyles[status];

  return (
    <Alert className={`${border} ${bg} p-3 ${text}`}>
      <AlertTitle className="text-base font-normal">{message}</AlertTitle>
    </Alert>
  );
};

export default StatusAlert;
