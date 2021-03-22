import React from 'react';
import './styles.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter} from "react-router-dom";
import Home from "./components/Home/Home";
import {Route, Switch} from "react-router";
import Cart from './components/Cart/Cart';
import OneProduct from './components/Home/OneProduct';

const App = () => (
  <div>
      <BrowserRouter>
          <Navbar/>
          <div className='home'>
            <Switch>
              <Route path='/product/:id' render={ (props) => <OneProduct {...props}/> }/>
              <Route path='/cart' component={Cart}/>
              <Route path='/' component={Home}/>
            </Switch>
          </div>
      </BrowserRouter>
  </div>
);

export default App;
