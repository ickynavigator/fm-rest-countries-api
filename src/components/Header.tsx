import React from 'react';
import { Navbar } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface T {
  theme: `light` | `dark`;
  themeHandler: () => void;
}
// const { theme, themeHandler } = props;
const Header: React.FC<T> = () => (
  <Navbar>
    <Navbar.Brand href="/">
      <h4>Where in the world?</h4>
    </Navbar.Brand>

    {/* <div className="ms-auto">
        <span
          onClick={themeHandler}
          onKeyPress={e => {
            if (e.key === 't' || e.key === 'T') themeHandler();
          }}
          role="button"
          tabIndex={0}
        >
          <FontAwesomeIcon
            icon={theme === 'light' ? ['far', 'moon'] : ['fas', 'moon']}
          />{' '}
          Dark Mode
        </span>
      </div> */}
  </Navbar>
);

export default Header;
