import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  Home,
  Australia,
  Canada,
  Usa,
  Germany,
  China,
  Italy,
  Hongkong,
  Malaysia,
  Singapore,
  Uk,
  Argentina,
  Mexicoo,
} from "./view/home";
import { Sidebar, Header } from "./components";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistore } from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistore}>
        <BrowserRouter>
          <Header />
          <div className="main">
            <div className="mainsidebardiv">
              <Sidebar />
            </div>

            <Switch>
              <div className="apii">
                <Route path="/country/:id">
                  <Home />
                </Route>
                {/* <Route path="/india" component={Home} /> */}
                <Route path="/australia" component={Australia} />
                <Route path="/canada" component={Canada} />
                <Route path="/usa" component={Usa} />
                <Route path="/germany" component={Germany} />
                <Route path="/china" component={China} />
                <Route path="/italy" component={Italy} />
                <Route path="/hongkong" component={Hongkong} />
                <Route path="/malaysia" component={Malaysia} />
                <Route path="/singapore" component={Singapore} />
                <Route path="/uk" component={Uk} />
                <Route path="/argentina" component={Argentina} />
                <Route path="/mexico" component={Mexicoo} />
              </div>
            </Switch>
          </div>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};
export default App;
