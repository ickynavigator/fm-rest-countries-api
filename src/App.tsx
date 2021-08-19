import { useState } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import Header from "./components/Header";

// Screens
import CountryScreen from "./screens/CountryScreen";
import HomeScreen from "./screens/HomeScreen";
import NotFoundScreen from "./screens/NotFoundScreen";

function App() {
  const [darkMode, setdarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => setdarkMode(e.matches));

  const darkModeHandler = () => setdarkMode(!darkMode);
  return (
    <>
      <Router>
        <Container fluid className="shadow-sm ps-5 pe-5 pt-2 pb-2">
          <Header mode={darkMode} modeHandler={darkModeHandler} />
        </Container>

        <Container fluid className="ps-5 pe-5 h-100">
          <Switch>
            {/* Home Screen */}
            <Route path="/country/:id" component={CountryScreen} exact />

            {/* Home Screen */}
            <Route path="/" component={HomeScreen} exact />

            {/* 404 page */}
            <Route component={NotFoundScreen} />
          </Switch>
        </Container>
      </Router>
    </>
  );
}

export default App;
