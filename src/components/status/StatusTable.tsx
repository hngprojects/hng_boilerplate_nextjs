interface ApiStatus {
  apiGroup: string;
  status: "Operational" | "Degraded" | "Down";
  lastChecked: string;
  responseTime: string;
  details: string;
}

const data: ApiStatus[] = [
  {
    apiGroup: "Authentication",
    status: "Operational",
    lastChecked: "2024-08-20 10:00 AM UTC",
    responseTime: "320ms",
    details: "All tests passed",
  },
  {
    apiGroup: "Payment",
    status: "Degraded",
    lastChecked: "2024-08-20 10:00 AM UTC",
    responseTime: "450ms",
    details: "High response time detected",
  },
  {
    apiGroup: "Blog",
    status: "Down",
    lastChecked: "2024-08-20 10:00 AM UTC",
    responseTime: "-",
    details: "API not responding (HTTP 503)",
  },
  {
    apiGroup: "Inventory",
    status: "Operational",
    lastChecked: "2024-08-20 10:00 AM UTC",
    responseTime: "280ms",
    details: "All tests passed",
  },
  {
    apiGroup: "Notification",
    status: "Operational",
    lastChecked: "2024-08-20 10:00 AM UTC",
    responseTime: "340ms",
    details: "All tests passed",
  },
];

const StatusGrid = () => {
  return (
    <div className="mt-1 flex items-center justify-center">
      <div className="w-full max-w-4xl rounded-lg border">
        <div className="grid grid-cols-2 gap-4 border-b p-4 text-sm font-medium">
          <div className="p-2 font-semibold">API Group</div>
          <div className="p-2 text-right font-semibold">Status</div>
        </div>

        {data.map((item, index) => (
          <div key={index}>
            <div className="grid grid-cols-2 gap-4 border-b p-4">
              <div className="p-2">{item.apiGroup}</div>
              <div
                className={`p-2 text-right ${
                  item.status === "Operational"
                    ? "text-green-600"
                    : item.status === "Degraded"
                      ? "text-yellow-600"
                      : "text-error"
                }`}
              >
                {item.status}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatusGrid;
