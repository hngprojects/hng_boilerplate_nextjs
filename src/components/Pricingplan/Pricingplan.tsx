import "./pricingplan.css";

import { Button } from "../ui/button";

{
  /* 
      in this component there are four types based on their properties values any other values different from these are not valid
      1. monthly and basic plan <Pricingplan period="monthly" plan="Basic"/>
      2. monthly and premium plan <Pricingplan period="monthly" plan="Premium"/>
      3. annually and Basic plan <Pricingplan period="annually" plan="Basic"/>
      4. annually and Premium Plan <Pricingplan period="annually" plan="Premium"/>
      
  */
}

interface property {
  plan: string;
  period: string;
}

interface MyObject {
  packageTitle: string;
  available: boolean;
}

function groupNumber(number: number): string {
  const numberString = number.toString();
  const regex = /(\d)(?=(\d{3})+$)/g;
  return numberString.replaceAll(regex, "$1,");
}

function Pricingplan(properties: property) {
  // packages is set to local scope because it uses properties in the elements of the Array
  const packages: MyObject[] = [
    {
      packageTitle: "2 projects",
      available: true,
    },
    {
      packageTitle: "Up to 100 subscribers",
      available: true,
    },
    {
      packageTitle: "Basic analytics",
      available: true,
    },
    {
      packageTitle: "24-hour support response time",
      available: true,
    },
    {
      packageTitle: "Marketing advisor",
      available: properties.plan == "Premium",
    },
    {
      packageTitle: "Cutom Integration",
      available: properties.plan == "Premium",
    },
  ];

  const pricePlan =
    properties.period == "monthly" && properties.plan == "Basic"
      ? 800
      : properties.period == "monthly" && properties.plan == "Premium"
        ? 3000
      : properties.period == "annually" && properties.plan == "Basic" ? 500
              : properties.period == "annually" && properties.plan == "Premium" ? 2000
      : 0;

  const outputArray = packages.map((event) => {
    return (
      <li
        key={event.packageTitle}
        className={event.available ? "packages" : "packages greyed"}
      >
        {event.packageTitle}
      </li>
    );
  });

  return (
    <div
      className={
        properties.plan == "Basic" ? "priceTag basicPriceTag" : "priceTag"
      }
    >
      <div className="innerdiv">
        <h2>{properties.plan}</h2>
        <h1 className="price">
          ${groupNumber(pricePlan)} <span className="smalltext">/month</span>
        </h1>
        <p>The esentials to provide your best work for clients.</p>
      </div>
      <ul>{outputArray}</ul>
      <Button variant="default">Continue</Button>
    </div>
  );
}

export default Pricingplan;
