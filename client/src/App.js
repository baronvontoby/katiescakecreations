import React, { Component } from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import MainPage from "./pages/MainPage";
import PricingPage from "./pages/PricingPage";
import CakeForm from "./pages/CakeForm";

class App extends Component {
  render() {
    return (
      <div className="App">        
        <BrowserRouter>
        <NavBar></NavBar>
          <Switch>
            <Route exact path='/' component={() => <MainPage />}></Route>
            <Route exact path='/pricing' component={() => <PricingPage />} ></Route>
            <Route exact path='/create' component={() => <CakeForm />} ></Route>      
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
