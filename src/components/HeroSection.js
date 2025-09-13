"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Eyebrow from "@/components/eyebrow";
import GetFreeBtn from "@/components/getfreebtn";
import LearnMoreBtn from "@/components/learnmorebtn";

const HeroSection = () => {
  return (
    <section
      aria-labelledby="hero-title"
      className="hero-bg bg-[linear-gradient(20deg,#1841c0_0%,#0000_50%)] flex items-center md:h-[94vh]"
    >
      <div className="lg:px-16 mx-auto px-4 py-16 sm:px-6 md:py-24 xl:py-32">
        <div className="grid items-center gap-12 md:grid-cols-2 overflow-visible">
          {/* Left */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            className="w-full max-w-xl"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5 },
                },
              }}
            >
              <Eyebrow label="Version 2.0 is here" />
            </motion.div>
            <motion.h1
              id="hero-title"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: 0.2 },
                },
              }}
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
            </motion.h1>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: 0.4 },
                },
              }}
              className="mt-6"
            >
              Celebrate the joy of accomplishment with an <br /> app designed to
              track your progress, motivate <br /> your efforts, and celebrate
              your successes.
            </motion.p>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: 0.6 },
                },
              }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 20px rgb(99 102 241 / 0.5)",
                }}
                transition={{ duration: 0.3 }}
              >
                <GetFreeBtn />
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.05,
                }}
                transition={{ duration: 0.3 }}
              >
                <LearnMoreBtn variant="font-medium" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right */}
          <div className="relative" style={{ perspective: "1000px" }}>
            <motion.div
              animate={{
                rotateZ: [0, 360],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                transformOrigin: "center center",
                willChange: "transform",
              }}
            >
              <Image
                src="/images/Hero Section/vurtel.png"
                alt="Vurtel"
                width={800}
                height={800}
                className="relative scale-90 lg:scale-100 lg:right-0 md:scale-140 md:-right-45"
                style={{
                  transform: "scaleX(-1)",
                  transformStyle: "preserve-3d",
                }}
              />
            </motion.div>
            <div className="absolute -top-10 -left-20 z-30 pointer-events-none select-none md:block hidden scale-90">
              <Image
                src="/images/Hero Section/cylinder.png"
                alt="Cylinder"
                width={180}
                height={180}
              />
            </div>
            <div className="absolute -bottom-25 -right-5 rotate-25 z-30 pointer-events-none select-none hidden lg:block">
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
  );
};

export default HeroSection;
