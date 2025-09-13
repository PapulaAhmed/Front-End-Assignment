"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Eyebrow from "@/components/eyebrow";
import LearnMoreBtn from "@/components/learnmorebtn";
import {
  GoalIcon,
  IntegrationIcon,
  NotificationIcon,
  SecurityIcon,
} from "@/components/iconwrapper";
import LogoStrip from "./logostrip";

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

const ProductivitySection = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "center"],
  });

  const xPyramid = useTransform(scrollYProgress, [0, 1], ["150%", "0%"]);
  const yPyramid = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["-100%", "50%", "0%"]
  );
  const xTorus = useTransform(scrollYProgress, [0, 1], ["-150%", "0%"]);
  const yTorus = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["100%", "-50%", "0%"]
  );

  return (
    <section
      ref={targetRef}
      aria-labelledby="progress-title"
      className="relative overflow-hidden pb-40 bg-gradient-to-t from-[#D2DCFF] to-white"
    >
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
            <motion.div
              style={{ x: xPyramid, y: yPyramid }}
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
            </motion.div>

            <motion.div
              style={{ x: xTorus, y: yTorus }}
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
            </motion.div>
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
  );
};

export default ProductivitySection;
