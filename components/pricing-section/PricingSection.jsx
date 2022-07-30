import React from "react";

const PricingSection = () => {
  const basicFeatures = [
    "Admin Portal",
    "Web Apps",
    "Alternative Payment Method",
    "Favorite Orders",
    "Restricting Delivery Location Radius",
  ];

  const standardFeatures = [
    "Basic Package Perks",
    "Mobile Apps",
    "Digital Market Management",
    "Takeaway",
  ];

  const premiumFeatures = [
    "Standard Package Perks",
    "Admin Panel Mobile",
    "Rider Application",
    "Rewards Program",
  ];
  return (
    <div>
      <PricingHeading />

      <div className="flex pt-16 justify-around flex-col items-center lg:items-stretch lg:flex-row">
        <PriceCard
          heading={"Basic"}
          desc={
            "Build your online presence with us and we help you grow to your potential"
          }
          special={["1", "1"]}
          features={basicFeatures}
        />

        <PriceCard
          heading={"Standard"}
          desc={
            "Establish your brand identity in the online world where everyone talks about your restaurant"
          }
          special={["3", "3"]}
          features={standardFeatures}
        />

        <PriceCard
          heading={"Premium"}
          desc={
            "Join us in helping you expand your business and help you take charge of your future"
          }
          special={["5", "5"]}
          features={premiumFeatures}
        />
      </div>
    </div>
  );
};

const PriceCard = ({ heading, desc, special, features }) => {
  return (
    <div
      className={`mb-8 lg:mb-0 max-w-md lg:max-w-sm mx-2 xl:mx-4 pricing-card flex flex-col border border-gray-200 rounded-lg shadow-lg px-6 py-8 transition ease-in-out delay-100 hover:cursor-pointer hover:-translate-y-1 hover:scale-105 hover:shadow-xl duration-300`}
    >
      <h3 className="text-3xl font-semibold">{heading}</h3>
      <p className="pt-3 text-sm">{desc}</p>

      <div className="pt-4 flex">
        <p className="max-w-max bg-primary-light text-primary font-semibold px-2 rounded-full text-sm py-1">
          {`${special[0]}x Child Account`}
        </p>
        <p className="ml-2 max-w-max bg-purple-light text-purple font-semibold px-2 rounded-full text-sm py-1">
          {`${special[1]}x Branch`}
        </p>
      </div>

      <hr className="my-4" />

      <div className="flex flex-col grow">
        <div className="grow">
          {features.map((feature, index) => (
            <div className="flex items-center py-2" key={index}>
              <img src="./tick-svg.svg" width={20} />
              <p className="pl-2 font-medium">{feature}</p>
            </div>
          ))}
        </div>
        <button
          type="button"
          className="bg-primary w-full mt-10 rounded-lg py-2 text-slate-50 font-medium"
        >
          Get a Quote
        </button>
      </div>
    </div>
  );
};

const PricingHeading = () => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold">Our Pricing</h2>
      <p className="pt-4">Explore our flexible pricing options.</p>
    </div>
  );
};

export default PricingSection;
