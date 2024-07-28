export default async function HNGTEST() {
  let result = {} as { message?: string };
  try {
    if (process.env.NEXT_PUBLIC_BACKEND_PROBE_URL) {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_PROBE_URL}`,
        {
          cache: "no-store",
        },
      );
      result = response.ok ? await response.json() : {};
    }
  } catch {
    result = {};
  }
  return (
    <div className="flex items-center justify-center py-10">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold lg:text-3xl">HNG TEST BACKEND</h1>
        <p>Version 0.12</p>
        <p>{process.env.NEXT_PUBLIC_BACKEND_PROBE_URL || ""}</p>
        <p>{result?.message}</p>
      </div>
    </div>
  );
}
