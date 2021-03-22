import React from 'react';
import './styles.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter} from "react-router-dom";
import Home from "./components/Home/Home";
import {Route} from "react-router";

const App = () => (
  <div>
      <BrowserRouter>
          <Navbar/>
          <div className='home'>
              <Route path='/' render={() => <Home/>}/>
          </div>
      </BrowserRouter>
  </div>
);

export default App;
