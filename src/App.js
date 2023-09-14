import React, { Component } from "react";
import VideoContextProvider from "./context/VideoContext";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Item from "./components/Item";
import Search from "./components/Search";
import NotFound from "./components/NotFound";

class App extends Component {
  // Prevent page reload, clear input, set URL and push history on submit
  handleSubmit = (e, history, searchInput) => {
    e.preventDefault();
    e.currentTarget.reset();
    let url = `/search/${searchInput}`;
    history.push(url);
  };

  render() {
    return (
      <VideoContextProvider>
        <HashRouter basename="/VideoScout">
          <div className="container">
            <Route
              render={props => (
                <Header
                  handleSubmit={this.handleSubmit}
                  history={props.history}
                />
              )}
            />
            <Switch>
              <Route
                exact
                path="/"
                render={() => <Redirect to="/COSTV" />}
              />

              <Route
                path="/COSTV"
                render={() => <Item searchTerm="COS.TV" />}
              />
              <Route path="/BTC" render={() => <Item searchTerm="BTC Trend" />} />
              <Route path="/AI" render={() => <Item searchTerm="AI" />} />
              <Route path="/Expo" render={() => <Item searchTerm="Expo" />} />
              <Route
                path="/search/:searchInput"
                render={props => (
                  <Search searchTerm={props.match.params.searchInput} />
                )}
              />
              <Route component={NotFound} />
            </Switch>
          </div>
        </HashRouter>
      </VideoContextProvider>
    );
  }
}

export default App;
