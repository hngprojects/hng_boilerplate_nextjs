import { Button } from "~/components/ui/button";

export default function Home() {
  return (
    <>
      {/* Header Component Present from Layout */}
      <div className="flex flex-col items-center justify-center bg-white px-8 py-16">
        <div className="flex max-w-2xl flex-col gap-6 rounded-lg bg-white p-8 text-center transition duration-200 sm:gap-8">
          <div className="text-2xl font-medium sm:text-4xl">
            Sent! Check your email.
          </div>
          <div className="flex flex-col items-center justify-center gap-4 sm:gap-8">
            <div className="flex h-[70px] w-[70px] items-center justify-center sm:h-[120px] sm:w-[120px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 120 120"
                fill="none"
                data-testid="success-icon"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 60C0 44.087 6.32141 28.8258 17.5736 17.5736C28.8258 6.32141 44.087 0 60 0C75.913 0 91.1742 6.32141 102.426 17.5736C113.679 28.8258 120 44.087 120 60C120 75.913 113.679 91.1742 102.426 102.426C91.1742 113.679 75.913 120 60 120C44.087 120 28.8258 113.679 17.5736 102.426C6.32141 91.1742 0 75.913 0 60ZM56.576 85.68L91.12 42.496L84.88 37.504L55.424 74.312L34.56 56.928L29.44 63.072L56.576 85.68Z"
                  fill="#6DC347"
                />
              </svg>
            </div>
            <p className="text-base font-normal sm:text-xl">
              We have sent an email to talk2johnsnow@gmail.com. It contains
              instructions on how to get started.
            </p>
          </div>
          <Button variant="primary" size={"xl"} className="hidden sm:block">
            Open Email
          </Button>
          <Button
            variant="outline"
            className="block max-w-28 self-center bg-white sm:hidden"
          >
            Open Email
          </Button>
        </div>
      </div>
      {/* Footer Component Present from Layout */}
    </>
  );
}
