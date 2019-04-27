import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Home from "./pages/home";
import AddWalk from "./pages/addWalk";
import Walks from "./pages/walks";

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Header title="amble" />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/addWalk" component={AddWalk} />
            <Route path="/walks" component={Walks} />
          </Switch>
        </BrowserRouter>
      </div>
    );
    return <App />;
  }
}

export default App;
