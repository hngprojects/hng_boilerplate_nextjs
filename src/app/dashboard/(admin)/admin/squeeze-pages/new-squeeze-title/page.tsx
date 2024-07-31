import { Input } from "~/components/common/input";
import Footer from "~/components/layouts/footer";
import { Button } from "~/components/ui/button";

const NewSqueezeTitle = () => {
  return (
    <>
      <button className="h-8 rounded border bg-[#F1F5F9] px-3 text-sm">
        Back
      </button>
      <br />
      <br />
      <div className="flex flex-col items-center">
        <h3 className="whitespace-nowrap text-2xl font-semibold leading-8 text-neutral-dark-2">
          Squeeze page title
        </h3>
        <br />
        <div className="my-2 flex h-80 w-11/12 flex-col items-center justify-center bg-[#F4F4F4]">
          <h3 className="whitespace-nowrap text-4xl font-semibold leading-8 text-neutral-dark-2">
            Squeeze Page Headling
          </h3>
          <br />
          <form>
            <label htmlFor="subscribe" className="font-semibold">
              Enter email address
            </label>
            <br />
            <div className="flex w-96 items-center gap-2">
              <Input
                className="h-11 w-full text-black"
                id="subscribe"
                placeholder="e.g Email adress"
              />

              <Button className="">Subscribe</Button>
            </div>
          </form>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="whitespace-nowrap text-2xl font-semibold leading-8 text-neutral-dark-2">
            Squeeze page sub headline text
          </h3>
          <p>Squeeze page sub body text goes hear</p>
          <p>all other details</p>
        </div>
        <br /><br />
        <br /><br />
        <br />
        <div className="bg-[#F4F4F4]">
          <Footer />
        </div>
      </div>
    </>
  );
};
export default NewSqueezeTitle;
