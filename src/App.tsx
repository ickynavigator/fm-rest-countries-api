// import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import Header from "./components/Header";

// Screens
import CountryScreen from "./screens/CountryScreen";
import HomeScreen from "./screens/HomeScreen";
import NotFoundScreen from "./screens/NotFoundScreen";

function App() {
  return (
    <>
      <Router>
        <Header />

        <Switch>
          {/* Home Screen */}
          <Route path="/country/:id" component={CountryScreen} exact />

          {/* Home Screen */}
          <Route path="/" component={HomeScreen} exact />

          {/* 404 page */}
          <Route component={NotFoundScreen} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
