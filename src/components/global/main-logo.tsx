import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex h-[37px] w-full max-w-[200px] md:h-[52px] lg:max-w-[283px]"
      data-testid="logo"
    >
      <span className="inline">
        <Image
          src="/home/telex.webp"
          alt="Hgn boiler plate logo"
          height={52}
          width={283}
          className="inline h-full w-full object-contain px-5"
        />
      </span>

      <span className="inline">
        <Image
          src="/home/chatbot.png"
          alt="Hgn boiler plate logo"
          height={52}
          width={283}
          className="inline h-full w-full object-contain"
        />
      </span>
    </Link>
  )
}

export default Logo
