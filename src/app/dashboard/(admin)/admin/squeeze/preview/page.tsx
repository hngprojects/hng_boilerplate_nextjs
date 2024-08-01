import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

export default function Preview() {
  return (
    <main className="space-y-6 text-neutral-dark-2">
      <h4 className="text-xl font-semibold">Squeeze Page Title</h4>

      <h1 className="text-6xl font-semibold">Squeeze Page Headline</h1>

      <h4 className="text-base font-semibold">
        Squeeze Page Sub headline text
      </h4>

      <p>Squeeze page body text goes here and all other details</p>

      <form className="space-y-4">
        <div>
          <Label>First Name</Label>
          <Input type="text" className="w-96 bg-white" placeholder="e.g John" />
        </div>
        <div>
          <Label>Last Name</Label>
          <Input type="text" className="w-96 bg-white" placeholder="e.g Doe" />
        </div>
        <div>
          <Label>Enter Email Address</Label>
          <Input
            type="email"
            className="w-96 bg-white"
            placeholder="e.g Email Address"
          />
        </div>

        <Button>Submit</Button>
      </form>
    </main>
  );
}
