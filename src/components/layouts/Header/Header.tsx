import "./Header.css";

import Image from "next/image";

export default function Header() {
  return (
    <header className="header">
      <Image src="/icon-logo.svg" alt="Logo" width={18} height={18} />
      <h1 className="header__text">Boilerplate.</h1>
    </header>
  );
}
