import React, { useContext } from "react";
import { MenuContext } from "../../context/MenuContext";

const HeroSection = () => {
  const { selected } = useContext(MenuContext);
  const showRestaurant = selected === "Restaurant" ? true : false;
  return (
    <div>
      <SectionCategory showRestaurant={showRestaurant} />
      <div className="flex lg:flex-row flex-col justify-between items-center pt-16">
        <div className="basis-3/5 invert-hero-image flex flex-col items-center lg:items-start">
          <h1 className="text-4xl text-center mt-8 lg:mt-0 lg:text-5xl lg:text-left lg:text-6xl font-extrabold tracking-wide leading-none leading-tight">
            {showRestaurant
              ? "Ultimate Restaurant Management"
              : "Customized Ordering Channels"}
          </h1>
          <p className="font-semibold pt-6 hero-text text-center lg:text-left">
            {showRestaurant
              ? "Unlock every tool you need to boost your online presence: branded apps, custom marketing, memberships, and more."
              : "Unlock every tool you need to boost your online presence: branded apps, custom marketing, memberships, and more."}
          </p>
          <button
            type="button"
            className="w-max mt-16 bg-primary outline-none px-4 text-sm lg:text-base lg:px-8 py-4 font-semibold text-white rounded-lg tracking-wide shadow-lg hover:-translate-y-1 hover:scale-105 hover:drop-shadow-xl duration-300"
          >
            Get Restaurant Management
          </button>
        </div>
        <div>
          <img
            src={showRestaurant ? "./hero-image-1.png" : "./hero-image-2.png"}
            className="hero-image hover:cursor-pointer hover:-translate-y-1 hover:scale-105 hover:drop-shadow-xl duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

const SectionCategory = ({ showRestaurant }) => {
  return (
    <div className="text-sm font-medium pt-8">
      <span>Home</span>
      <span className="px-4">/</span>
      <span className="text-primary">Products</span>
      <span className="px-4">/</span>
      <span>
        {showRestaurant ? "Restaurant Management" : "Online Ordering"}
      </span>
    </div>
  );
};
