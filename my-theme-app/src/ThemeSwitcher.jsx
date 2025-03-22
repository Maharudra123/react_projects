import { useContext } from "react";
import { ThemeContext } from "./ThemeContext"; // Import Context

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext); // Get theme state

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {/* Themed Section (Box/Card) */}
      <div
        style={{
          width: "300px",
          padding: "20px",
          borderRadius: "10px",
          textAlign: "center",
          backgroundColor: theme === "dark" ? "#333" : "#f9f9f9",
          color: theme === "dark" ? "#fff" : "#000",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2>Current Theme: {theme}</h2>
        <button
          onClick={toggleTheme}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            marginTop: "10px",
            cursor: "pointer",
            border: "none",
            borderRadius: "5px",
            backgroundColor: theme === "dark" ? "#555" : "#ddd",
            color: theme === "dark" ? "#fff" : "#000",
          }}
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
