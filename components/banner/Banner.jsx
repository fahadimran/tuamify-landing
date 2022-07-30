import React from "react";

const Banner = () => {
  return (
    <div className="bg-primary rounded-xl flex justify-between items-center shadow-lg lg:flex-row flex-col lg:w-full lg:max-w-full max-w-2xl m-auto">
      <div className="basis-1/2">
        <img src="./banner-1.png" className="lg:w-full rounded-sm" />
      </div>
      <div className="basis-1/2 lg:pl-12 lg:pr-4 banner-text lg:my-0 lg:text-left text-center my-16 px-4">
        <h2 className="font-bold text-3xl text-slate-50">What Sets Us Apart</h2>
        <p className="pt-4 text-slate-100">
          Take online orders directly from your custom-built, branded mobile app
          and website - all completely without paying hefty commissions to third
          party platforms!
        </p>
        <button
          type="button"
          className="px-10 py-3 bg-secondary text-slate-50 mt-8 rounded-lg shadow-lg animate-bounce"
        >
          Give Us A Shot
        </button>
      </div>
    </div>
  );
};

export default Banner;
