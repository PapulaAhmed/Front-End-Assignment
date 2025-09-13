import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

const Logo = ({
  width = 32,
  height = 32,
  className = "h-8 w-8",
}: LogoProps) => {
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
