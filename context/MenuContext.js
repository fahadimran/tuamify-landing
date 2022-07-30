import { createContext, useState } from "react";

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [selected, setSelected] = useState("");

  return (
    <MenuContext.Provider value={{ selected, setSelected }}>
      {children}
    </MenuContext.Provider>
  );
};
