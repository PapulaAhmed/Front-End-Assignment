import Eyebrow from "@/components/eyebrow";
import FeatureCards from "@/components/featurecard";
import GetFreeBtn from "@/components/getfreebtn";
import {
  GoalIcon,
  IntegrationIcon,
  NotificationIcon,
  SecurityIcon,
} from "@/components/iconwrapper";
import LearnMoreBtn from "@/components/learnmorebtn";
import LogoStrip from "@/components/logostrip";
import Navbar from "@/components/navbar";
import PlanCards from "@/components/plancard";
import Image from "next/image";

const features = [
  {
    name: "Integration ecosystem",
    description: "Track your progress and motivate your efforts everyday.",
    href: "/integrations",
    Icon: IntegrationIcon,
  },
  {
    name: "Goal setting and tracking",
    description: "Set and track goals with manageable task breakdowns.",
    href: "/goals",
    Icon: GoalIcon,
  },
  {
    name: "Secure data encryption",
    description: "Ensure your data's safety with top-tier encryption.",
    href: "/security",
    Icon: SecurityIcon,
  },
  {
    name: "Customisable notifications",
    description: "Get alerts on tasks and deadlines that matter most.",
    href: "/notifications",
    Icon: NotificationIcon,
  },
];

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
      {/* Productivity Section */}
      <section
        aria-labelledby="progress-title"
        className="relative overflow-hidden pb-40 bg-gradient-to-t from-[#D2DCFF] to-white"
      >
        {/* Background gradient effects */}
        {/* <div className="absolute inset-x-0 bottom-[-30%] h-[60rem] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(99,102,241,0.18)_0%,rgba(99,102,241,0)_60%)] blur-3xl" /> */}

        {/* Logo Strip */}
        <LogoStrip />

        <div className="relative mx-auto mt-30 px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Eyebrow */}
          <div className="flex justify-center mb-8">
            <Eyebrow label="Boost your productivity" />
          </div>

          {/* Heading */}
          <h2
            id="progress-title"
            className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 text-center"
          >
            A more effective way
            <br />
            to track progress
          </h2>

          {/* Lead paragraph */}
          <p className="mt-4 text-base md:text-lg text-center mx-auto max-w-[700px]">
            Effortlessly turn your ideas into a fully functional, <br />{" "}
            responsive, no-code SaaS website in just minutes with <br /> the set
            of free components for Framer.
          </p>

          {/* Hero media card */}
          <div className="mt-12 md:mt-16 mb-12 md:mb-16 flex justify-center">
            <div className="relative w-full max-w-[1100px]">
              {/* Small placeholders over the product image */}
              <div
                className="absolute lg:top-28 lg:-right-30 md:-top-30 md:-right-30 md:scale-130 rounded-lg z-10 pointer-events-none hidden md:block"
                aria-hidden="true"
              >
                <Image
                  src="/images/Productivity Section/pyramid.png"
                  alt=""
                  width={220}
                  height={220}
                  className="rounded-lg"
                />
              </div>

              <div
                className="absolute lg:bottom-20 lg:-left-25 md:bottom-28 md:-left-22 md:scale-125 rounded-full z-10 pointer-events-none hidden md:block"
                aria-hidden="true"
              >
                <Image
                  src="/images/Productivity Section/torus.png"
                  alt=""
                  width={200}
                  height={200}
                  className="rounded-full"
                />
              </div>
              <div className="relative overflow-hidden rounded-2xl border border-gray-200/60 dark:border-white/10 shadow-xl bg-white dark:bg-gray-900">
                <Image
                  src="/images/Productivity Section/product image.png"
                  alt="Project dashboard with tasks and progress"
                  width={1100}
                  height={650}
                  priority
                  sizes="(min-width: 1024px) 1100px, 100vw"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Feature row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 px-20 md:px-32 lg:px-15">
            {features.map((feature) => (
              <div key={feature.name} className="text-left">
                <div className="flex justify-start mb-3">
                  <feature.Icon
                    className="w-4 h-4 text-black"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-sm font-bold text-black">{feature.name}</h3>
                <p className="mt-1 text-sm text-black">{feature.description}</p>
                <LearnMoreBtn variant="text-sm mt-4" />
              </div>
            ))}
          </div>
        </div>
      </section>
            {/* Management Section */}
      <section
        className="relative py-20 md:py-28"
        aria-labelledby="management-heading"
      >
        <div className="mx-auto px-4 sm:px-6 max-w-6xl">
          {/* Pill Badge */}
          <div className="flex justify-center">
            <Eyebrow label="Everything You Need" />
          </div>

          {/* Heading */}
          <h2
            id="management-heading"
            className="mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 text-center"
          >
            Streamlined for easy <br /> management
          </h2>

          {/* Supporting Paragraph */}
          <p className="mt-4 text-base sm:text-lg text-black text-center mx-auto max-w-[60ch]">
            Enjoy customizable lists, team work tools, and smart <br />
            tracking all in one place. Set tasks, get reminders, and <br />
            see your progress simply and quickly.
          </p>

          {/* Feature Cards Grid */}
          <FeatureCards />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="mx-auto px-4 sm:px-6 max-w-6xl">
          {/* Pill Badge */}
          <div className="flex justify-center">
            <Eyebrow label="Boost your productivity" />
          </div>

          {/* Heading */}
          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 text-center">
            A more effective way
            <br />
            to track progress
          </h2>

          {/* Lead paragraph */}
          <p className="mt-4 text-base md:text-lg text-center mx-auto text-black max-w-[700px]">
            Effortlessly turn your ideas into a fully functional,
            <br />
            responsive, no-code SaaS website in just minutes with
            <br />
            the set of free components for Framer.
          </p>

          {/* Pricing Grid */}
          <div className="mt-16">
            <PlanCards />
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
