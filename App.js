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
    //codePush.sync();
    AppState.addEventListener("change", newState => {
      newState === "active" && codePush.sync();
    });
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
