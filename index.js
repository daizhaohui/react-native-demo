/** @format */

import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import { Provider } from "react-redux";
import RootReducer from "./src/reducers";
import { createStore } from "redux";

const store = createStore(RootReducer);

AppRegistry.registerComponent(appName, () => (
  <Provider store={Storage}>
    <App />
  </Provider>
));
