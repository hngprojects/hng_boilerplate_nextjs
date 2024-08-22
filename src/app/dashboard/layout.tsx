import OrgContextProvider from "~/contexts/orgContext";

export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <OrgContextProvider>{children}</OrgContextProvider>;
}
