/* eslint-disable unicorn/filename-case */
interface DesiredPlanProperties {
  id: string;
  type: string;
  amount: number;
  desc: string;
  buttonText: string;
}

interface HighlightsProperties {
  id: number;
  elArr: string[];
}
interface HighlightMobileProperties {
  id: string;
  type: string;
  amount: number;
  desc: string;
  buttonText: string;
  elArr: string[];
}

const desiredPlans: DesiredPlanProperties[] = [
  {
    id: "a320e964-aa0e-4a83-bb7c-3ef151fae7d8",
    type: "free",
    amount: 0,
    desc: "The essential to provide your best work for clients.",
    buttonText: "current plan",
  },
  {
    id: "461bf947-cf4e-4320-8e8a-909d92be63e4",
    type: "basic",
    amount: 20,
    desc: " Ideal for growing needs who want more features.",
    buttonText: "upgrade",
  },
  {
    id: "444f1881-c9e7-4c0f-8c44-93666ff02691",
    type: "advanced",
    amount: 50,
    desc: "Designed for power users and maximum functionalities.",
    buttonText: "upgrade",
  },
  {
    id: "05a59c48-3980-428d-af5d-6be9a9626013",
    type: "premium",
    amount: 100,
    desc: "Perfect for users who want more features.",
    buttonText: "upgrade",
  },
];

export const highlights: HighlightsProperties[] = [
  {
    id: 1,
    elArr: ["10 Projects", "Up to 10 subscribers", "Advanced Anayltics"],
  },
  {
    id: 2,
    elArr: [
      "100 Projects",
      "Up to 50 subscribers",
      "Advanced Anayltics",
      "24-hour support  ",
    ],
  },
  {
    id: 4,
    elArr: [
      "200 Projects",
      "Up to 100 subscribers",
      "Advanced Anayltics",
      "24-hour support  ",
      "Marketing advisor",
    ],
  },
  {
    id: 5,
    elArr: [
      "300 Projects",
      "Up to 500 subscribers",
      "Advanced Anayltics",
      "24-hour support  ",
      "Marketing advisor",
    ],
  },
];

export const highLightMobile: HighlightMobileProperties[] = [
  {
    id: "a320e964-aa0e-4a83-bb7c-3ef151fae7d8",
    type: "free",
    amount: 0,
    desc: "The essential to provide your best work for clients.",
    buttonText: "current plan",
    elArr: ["10 Projects", "Up to 10 subscribers", "Advanced Anayltics"],
  },
  {
    id: "461bf947-cf4e-4320-8e8a-909d92be63e4",
    type: "basic",
    amount: 20,
    desc: " Ideal for growing needs who want more features.",
    buttonText: "upgrade",
    elArr: [
      "100 Projects",
      "Up to 50 subscribers",
      "Advanced Anayltics",
      "24-hour support  ",
    ],
  },
  {
    id: "444f1881-c9e7-4c0f-8c44-93666ff02691",
    type: "advanced",
    amount: 50,
    desc: "Designed for power users and maximum functionalities.",
    buttonText: "upgrade",
    elArr: [
      "200 Projects",
      "Up to 100 subscribers",
      "Advanced Anayltics",
      "24-hour support  ",
      "Marketing advisor",
    ],
  },
  {
    id: "05a59c48-3980-428d-af5d-6be9a9626013",
    type: "premium",
    amount: 100,
    desc: "Perfect for users who want more features.",
    buttonText: "upgrade",
    elArr: [
      "300 Projects",
      "Up to 500 subscribers",
      "Advanced Anayltics",
      "24-hour support  ",
      "Marketing advisor",
    ],
  },
];

export default desiredPlans;
