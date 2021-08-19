import { useEffect, useState } from "react";
import { Navbar } from "react-bootstrap";

const Header = () => {
  const [darkMode, setdarkMode] = useState(false);
  const darkModeHandler = () => {
    setdarkMode(!darkMode);
  };

  useEffect(() => {
    const userPrefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    const userPrefersLight =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches;

    console.log({ dark: userPrefersDark, light: userPrefersLight });
  });

  return (
    <Navbar>
      <Navbar.Brand href="/">Where in the world?</Navbar.Brand>
      dark mode: {String(darkMode)}
      <div className="ms-auto">
        <span onClick={darkModeHandler}>Dark Mode</span>
      </div>
    </Navbar>
  );
};

export default Header;
