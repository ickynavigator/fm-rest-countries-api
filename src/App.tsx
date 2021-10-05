import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

// components
import Header from './components/Header';

// Screens
import CountryScreen from './screens/CountryScreen';
import HomeScreen from './screens/HomeScreen';
import NotFoundScreen from './screens/NotFoundScreen';

library.add(fas, far);
function App() {
  const [theme, setTheme] = useState<`light` | `dark`>(
    window.matchMedia('(prefers-color-scheme: light)').matches
      ? `light`
      : `dark`,
  );
  // const [theme, setTheme] = useState<`light` | `dark`>(`light`);
  // localStorage.setItem('currentTheme', theme);

  window
    .matchMedia('(prefers-color-scheme: light)')
    .addEventListener('change', e => {
      setTheme(e.matches ? `light` : `dark`);
    });

  const themeHandler = () => {
    if (theme === `light`) setTheme(`dark`);
    else setTheme(`light`);

    localStorage.setItem('currentTheme', theme);
  };

  useEffect(() => {
    localStorage.setItem('currentTheme', theme);
    document.body.classList.remove(...['light', 'dark']);
    document.body.classList.add(theme);
  }, [theme]);

  // useEffect(() => {
  //   const currentTheme = localStorage.getItem('currentTheme');
  //   if (currentTheme === 'light' || currentTheme === 'dark')
  //     setTheme(currentTheme);
  // }, []);
  return (
    <>
      <Router>
        <Container fluid className="m-0 p-0 mainWrapper h-100">
          <Container fluid className="shadow-sm m-0 px-sm-5 py-2" as="header">
            <Header theme={theme} themeHandler={themeHandler} />
          </Container>

          <Container fluid className="p-5 px-3 p-md-5">
            <Switch>
              {/* Home Screen */}
              <Route path="/country/:id" component={CountryScreen} exact />

              {/* Home Screen */}
              <Route path="/" component={HomeScreen} exact />

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
