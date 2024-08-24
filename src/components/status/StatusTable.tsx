import React from "react";

export interface ApiStatus {
  api_group: string;
  status: "Operational" | "Degraded" | "Down";
  last_checked: string;
  response_time: string;
  details: string;
}

interface StatusGridProperties {
  data: ApiStatus[];
}

const StatusGrid: React.FC<StatusGridProperties> = ({ data }) => {
  if (!Array.isArray(data)) {
    return <div>Error: Data is not in the expected format.</div>;
  }

  return (
    <div className="mt-1 flex items-center justify-center">
      <div className="w-full max-w-4xl overflow-hidden rounded-lg border">
        <div className="grid grid-cols-2 gap-4 border-b p-4 text-sm font-medium md:grid-cols-5">
          <div className="p-2 font-semibold">API Group</div>
          <div className="hidden p-2 font-semibold md:block">Response time</div>
          <div className="hidden p-2 font-semibold md:block">Last checked</div>
          <div className="hidden p-2 font-semibold md:block">Details</div>
          <div className="p-2 text-right font-semibold">Status</div>
        </div>

        {data.map((item, index) => (
          <div key={index}>
            <div className="grid grid-cols-2 gap-4 border-b p-4 text-sm md:grid-cols-5">
              <div className="p-2">{item.api_group} api</div>
              <div className="hidden p-2 text-center md:block">
                {item.response_time && `${item.response_time}ms`}
                {!item.response_time && "-"}
              </div>
              <div className="hidden p-2 md:block">{item.last_checked} UTC</div>
              <div className="hidden p-2 md:block">{item.details}</div>
              <div
                className={`p-2 text-right ${
                  item.status === "Operational"
                    ? "text-green-600"
                    : item.status === "Degraded"
                      ? "text-yellow-600"
                      : "text-red-600"
                }`}
              >
                {item.status && `${item.status}`}
                {!item.status && `Down`}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatusGrid;
