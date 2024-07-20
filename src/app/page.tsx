import Navbar from "../components/layouts/Navbar/index";
import Head from "next/head";
import Dashboard from "~/components/layouts/Dashboard";

export default function Home() {

  return (
    <>
      <Head>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <Navbar />
      <main className="flex min-h-screen pt-[110px] p-[42px]">
        <Dashboard />
      </main>
    </>
  );
}
