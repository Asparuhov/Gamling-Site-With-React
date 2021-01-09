import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./store/reducer";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Auth0Provider
    domain="dev-d9p0dwjr.eu.auth0.com"
    clientId="X0bBp2B5jZthFGeWQvTA8bd5Nt2Dr8hF"
    redirectUri={window.location.origin}
  >
    <Provider store={store}>
      <App />
    </Provider>
  </Auth0Provider>,
  document.getElementById("root")
);
