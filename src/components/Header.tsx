import { Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface T {
  theme: `light` | `dark`;
  themeHandler: () => void;
}
const Header: React.FC<T> = (props) => {
  const { theme, themeHandler } = props;

  return (
    <Navbar>
      <Navbar.Brand href="/">Where in the world?</Navbar.Brand>

      <div className="ms-auto">
        <span onClick={themeHandler}>
          <FontAwesomeIcon
            icon={theme === "light" ? ["far", "moon"] : ["fas", "moon"]}
          />{" "}
          Dark Mode
        </span>
      </div>
    </Navbar>
  );
};

export default Header;
