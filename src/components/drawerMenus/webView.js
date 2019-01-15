import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { WebView } from "react-native-webview";
import BackButton from "./backButton";
import { Alert } from "react-native";

class RNWebView extends React.Component {
  constructor() {
    super();
  }

  state = {
    message: ""
  };

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

  onMessage = event => {
    var data = event.nativeEvent.data;
    Alert.alert(data);
  };

  render() {
    return (
      <WebView
        source={require("../../static/webview.html")}
        style={{ marginTop: 20 }}
        onMessage={this.onMessage}
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
