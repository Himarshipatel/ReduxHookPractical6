import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./view/home";
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
              </div>
            </Switch>
          </div>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};
export default App;
