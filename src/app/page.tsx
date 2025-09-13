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
import Logo from "@/components/logo";
import LogoStrip from "@/components/logostrip";
import Navbar from "@/components/navbar";
import PlanCards from "@/components/plancard";
import SocialMediaIcons from "@/components/socialmediaiconbtn";
import TestimonialSection from "@/components/testimonialsection";
import ProductivitySection from "@/components/ProductivitySection";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import Link from "next/link";

// Type definitions
interface Testimonial {
  id: number;
  title?: string;
  text: string;
  name: string;
}

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

/**
 * Fetches testimonials from JSONPlaceholder API
 */
async function fetchTestimonials(): Promise<Testimonial[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    // Accept JSON, and allow ISR-friendly caching
    headers: { Accept: "application/json" },
    // NOTE: no-cache here is NOT desired, we want static+ISR
  });
  if (!res.ok) throw new Error(`Failed: ${res.status}`);
  const posts: Post[] = await res.json();

  // Transform posts to testimonials format
  return posts.slice(0, 12).map((post) => ({
    id: post.id,
    title: post.title,
    text: post.body,
    name: `User ${post.userId}`, // Simple name generation since posts don't have names
  }));
}

const Home = async () => {
  // Fetch testimonials server-side
  let testimonials: Testimonial[] = [];
  try {
    testimonials = await fetchTestimonials();
  } catch (e) {
    console.error("[Home] testimonials error:", e);
    testimonials = [];
  }

  return (
    <>
      <Navbar />
      <HeroSection />
      <ProductivitySection />
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
      {/* Our Users Section */}
      <TestimonialSection testimonials={testimonials} />
      {/* Sign Up Section */}
      <section className="relative py-20 bg-gradient-to-t from-[#D2DCFF] to-[#F8FAFC] overflow-hidden">
        {/* Decorative images */}
        <div className="absolute left-0 hidden md:block md:-left-37 lg:left-0 top-1/3 -translate-y-1/2 w-70 h-65 z-0">
          <Image
            src="/images/Sign Up Section/emojistar.png"
            alt="Decorative star emoji"
            width={192}
            height={192}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="absolute hidden right-0 md:block md:-right-25 lg:right-0 top-1/2 -translate-y-1/3 w-70 h-70 z-0">
          <Image
            src="/images/Sign Up Section/helix2.png"
            alt="Decorative helix"
            width={300}
            height={300}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-7xl">
          <h2 className="text-4xl font-bold text-slate-900 sm:text-5xl mb-6">
            Sign up for free today
          </h2>
          <p className="text-black text-lg mb-8 mx-auto max-w-[50ch]">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>

          {/* Buttons */}
          <div className="flex items-center justify-center gap-4">
            <GetFreeBtn />
            <LearnMoreBtn variant="font-medium" />
          </div>
        </div>
      </section>
      {/* Footer Section */}
      <footer className="bg-black text-slate-300 py-8">
        <div className="px-6">
          <div className="flex flex-col md:flex-row md:justify-between">
            {/* Left Side - Logo & Social */}
            <div className="max-w-[30%] md:w-1/3 flex flex-col justify-between mb-8 md:mb-0">
              <div>
                {/* Logo */}
                <div className="flex flex-col mb-4">
                  <Logo />
                </div>

                {/* Description */}
                <p className="text-slate-400 text-sm mb-6 leading-relaxed max-w-xs">
                  Effortlessly turn your ideas into a fully functional,
                  responsive, no-code SaaS website.
                </p>
              </div>

              {/* Social Media Icons */}
              <SocialMediaIcons />
            </div>

            {/* Right Side - Navigation Columns */}
            <nav
              className="md:w-fit md:flex-shrink-0"
              aria-label="Footer Navigation"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-10 md:gap-x-8">
                {/* Product Column */}
                <div>
                  <h3 className="text-white font-semibold mb-4">Product</h3>
                  <ul className="space-y-4">
                    <li>
                      <Link
                        href="/features"
                        className="text-slate-400 hover:text-white transition-colors"
                      >
                        Features
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/integrations"
                        className="text-slate-400 hover:text-white transition-colors"
                      >
                        Integrations
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/updates"
                        className="text-slate-400 hover:text-white transition-colors"
                      >
                        Updates
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/faq"
                        className="text-slate-400 hover:text-white transition-colors"
                      >
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/pricing"
                        className="text-slate-400 hover:text-white transition-colors"
                      >
                        Pricing
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Company Column */}
                <div>
                  <h3 className="text-white font-semibold mb-4">Company</h3>
                  <ul className="space-y-4">
                    <li>
                      <Link
                        href="/about"
                        className="text-slate-400 hover:text-white transition-colors"
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/blog"
                        className="text-slate-400 hover:text-white transition-colors"
                      >
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/careers"
                        className="text-slate-400 hover:text-white transition-colors"
                      >
                        Careers
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/manifesto"
                        className="text-slate-400 hover:text-white transition-colors"
                      >
                        Manifesto
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/press"
                        className="text-slate-400 hover:text-white transition-colors"
                      >
                        Press
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contact"
                        className="text-slate-400 hover:text-white transition-colors"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Resources Column */}
                <div>
                  <h3 className="text-white font-semibold mb-4">Resources</h3>
                  <ul className="space-y-4">
                    <li>
                      <Link
                        href="/examples"
                        className="text-slate-400 hover:text-white transition-colors"
                      >
                        Examples
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/community"
                        className="text-slate-400 hover:text-white transition-colors"
                      >
                        Community
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/guides"
                        className="text-slate-400 hover:text-white transition-colors"
                      >
                        Guides
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/docs"
                        className="text-slate-400 hover:text-white transition-colors"
                      >
                        Docs
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Legal Column */}
                <div>
                  <h3 className="text-white font-semibold mb-4">Legal</h3>
                  <ul className="space-y-4">
                    <li>
                      <Link
                        href="/privacy"
                        className="text-slate-400 hover:text-white transition-colors"
                      >
                        Privacy
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/terms"
                        className="text-slate-400 hover:text-white transition-colors"
                      >
                        Terms
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/security"
                        className="text-slate-400 hover:text-white transition-colors"
                      >
                        Security
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Home;
