import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { WebView } from "react-native-webview";
import BackButton from "./backButton";

class RNWebView extends React.Component {
  constructor() {
    super();
  }

  static navigationOptions = navigation => ({
    title: "WebView",
    headerLeft: <BackButton />
  });

  renderHTML = () => {
    return (
      <WebView
        originWhitelist={["*"]}
        source={{ html: "<h1>Hello world</h1>" }}
      />
    );
  };

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
    initialRouteName: "Index"
  }
);

export default createAppContainer(MyNavigator);
