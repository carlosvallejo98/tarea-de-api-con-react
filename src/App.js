import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Products from './pages/Products';
import { ThemeProvider } from "styled-components";
import Theme from "./components/theme";
import GlobalStyles from "./components/theme/GlobalStyles.js";
import './app.css'




function App () {
  return(

  <ThemeProvider theme={Theme}>
     <GlobalStyles/>
     <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  </ThemeProvider>
  )
};


export default App
