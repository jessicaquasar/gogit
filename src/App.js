import React, { Fragment } from 'react';

import GlobalStyle from './styles/index';

// import './styles/index';

import Main from './pages/Main';

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Main />
  </Fragment>
);

export default App;
