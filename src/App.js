import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Home, Home1, Home2, Home3 } from "./view/home";
import { Images, Icon, Sidebar } from "./components";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistore } from "./store";
import { Navbar, ButtonToggle } from "reactstrap";
import { Nav, NavItem, NavLink } from "reactstrap";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistore}>
        <BrowserRouter>
          <Navbar className="header">
            <Images />
            <div className="title">Panda</div>
            <div className="button">
              <ButtonToggle color="secondary" size="lg" disabled>
                Sign Up
              </ButtonToggle>
              {"  "}
              <ButtonToggle color="success" size="lg">
                Log In
              </ButtonToggle>{" "}
            </div>
          </Navbar>
          <div className="mainsidebardiv">
            <Sidebar />
          </div>
          {/* <Link to="/home1">Home1</Link>
          <Link to="/home2">Home2</Link> */}
          <Switch>
            <Route path="/home" component={Home} />
            {/* <Route path="/home1" component={Home1} />
            <Route path="/home2" component={Home2} /> */}
            {/* <Route path="#content1" component={Home3} /> */}
          </Switch>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};
export default App;
