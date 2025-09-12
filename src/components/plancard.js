import CheckItem from "./checkitem";

// Plan Card Component for pricing plans
const PlanCard = ({
  planName,
  price,
  priceColor = "text-slate-900",
  titleColor = "text-slate-500",
  buttonText,
  buttonStyle = "bg-black text-white hover:bg-gray-800",
  features,
  featuresColor = "text-slate-700",
  isPopular = false,
  popularBadge = "Most Popular",
  cardStyle = "bg-white border-slate-200",
  className = "",
}) => {
  return (
    <div
      className={`rounded-2xl p-8 border shadow-sm relative ${cardStyle} ${className}`}
    >
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute top-4 right-4">
          <span className="inline-block rounded-lg border border-gray-500/40 px-4 py-1 text-sm font-medium bg-black">
            <span className="bg-gradient-to-r from-pink-300 via-green-200 to-sky-300 bg-clip-text text-transparent">
              {popularBadge}
            </span>
          </span>
        </div>
      )}

      <div className="text-left">
        {/* Plan Name */}
        <h3 className={`text-lg font-sm mb-4 ${titleColor}`}>{planName}</h3>

        {/* Price */}
        <div className="mb-6">
          <span className={`text-4xl font-bold ${priceColor}`}>{price}</span>
          <span className={`font-sm ml-1 ${titleColor}`}>/monthly</span>
        </div>

        {/* CTA Button */}
        <button
          className={`w-full rounded-lg py-1.5 px-4 mb-8 transition-colors ${buttonStyle}`}
        >
          {buttonText}
        </button>

        {/* Features List */}
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <CheckItem
              key={index}
              className={featuresColor}
              iconColor={isPopular ? "#ffffff" : undefined}
            >
              {feature}
            </CheckItem>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Pricing Plans Data
export const pricingPlans = [
  {
    planName: "Free",
    price: "$0",
    priceColor: "text-slate-900",
    titleColor: "text-slate-500",
    buttonText: "Get started for free",
    buttonStyle: "bg-black text-white hover:bg-gray-800",
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
    featuresColor: "text-slate-700",
    cardStyle: "bg-white border-slate-200",
    isPopular: false,
  },
  {
    planName: "Pro",
    price: "$9",
    priceColor: "text-white",
    titleColor: "text-slate-400",
    buttonText: "Sign up now",
    buttonStyle: "bg-white text-slate-900 hover:bg-gray-100",
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
    featuresColor: "text-white",
    cardStyle: "bg-slate-900 text-white border-slate-800 shadow-lg",
    isPopular: true,
    popularBadge: "Most Popular",
  },
  {
    planName: "Business",
    price: "$19",
    priceColor: "text-slate-900",
    titleColor: "text-slate-500",
    buttonText: "Sign up now",
    buttonStyle: "bg-black text-white hover:bg-gray-800",
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
    featuresColor: "text-slate-700",
    cardStyle: "bg-white border-slate-200",
    isPopular: false,
  },
];

// Main Component to render all pricing cards
const PlanCards = ({
  plans = pricingPlans,
  containerClassName = "grid grid-cols-1 lg:grid-cols-3 gap-8 mx-auto items-end w-fit",
}) => {
  return (
    <div className={containerClassName}>
      {plans.map((plan, index) => (
        <PlanCard
          key={index}
          planName={plan.planName}
          price={plan.price}
          priceColor={plan.priceColor}
          titleColor={plan.titleColor}
          buttonText={plan.buttonText}
          buttonStyle={plan.buttonStyle}
          features={plan.features}
          featuresColor={plan.featuresColor}
          cardStyle={plan.cardStyle}
          isPopular={plan.isPopular}
          popularBadge={plan.popularBadge}
        />
      ))}
    </div>
  );
};

export default PlanCards;
