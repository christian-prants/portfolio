import { useEffect, useState } from "react";

import IconLightMode from '../assets/icon/light_mode.svg?react';
import IconDarkMode from '../assets/icon/dark_mode.svg?react';
import '../styles/components/themetoggle.scss';


export default function themeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";

    setTheme(savedTheme);
    document.body.classList.toggle("dark", savedTheme == "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme == "light" ? "dark" : "light";

    setTheme(newTheme);
    document.body.classList.toggle("dark", newTheme == "dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button className="btn-thm-toggle" onClick={toggleTheme}>
      { theme == "light" ? <IconDarkMode className="navbar-icon" /> : <IconLightMode className="navbar-icon" /> }
    </button>
  );
}
