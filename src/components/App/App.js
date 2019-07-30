import React from "react";
import Header from "../elements/Header/Header";
import Home from "../Home/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "../elements/NotFound/NotFound";
import Movie from "../Movie/Movie";

const App = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:movieId" exact component={Movie} />
          <Route component={NotFound} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
};

export default App;
