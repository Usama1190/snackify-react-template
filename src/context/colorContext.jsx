import { createContext, useContext, useState } from "react";

const ColorContext = createContext();

const storeColor = {
  darkColor: '#F5C83D',
  lightColor: '#FAE39E'
}

export const useColor = () => useContext(ColorContext);

export const ColorProvider = ({ children }) => {
  const [selectedColor, setSelectedColor] = useState(storeColor);

  return (
    <ColorContext.Provider value={{ selectedColor, setSelectedColor }}>
      {children}
    </ColorContext.Provider>
  );
};
