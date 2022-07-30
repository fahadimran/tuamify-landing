import React from "react";

const ProductsSection = () => {
  return (
    <div>
      <ProductsHeading />

      <div className="pt-20">
        <ProductRow
          headingText={"Your Own Branded Mobile Application"}
          desc={
            "Tuamify Restaurant App makes it easier for restaurant owners to analyze their customers data. Demographics of your regular customers is just a tap away!"
          }
          img={"./products-1.png"}
        />

        <ProductRow
          headingText={"Ordering Website"}
          desc={
            "Take online orders directly from your custom-built, branded mobile app and website - all completely without paying hefty commissions to third party platforms!"
          }
          img={"./products-2.png"}
          invert={true}
        />

        <ProductRow
          headingText={"Social Media Marketing"}
          desc={
            "We are providing 24/7 Tech Support along with 360' efficient Social Media Marketing, so that Restaurants can deliver super-delicious food directly to the customer's doorstep."
          }
          img={"./products-5.png"}
        />
      </div>
    </div>
  );
};

const ProductRow = ({ headingText, desc, img, invert }) => {
  return (
    <div className="flex items-center justify-evenly py-8 lg:flex-row flex-col lg:text-left text-center lg:max-w-full max-w-xl m-auto">
      <img
        src={img}
        className={`product-image basis-1/2 lg:basis-7/12 shrink-0 rounded-xl drop-shadow-xl hover:cursor-pointer hover:-translate-y-1 hover:scale-105 hover:drop-shadow-xl duration-300 ${
          invert ? "inverted" : ""
        }`}
      />
      <div className="basis-1/2 lg:basis-5/12 lg:mt-0 mt-16">
        <h2 className="text-3xl lg:text-4xl font-semibold">{headingText}</h2>
        <p className="pt-6">{desc}</p>
      </div>
    </div>
  );
};

const ProductsHeading = () => {
  return (
    <div className="text-center lg:w-full sm:w-3/4 m-auto">
      <h2 className="text-3xl font-bold">The Products</h2>
      <p className="pt-4">
        Go online with tuamify online restaurant solution and boost your sales
        along with your customer base.
      </p>
    </div>
  );
};

export default ProductsSection;
