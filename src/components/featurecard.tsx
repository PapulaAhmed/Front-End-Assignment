import Image from "next/image";
import { ReactNode } from "react";

// Type definitions
interface FeatureData {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: ReactNode;
}

interface FeatureCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: ReactNode;
  imageWidth?: number;
  imageHeight?: number;
}

interface FeatureCardsProps {
  features?: FeatureData[];
  containerClassName?: string;
}

// Feature Cards Data
export const featuresData: FeatureData[] = [
  {
    imageSrc: "/images/Management Section/cube-helix.png",
    imageAlt: "Blue 3D shape",
    title: "Integration ecosystem",
    description: (
      <>
        Enhance your productivity by connecting <br /> with your favorite tools,
        keeping all your <br /> essentials in one place.
      </>
    ),
  },
  {
    imageSrc: "/images/Management Section/cube.png",
    imageAlt: "Iridescent blue cube",
    title: "Goal setting and tracking",
    description: (
      <>
        Define and track your goals, breaking down <br /> objectives into
        achievable tasks to keep your <br /> targets in sight.
      </>
    ),
  },
];

// Individual Feature Card Component
const FeatureCard = ({
  imageSrc,
  imageAlt,
  title,
  description,
  imageWidth = 320,
  imageHeight = 240,
}: FeatureCardProps) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-xl p-6">
      <div className="aspect-[5/3] overflow-hidden rounded-xl">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          className="h-full w-full object-contain"
          sizes="(min-width: 768px) 33rem, 100vw"
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
        />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-black text-center">
        {title}
      </h3>
      <p className="mt-1 text-sm leading-6 text-black text-center">
        {description}
      </p>
    </div>
  );
};

// Main Feature Cards Component
const FeatureCards = ({
  features = featuresData,
  containerClassName = "mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 mx-auto max-w-md lg:max-w-none",
}: FeatureCardsProps) => {
  return (
    <div className={containerClassName}>
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          imageSrc={feature.imageSrc}
          imageAlt={feature.imageAlt}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
};

export default FeatureCards;
