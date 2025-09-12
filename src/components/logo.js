import Image from "next/image";

const Logo = ({ width = 32, height = 32, className = "h-8 w-8" }) => {
  return (
    <Image
      src="/images/Logo/logo.svg"
      alt="Logo"
      width={width}
      height={height}
      className={className}
    />
  );
};

export default Logo;
