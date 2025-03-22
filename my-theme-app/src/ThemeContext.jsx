import { createContext, useState } from "react";

// Create Context
const ThemeContext = createContext();

// Provider Component
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light"); // Default theme is light

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children} {/* This makes theme available to all children */}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
