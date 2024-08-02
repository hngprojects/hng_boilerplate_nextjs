"use client";

import { useRouter, useSearchParams } from "next/navigation";

import Header from "./_components/Header";
import Pages from "./_components/Pages";
import Users from "./_components/Users";

export default function Squeeze() {
  const searchParameters = useSearchParams();
  const page = searchParameters.get("page") || "pages";
  const router = useRouter();

  const handleTabRoute = (route: string) => {
    const current = new URLSearchParams(Object.fromEntries(searchParameters));
    current.set("page", route);
    current.set("search", "");
    const queryValues = current.toString();
    const query = queryValues ? `?${queryValues}` : "";
    router.push(`${window.location.pathname}${query}`);
  };

  return (
    <main>
      <Header />

      <section className="my-4 text-neutral-dark-1">
        <div className="mt-4 inline-flex items-center gap-2 rounded bg-gray-100 p-1">
          <div
            className={`cursor-pointer rounded px-4 py-2 ${!page.includes("users") && "bg-white font-medium"}`}
            onClick={() => handleTabRoute("pages")}
          >
            Squeeze Pages
          </div>
          <div
            className={`cursor-pointer rounded px-4 py-2 ${page.includes("users") && "bg-white font-medium"}`}
            onClick={() => handleTabRoute("users")}
          >
            Users
          </div>
        </div>
      </section>

      {page === "pages" && <Pages />}

      {page === "users" && <Users />}
    </main>
  );
}
