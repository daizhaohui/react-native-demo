/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  AppRegistry,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
  Button
} from "react-native";
import Login from "./src/components/login";
import CodePush from "react-native-code-push";
import { createStackNavigator, createAppContainer } from "react-navigation";
import MainScreen from "./src/components/main";
import DrawerMenu from "./src/components/main/drawerMenu";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  image: {
    margin: 30,
    width: Dimensions.get("window").width - 100,
    height: (365 * (Dimensions.get("window").width - 100)) / 651
  },
  messages: {
    marginTop: 30,
    textAlign: "center"
  },
  restartToggleButton: {
    color: "blue",
    fontSize: 17
  },
  syncButton: {
    color: "green",
    fontSize: 17
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 20
  }
});

type Props = {};

class AppEntry extends Component<Props> {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "登录",
      headerRight: (
        <Button
          onPress={() => alert("This is a button!")}
          title="Info"
          color="blue"
        />
      ),
      headerLeft: null
    };
  };

  constructor() {
    super();
    this.state = {
      restartAllowed: true
    };
  }

  codePushStatusDidChange(syncStatus) {
    switch (syncStatus) {
      case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
        this.setState({ syncMessage: "Checking for update." });
        break;
      case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
        this.setState({ syncMessage: "Downloading package." });
        break;
      case CodePush.SyncStatus.AWAITING_USER_ACTION:
        this.setState({ syncMessage: "Awaiting user action." });
        break;
      case CodePush.SyncStatus.INSTALLING_UPDATE:
        this.setState({ syncMessage: "Installing update." });
        break;
      case CodePush.SyncStatus.UP_TO_DATE:
        this.setState({ syncMessage: "App up to date.", progress: false });
        break;
      case CodePush.SyncStatus.UPDATE_IGNORED:
        this.setState({
          syncMessage: "Update cancelled by user.",
          progress: false
        });
        break;
      case CodePush.SyncStatus.UPDATE_INSTALLED:
        this.setState({
          syncMessage: "Update installed and will be applied on restart.",
          progress: false
        });
        break;
      case CodePush.SyncStatus.UNKNOWN_ERROR:
        this.setState({
          syncMessage: "An unknown error occurred.",
          progress: false
        });
        break;
    }
  }

  codePushDownloadDidProgress(progress) {
    this.setState({ progress });
  }

  toggleAllowRestart() {
    this.state.restartAllowed
      ? CodePush.disallowRestart()
      : CodePush.allowRestart();

    this.setState({ restartAllowed: !this.state.restartAllowed });
  }

  getUpdateMetadata() {
    CodePush.getUpdateMetadata(CodePush.UpdateState.RUNNING).then(
      metadata => {
        this.setState({
          syncMessage: metadata
            ? JSON.stringify(metadata)
            : "Running binary version",
          progress: false
        });
      },
      error => {
        this.setState({ syncMessage: "Error: " + error, progress: false });
      }
    );
  }

  /** Update is downloaded silently, and applied on restart (recommended) */
  sync() {
    CodePush.sync(
      {},
      this.codePushStatusDidChange.bind(this),
      this.codePushDownloadDidProgress.bind(this)
    );
  }

  /** Update pops a confirmation dialog, and then immediately reboots the app */
  syncImmediate() {
    CodePush.sync(
      {
        installMode: CodePush.InstallMode.IMMEDIATE,
        updateDialog: {
          appendReleaseDescription: true,
          descriptionPrefix: "更新内容:",
          mandatoryContinueButtonLabel: "更新",
          mandatoryUpdateMessage: "有新版本了，请您及时更新",
          optionalInstallButtonLabel: "立即更新",
          optionalIgnoreButtonLabel: "稍后",
          optionalUpdateMessage: "有新版本了，是否更新？",
          title: "提示"
        }
      },
      this.codePushStatusDidChange.bind(this),
      this.codePushDownloadDidProgress.bind(this)
    );
  }

  componentDidMount() {}

  render() {
    let progressView;
    if (this.state.progress) {
      progressView = (
        <Text style={styles.messages}>
          {this.state.progress.receivedBytes} of
          {this.state.progress.totalBytes} bytes received
        </Text>
      );
    }

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Here!</Text>
        <TouchableOpacity onPress={this.sync.bind(this)}>
          <Text style={styles.syncButton}>Press for background sync</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.syncImmediate.bind(this)}>
          <Text style={styles.syncButton}>Press for dialog-driven sync</Text>
        </TouchableOpacity>
        {progressView}
        <Image
          style={styles.image}
          resizeMode={"contain"}
          source={require("./images/laptop_phone_howitworks.png")}
        />
        <TouchableOpacity onPress={this.toggleAllowRestart.bind(this)}>
          <Text style={styles.restartToggleButton}>
            Restart {this.state.restartAllowed ? "allowed" : "forbidden"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.getUpdateMetadata.bind(this)}>
          <Text style={styles.syncButton}>Press for Update Metadata</Text>
        </TouchableOpacity>
        <Text style={styles.messages}>{this.state.syncMessage || ""}</Text>
        <Login navigation={this.props.navigation} />
      </View>
    );
  }
}

/**
 * Configured with a MANUAL check frequency for easy testing. For production apps, it is recommended to configure a
 * different check frequency, such as ON_APP_START, for a 'hands-off' approach where CodePush.sync() does not
 * need to be explicitly called. All options of CodePush.sync() are also available in this decorator.
 */
let codePushOptions = { checkFrequency: CodePush.CheckFrequency.MANUAL };
//IOS 实现了热更新
if (Platform.OS === "ios") {
  AppEntry = CodePush(codePushOptions)(AppEntry);
}

const AppNavigator = createStackNavigator(
  {
    AppEntry: {
      screen: AppEntry
    },
    Main: {
      screen: MainScreen
    },
    Drawer: {
      screen: DrawerMenu
    }
  },
  {
    initialRouteName: "AppEntry",
    headerMode: "none"
  }
);

export default createAppContainer(AppNavigator);
