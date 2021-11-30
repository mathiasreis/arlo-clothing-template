import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
// import Home from './pages/Home';
import Routes from './Routes';

import GlobalStyles from './styles/global'

const App = () => {
  return (
    <BrowserRouter>
    <GlobalStyles />
    <Header />
    {/* <Home /> */}
    <Routes />
    </BrowserRouter>
  );
}

export default App;
