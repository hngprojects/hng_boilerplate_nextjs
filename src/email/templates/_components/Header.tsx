import Logo from "./Logo";

export default function Header() {
  return (
    <header className="flex w-full items-center justify-center bg-[#e1d6d666]">
      <div className="mx-auto w-full max-w-[600px]">
        <Logo className="w-full" />
      </div>
    </header>
  );
}
