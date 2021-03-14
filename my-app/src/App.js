import React  from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/footer";
import Header from "./components/header/navbar";
import Progress from "./pages/Progress";
import Resources from "./pages/Resources";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/Resources" component={Resources}></Route>
          <Route exact path="/progress" component={Progress}></Route>
        </Switch>
        <Footer /> 
      </div>
      
    </Router>
  );
}

export default App;
