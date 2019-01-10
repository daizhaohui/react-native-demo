import {
  RNWebView,
  RNCamera,
  RNAnimated,
  RNKeyboard,
  RNPanResponder
} from "../drawerMenus";

export default [
  {
    label: "webView",
    component: RNWebView
  },
  {
    label: "animated",
    component: RNAnimated
  },
  {
    label: "camera",
    component: RNCamera
  },
  {
    label: "keyboard",
    component: RNKeyboard
  },
  {
    label: "PanResponder",
    component: RNPanResponder
  }
];
