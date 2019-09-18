import React from 'react';
import { Route, Switch, } from "react-router-dom";
import Navbar from "./components/Navbar";
import StoresForm from "./components/StoresForm";
import Stores from "./components/Stores";
import StoreView from "./components/StoreView";
import Home from "./components/Home";
import About from "./components/About";
import NoMatch from "./components/NoMatch";
import { Container, } from "semantic-ui-react";


const App = () => (
  <>
    <Navbar/>
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/stores" component={Stores} />
          <Route exact path="/stores/new" component={StoresForm} />
          <Route exact path="/stores/:id" component={StoreView} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
  </>
);


export default App;
