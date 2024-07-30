import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

import { Button } from "~/components/ui/button";

export const GoogleSignIn = () => {
  // eslint-disable-next-line unicorn/consistent-function-scoping
  const handleLogin = async () => {
    await signIn("google", { callbackUrl: "/dashboard" });
  };
  return (
    <form action={handleLogin}>
      <Button type="submit" variant="outline" className="flex w-full gap-2">
        <FcGoogle />
        <span>Continiue with Google</span>
      </Button>
    </form>
  );
};
