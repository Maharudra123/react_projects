import { ThemeProvider } from "./ThemeContext"; // Import Provider
import ThemeSwitcher from "./ThemeSwitcher"; // Import ThemeSwitcher

const App = () => {
  return (
    <ThemeProvider>
      <ThemeSwitcher />
    </ThemeProvider>
  );
};

export default App;
