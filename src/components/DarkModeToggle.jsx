import { useState, useEffect } from "react";
import { MoonIcon, SunDim } from "lucide-react";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <nav className="flex justify-end ">
      <button
        onClick={toggleDarkMode}
        aria-label="Toggle dark mode"
        className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300"
      >
        {isDarkMode ? (
          <SunDim size={24} color="white" />
        ) : (
          <MoonIcon size={24} color="black" />
        )}
      </button>
    </nav>
  );
};

export default DarkModeToggle;
