
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import Header from "./components/header/navbar";
import Goals from "./pages/Goals";
import Checkin from "./pages/Checkin";
import Progress from "./pages/Progress";
import Notes from "./pages/Notes";





function App() {
  
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/goals" component={Goals}></Route>
          <Route exact path="/checkin" component={Checkin}></Route>
          <Route exact path="/progress" component={Progress}></Route>
          <Route exact path="/goals/:id" component={Notes}></Route>
        </Switch>
      
      </div>
    </Router>
  );
}

export default App;






