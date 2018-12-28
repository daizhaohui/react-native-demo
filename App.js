/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, AppState } from "react-native";
import Login from "./src/components/login";
import codePush from "react-native-code-push";

type Props = {};
export default class App extends Component<Props> {
  componentDidMount() {
    codePush.sync({
      updateDialog: true,
      installMode: codePush.InstallMode.IMMEDIATE
    });

    // AppState.addEventListener("change", newState => {
    //   newState === "active" && codePush.sync();
    // });

    // 第一种:
    //codePush.sync();

    // // 第二种:
    // codePush.sync({
    //   updateDialog: false,
    //   installMode: codePush.InstallMode.IMMEDIATE
    // });

    // 第三种:
    // CodePush.sync({
    //   deploymentKey: 'deployment-key-here',
    //   updateDialog: {
    //     optionalIgnoreButtonLabel: '稍后',
    //     optionalInstallButtonLabel: '后台更新',
    //     optionalUpdateMessage: '有新版本了，是否更新？',
    //     title: '更新提示'
    //   },
    //   installMode: CodePush.InstallMode.IMMEDIATE
    // });

    // 三种更新的策略: 配置到installMode: 之后即可生效 *
    //   IMMEDIATE 立即更新APP *
    //   ON_NEXT_RESTART 到下一次启动应用时 *
    //   ON_NEXT_RESUME 当应用从后台返回时
  }

  render() {
    return (
      <View style={styles.container}>
        <Login />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
