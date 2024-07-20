import Button from "~/components/common/Button/button";
import { Input } from "~/components/ui/input";

const page = () => {
  return (
    <div className="w-full bg-background">
      <div className="mx-auto w-full" style={{ maxWidth: "1349px" }}>
        <section className="flex w-full flex-col items-center justify-center gap-4 bg-primary/10 px-6 py-[24px] text-center md:px-0 md:py-24">
          <span className="text-xl font-medium text-neutral-600">
            Help Center
          </span>
          <div className="flex h-48 flex-col items-center justify-center gap-5 self-stretch">
            <h1 className="text-3xl font-bold text-neutral-950 md:text-6xl">
              How can we help You?
            </h1>
            <p className="text-center text-base font-normal text-neutral-600 md:text-lg">
              Find advice and answers from our support team
            </p>
            <div className="flex h-fit w-full items-center justify-start overflow-hidden rounded-xl border border-slate-300 bg-white px-2 py-[2px] text-xs font-normal leading-none text-neutral-600 focus-visible:ring-0 focus-visible:ring-offset-0 md:w-[466px] md:rounded-3xl">
              <span className="flex h-8 w-8 items-center justify-center p-1">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 20L16.2223 16.2156M18.3158 11.1579C18.3158 13.0563 17.5617 14.8769 16.2193 16.2193C14.8769 17.5617 13.0563 18.3158 11.1579 18.3158C9.2595 18.3158 7.43886 17.5617 6.0965 16.2193C4.75413 14.8769 4 13.0563 4 11.1579C4 9.2595 4.75413 7.43886 6.0965 6.0965C7.43886 4.75413 9.2595 4 11.1579 4C13.0563 4 14.8769 4.75413 16.2193 6.0965C17.5617 7.43886 18.3158 9.2595 18.3158 11.1579V11.1579Z"
                    stroke="#525252"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>

              <Input
                autoFocus
                placeholder=" Search on any topic..."
                className="w-full border-none bg-transparent px-1 py-2 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center justify-start gap-7 px-6 py-24 md:px-24">
          <span className="w-96 text-center text-3xl font-bold text-orange-500">
            Browse by topics
          </span>
          <div className="px grid w-full grid-cols-1 gap-x-[20px] gap-y-[12px] md:grid-cols-2 lg:grid-cols-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="flex w-full flex-col bg-white px-4 py-8"
              >
                <div className="border-b-0">{faq.question}</div>
                <div className="hidden">{faq.answer}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="flex w-full flex-col items-center justify-center gap-20 px-6 pb-24 pt-12 md:px-24">
          <div className="grid w-full grid-cols-1 justify-items-stretch gap-y-8 xl:grid-cols-2">
            <div className="flex flex-col gap-3">
              <h1 className="self-stretch text-4xl font-semibold text-neutral-600">{`Frequently Asked Questions`}</h1>
              <p className="self-stretch text-2xl font-normal text-neutral-600">{`We couldn’t answer your question?`}</p>
              <Button variant="outline" size="sm">{`Contact us`}</Button>
            </div>
            <div className="flex w-full">
              <div className="w-full md:ml-auto 2xl:w-[500px]">
                {`Faq Accordion `}
              </div>
            </div>
          </div>
          <div className="flex w-full items-center justify-center text-center">
            <div className="inline-flex flex-col items-center justify-center gap-4 p-6 px-0 md:px-6">
              <h1 className="text-3xl font-bold text-orange-500">
                Didn’t find an answer?
              </h1>
              <p className="text-lg font-normal text-neutral-600">
                Contact us for more inquires and information about our services.
              </p>

              <Button variant="primary" size="lg">{`Contact Us`}</Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;

const faqs = [
  {
    id: "item-1",
    question: "What is EcoClean?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    id: "item-2",
    question: "How does EcoClean work?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: "item-3",
    question: "What are the key features of EcoClean?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum repellendus doloribus deserunt totam doloremque, quia quaerat veniam harum.",
  },
  {
    id: "item-4",
    question: "Who can benefit from using EcoClean?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    id: "item-5",
    question: "What are the system requirements for EcoClean?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: "item-6",
    question: "How do I use EcoClean?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    id: "item-7",
    question: "How do I store EcoClean?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: "item-8",
    question: "How much does EcoClean cost?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: "item-9",
    question: "Are there any discounts available?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
];
