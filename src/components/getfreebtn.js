"use client";

const GetFreeBtn = () => {
  return (
    <button
      className="rounded-lg bg-black px-4 py-2 text-white font-semibold hover:bg-gray-800 transition-colors duration-200"
      onClick={() => alert("Get it for free clicked")}
    >
      Get for free
    </button>
  );
};

export default GetFreeBtn;
