import {Route, Routes} from "react-router-dom";
import {publicRoutes} from "./routes";
import './styles/GlobalStyle/output.css';
import React from 'react';
import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
      <div>
          <ScrollToTop />
          <Routes>
              {publicRoutes.map((route, index) => {
                  return (
                      <Route key={index} path={route.path} element={route.component}/>
                  )
              })}
          </Routes>
      </div>
  );
}

export default App;
