export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>Navbar</header>
      <section className="w-full relative  md:pl-[96px] min-[1140px]:pl-[270px] ">
        <div className="flex w-full flex-col h-full relative max-container pt-12 md:pt-0 dark:bg-gray-900">
          {children}
        </div>
      </section>
    </>
  );
}
