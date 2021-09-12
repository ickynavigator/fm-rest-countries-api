import { useState, Fragment } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

// components
import Header from "./components/Header";

// Screens
import CountryScreen from "./screens/CountryScreen";
import HomeScreen from "./screens/HomeScreen";
import NotFoundScreen from "./screens/NotFoundScreen";

library.add(fas, far);
function App() {
  const [theme, setTheme] = useState<`light` | `dark`>(
    window.matchMedia("(prefers-color-scheme: light)").matches
      ? `light`
      : `dark`
  );
  window
    .matchMedia("(prefers-color-scheme: light)")
    .addEventListener("change", (e) => setTheme(e.matches ? `light` : `dark`));

  const themeHandler = () => {
    if (theme === `light`) setTheme(`dark`);
    else setTheme(`light`);
  };
  return (
    <>
      <Router>
        <Container fluid className={`m-0 p-0 mainWrapper ${theme}`}>
          <Container fluid className={`shadow-sm ps-5 pe-5 py-2`} as={`header`}>
            <Header theme={theme} themeHandler={themeHandler} />
          </Container>

          <Container fluid className={`ps-5 pe-5 h-100`}>
            <Switch>
              {/* Home Screen */}
              <Route path={`/country/:id`} component={CountryScreen} exact />

              {/* Home Screen */}
              <Route path={`/`} component={HomeScreen} exact />

              {/* 404 page */}
              <Route component={NotFoundScreen} />
            </Switch>
          </Container>
        </Container>
      </Router>
    </>
  );
}

export default App;
