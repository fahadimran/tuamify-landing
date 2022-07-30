import React, { useContext } from "react";
import { Menu } from "@headlessui/react";
import { MenuContext } from "../../context/MenuContext";

const Navbar = () => {
  const { setSelected, selected } = useContext(MenuContext);
  const isRestaurant = selected === "Restaurant" ? true : false;
  const isOrder = selected === "Ordering" ? true : false;

  return (
    <div className="flex items-center py-6">
      <div className="pr-8">
        <img src="/nav-brand.png" className="nav-brand" />
      </div>

      <div className="flex flex-grow font-medium text-sm md:inline-flex hidden">
        <p className="px-3 cursor-pointer py-2 hover:bg-slate-50 hover:rounded-md">
          Home
        </p>
        <Menu>
          <Menu.Button className="outline-none px-3 cursor-pointer font-medium flex items-center py-2 hover:bg-slate-50 hover:rounded-md">
            Products
            <img src="./angle-down-solid.svg" width={10} className="ml-2" />
          </Menu.Button>
          <Menu.Items
            className={
              "absolute mt-8 pt-6 pb-4 flex flex-col ml-16 pt-2 bg-gray-50 rounded-md shadow-md"
            }
          >
            <Menu.Item
              className={`py-3 px-4 hover:bg-gray-100 hover:cursor-pointer ${
                isRestaurant ? "bg-gray-200 rounded-md hover:bg-gray-300" : ""
              }`}
            >
              <span onClick={() => setSelected("Restaurant")}>
                Restaurant Management
              </span>
            </Menu.Item>
            <Menu.Item
              className={`py-3 px-4 hover:bg-gray-100 hover:cursor-pointer ${
                isOrder ? "bg-gray-200 rounded-md hover:bg-gray-300" : ""
              }`}
            >
              <span onClick={() => setSelected("Ordering")}>
                Ordering Channels
              </span>
            </Menu.Item>
          </Menu.Items>
        </Menu>
        <p className="px-3 py-2 cursor-pointer hover:bg-slate-50 hover:rounded-md">
          Pricing
        </p>
        <p className="px-3 py-2 cursor-pointer hover:bg-slate-50 hover:rounded-md">
          About Us
        </p>
        <p className="px-3 py-2 cursor-pointer hover:bg-slate-50 hover:rounded-md">
          Contact
        </p>
      </div>

      <div className="md:inline-flex hidden">
        <button
          type="button"
          className="bg-primary outline-none rounded-md px-4 py-2 font-semibold text-white text-sm tracking-wide shadow-lg hover:-translate-y-1 hover:scale-105 hover:drop-shadow-xl duration-300"
        >
          Request a Demo
        </button>
      </div>
    </div>
  );
};

export default Navbar;
