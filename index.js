/** @format */

import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import { Provider } from "react-redux";
import RootReducer from "./src/reducers";
import { createStore, applyMiddleware } from "redux";
import Thunk from "redux-thunk";

const store = createStore(RootReducer, applyMiddleware(Thunk));

AppRegistry.registerComponent(appName, () => (
  <Provider store={store}>
    <App />
  </Provider>
));
