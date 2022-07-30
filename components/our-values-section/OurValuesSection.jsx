import React from "react";

const OurValuesSection = () => {
  return (
    <div>
      <p className="text-center font-semibold text-2xl sm:w-3/4 m-auto">
        Tuamify online ordering system that allows guests to order takeout and
        delivery directly from you.
      </p>

      <div className="values flex flex-col md:flex-row justify-around pt-24">
        <Value
          headingText={"#1 Point of Sale"}
          img={"./svg-1.svg"}
          desc={"Ranked in 2021 leading restaurant point of sale."}
        />
        <Value
          headingText={"Always available"}
          img={"./svg-2.svg"}
          desc={"24/7 support, top-tier reliability, and full offline mode."}
        />
        <Value
          headingText={"Low-cost delivery"}
          img={"./svg-3.svg"}
          desc={"Reduce third-party delivery commissions by up to 80%."}
        />
      </div>
    </div>
  );
};

const Value = ({ headingText, desc, img }) => {
  return (
    <div className="flex flex-col items-center px-4 md:pb-0 pb-16">
      <img src={img} className="our-values-svg flex-grow" />
      <h3 className="pt-8 font-semibold text-2xl">{headingText}</h3>
      <p className="pt-4 text-center max-w-xs">{desc}</p>
    </div>
  );
};

export default OurValuesSection;
