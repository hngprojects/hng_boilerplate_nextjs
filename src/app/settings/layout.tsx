import SettingsSidebar from "~/components/common/settings/sidebar";
import { UpdatedModal } from "./profile";
import StateContextProvider from "./stateContext";

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StateContextProvider>
      <header>Navbar</header>
      <SettingsSidebar />
      <section className="relative w-full overflow-x-hidden bg-white md:pl-[126px] min-[1140px]:pl-[290px]">
        <div className="relative flex h-full w-full flex-col">{children}</div>
        <UpdatedModal />
      </section>
    </StateContextProvider>
  );
}
