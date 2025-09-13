import Link from "next/link";

const GetFreeBtn = () => {
  return (
    <Link
      href="/get-free"
      className="rounded-lg bg-black px-4 py-2 text-white font-semibold hover:bg-gray-800 transition-colors duration-200"
    >
      Get for free
    </Link>
  );
};

export default GetFreeBtn;
