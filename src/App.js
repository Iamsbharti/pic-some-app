import React from "react";
import { Route, Switch } from "react-router-dom";
import Photos from "./pages/Photos";
import Cart from "./pages/Cart";
import Header from "./component/Header";
import "./styles.css";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Photos} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </div>
  );
}

export default App;
