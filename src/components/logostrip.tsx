import Image from "next/image";

interface Logo {
  src: string;
  alt: string;
  opacity: string;
}

const LogoStrip = () => {
  const logos: Logo[] = [
    {
      src: "/images/Logo/acme 1.svg",
      alt: "Acme",
      opacity: "opacity-60 hover:opacity-100",
    },
    {
      src: "/images/Logo/quantum 1.svg",
      alt: "Quantum",
      opacity: "opacity-60 hover:opacity-100",
    },
    {
      src: "/images/Logo/echo 1.svg",
      alt: "Echo",
      opacity: "opacity-100",
    },
    {
      src: "/images/Logo/celestia 1.svg",
      alt: "Celestia",
      opacity: "opacity-60 hover:opacity-100",
    },
    {
      src: "/images/Logo/pulse 1.svg",
      alt: "Pulse",
      opacity: "opacity-60 hover:opacity-100",
    },
    {
      src: "/images/Logo/apex 1.svg",
      alt: "Apex",
      opacity: "opacity-60 hover:opacity-100",
    },
  ];

  return (
    <div className="relative bg-white">
      <div className="overflow-x-hidden flex items-center justify-center md:justify-between gap-4 lg:gap-30 md:gap-8 px-16 py-8 scrollbar-hide whitespace-nowrap flex-nowrap">
        {/* logos here */}
        {logos.map((logo, index) => (
          <Image
            key={index}
            src={logo.src}
            alt={logo.alt}
            width={120}
            height={40}
            className={`${logo.opacity} transition-opacity`}
          />
        ))}
      </div>

      {/* Left fade */}
      <div className="pointer-events-none opacity-80 absolute left-0 top-0 h-full w-[28%] bg-gradient-to-r from-white to-transparent"></div>

      {/* Right fade */}
      <div className="pointer-events-none opacity-80 absolute right-0 top-0 h-full w-[28%] bg-gradient-to-l from-white to-transparent"></div>
    </div>
  );
};

export default LogoStrip;
