import { unstable_noStore as noStore } from "next/cache";

export default async function HNGTEST() {
  noStore();
  const API_URL =
    `${process.env.API_URL}/probe` ||
    process.env.API_URL ||
    "No API URL provided";
  let result = {} as { message?: string };
  let text = "";
  try {
    const response = await fetch(API_URL);
    console.log(response);
    text = await response.text();
    console.log(text);
    result = response.ok
      ? (await response.text()) || (await response.json())
      : {};
  } catch {
    result = {};
  }
  return (
    <div className="flex items-center justify-center py-10">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold lg:text-3xl">HNG TEST BACKEND</h1>
        <p>Version 0.12</p>
        <p>{API_URL}</p>
        <p>{result?.message || text}</p>
      </div>
    </div>
  );
}
