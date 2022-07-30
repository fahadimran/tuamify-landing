import React from "react";

const OurPartners = () => {
  const imageNames = [
    "mindanos_white",
    "burger-chikk",
    "burgernext",
    "downtownpizza",
    "fredrigos",
    "harry_and_G_logo",
    "chicago",
    "saltillo",
    "krave",
  ];

  return (
    <div className="max-w-screen-md m-auto">
      <PartnersHeading />
      <div className="grid place-items-center sm:grid-cols-2 md:grid-cols-3 mt-24">
        {imageNames.map((image, index) => (
          <img
            key={index}
            src={`./${image}.png`}
            className="brand-logo drop-shadow-lg mb-16 transition ease-in-out delay-100 hover:cursor-pointer hover:-translate-y-1 hover:scale-105 hover:drop-shadow-xl duration-300"
          />
        ))}
      </div>
    </div>
  );
};

const PartnersHeading = () => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold">Our Partners</h2>
      <p className="pt-4">
        The ever growing list of restaurants working with us.
      </p>
    </div>
  );
};

export default OurPartners;
