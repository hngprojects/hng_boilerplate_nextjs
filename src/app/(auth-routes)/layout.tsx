function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="mx-auto w-5/6">{children}</div>
    </>
  );
}

export default Layout;
