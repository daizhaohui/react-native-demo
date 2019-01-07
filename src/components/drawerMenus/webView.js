import React from "react";
import { View, Text, Button, DeviceEventEmitter } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { EVENTS } from "../../consts";
import { WebView } from "react-native-webview";

class RNWebView extends React.Component {
  constructor() {
    super();
  }

  static navigationOptions = navigation => ({
    title: "WebView",
    headerLeft: (
      <Button
        onPress={() => {
          DeviceEventEmitter.emit(EVENTS.CLOSE_DRAWER_MENU_DIALOG);
        }}
        title="back"
        color="blue"
      />
    )
  });

  render() {
    return (
      <WebView
        source={{ uri: "https://infinite.red/react-native" }}
        style={{ marginTop: 20 }}
        onLoadProgress={e => console.log(e.nativeEvent.progress)}
      />
    );
  }
}

const MyNavigator = createStackNavigator(
  {
    Index: {
      screen: RNWebView
    }
  },
  {
    initialRouteName: "Index",
    mode: "modal"
  }
);

export default createAppContainer(MyNavigator);
