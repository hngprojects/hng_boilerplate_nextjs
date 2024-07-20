import React from "react";

import Accordion from "../components/Accordion";

const items = [
  {
    header: "What payment methods do you accept?",
    content: "Answer to question 1.",
  },
  {
    header: "Is there a discount for annual subscriptions?",
    content: "Answer to question 2.",
  },
  {
    header: "Do you offer a free trial?",
    content:
      "Yes, we offer a 14-day free trial for new users. You can explore all the features of our premium plan without any cost during this period.",
  },
];

const Home: React.FC = () => {
  return (
    <div className="p-6">
      <Accordion items={items} />
    </div>
  );
};

export default Home;
