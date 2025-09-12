import Eyebrow from "@/components/eyebrow";
import GetFreeBtn from "@/components/getfreebtn";
import LearnMoreBtn from "@/components/learnmorebtn";
import Navbar from "@/components/navbar";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section
        aria-labelledby="hero-title"
        className="hero-bg bg-[linear-gradient(20deg,#1841c0_0%,#0000_50%)]"
      >
        <div className="lg:px-16 mx-auto px-4 py-16 sm:px-6 md:py-24 xl:py-32">
          <div className="grid items-center gap-12 md:grid-cols-2 overflow-visible">
            {/* Left */}
            <div className="w-full max-w-xl">
              <Eyebrow label="Version 2.0 is here" />
              <h1
                id="hero-title"
                className="mt-6 font-extrabold tracking-tight"
                style={{
                  color: "#0B1220",
                  fontSize: "clamp(42px, 6vw, 88px)",
                  lineHeight: 1.02,
                }}
              >
                Pathway to
                <br />
                productivity
              </h1>
              <p className="mt-6">
                Celebrate the joy of accomplishment with an <br /> app designed
                to track your progress, motivate <br /> your efforts, and
                celebrate your successes.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <GetFreeBtn />
                <LearnMoreBtn variant="font-medium" />
              </div>
            </div>

            {/* Right */}
            <div className="relative">
              <Image
                src="/images/Hero Section/vurtel.png"
                alt="Vurtel"
                width={800}
                height={800}
                className="relative scale-90 lg:scale-100 lg:right-0 md:scale-140 md:-right-45"
                style={{ transform: "scaleX(-1)" }}
              />
              <div className="absolute -top-10 -left-20 z-10 pointer-events-none select-none md:block hidden scale-90">
                <Image
                  src="/images/Hero Section/cylinder.png"
                  alt="Cylinder"
                  width={180}
                  height={180}
                />
              </div>
              <div className="absolute -bottom-25 -right-5 rotate-25 z-10 pointer-events-none select-none hidden lg:block">
                <Image
                  src="/images/Hero Section/half-torus.png"
                  alt="Half Torus"
                  width={180}
                  height={180}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
