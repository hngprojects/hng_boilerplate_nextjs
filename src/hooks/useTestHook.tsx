import { useState } from "react";

export function UseTestHook() {
  const [isOkay, setIsOkay] = useState("Hello World");
  setIsOkay("Hello World!");

  return isOkay;
}
