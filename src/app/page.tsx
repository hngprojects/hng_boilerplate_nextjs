import Navbar from "~/components/layouts/components/Navbar";
import Head from "next/head";
import Dashboard from "./dashboard/page";

export default function Home() {

  return (
    <>
      <Navbar />
      <main className="">
        <Dashboard />
      </main>
    </>
  );
}
