import SettingsSidebar from "~/components/common/settings/sidebar";

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>Navbar</header>
      <SettingsSidebar />
      <section className="relative w-full overflow-x-hidden md:pl-[126px] min-[1140px]:pl-[290px]">
        <div className="relative flex h-full w-full flex-col pt-12 md:pt-0">
          {children}
        </div>
      </section>
    </>
  );
}
