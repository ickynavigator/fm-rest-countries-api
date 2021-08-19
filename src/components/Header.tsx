import { Navbar } from "react-bootstrap";

interface T {
  mode: boolean;
  modeHandler: () => void;
}
const Header: React.FC<T> = (props) => {
  const { mode, modeHandler } = props;

  return (
    <Navbar>
      <Navbar.Brand href="/">Where in the world?</Navbar.Brand>

      <div className="ms-auto">
        <span onClick={modeHandler}>Dark Mode: {mode ? "true" : "false"}</span>
      </div>
    </Navbar>
  );
};

export default Header;
