import React, { Component } from 'react';
import { Route, Router, Switch } from "react-router-dom";
import logo from './logo.svg';

//create browser history
import History from './Pages/History/History.js'

//components
import Header from './Components/Header/Header.js';
import Footer from './Components/Footer/Footer.js';

// pages
import Home from './Pages/Home/Home.js';
import About from './Pages/About/About.js';
import Contact from './Pages/Contact/Contact.js';
import NotFound from './Pages/NotFound/NotFound.js';


class App extends Component {
  render() {
    return (
      <Router  history={History}>
      <div className="App">
          <Header></Header>
            
              <Switch>
                <Route exact path="/" render={props =><Home/>} />
                <Route exact path="/About" render={props =><About/>} />
                <Route exact path="/Contact" render={props =><Contact/>} />
                <Route render={props =><NotFound/>}/>
              </Switch>
            
          <Footer></Footer>
     </div>
   </Router>
    );
  }
}

export default App;
