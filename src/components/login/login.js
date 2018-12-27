/**
 * @flow
 */

import React, { Component } from "react";
import { Text, TextInput, View, Button, Alert } from "react-native";
import Styles from "./style";

type Props = {};
type States = {
  userName: String,
  password: String
};
export default class Login extends Component<Props, States> {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: ""
    };
  }

  getTextChangeFunc = name => {
    return text => {
      this.setState({
        [name]: text
      });
    };
  };

  loginPress = () => {
    if (!this.state.userName || !this.state.password) {
      Alert.alert(
        "提示",
        "请输入用户名和密码!",
        ["确定"].map((title, index) => ({
          text: title,
          onPress: () => {}
        })),
        {
          cancelable: false
        }
      );
      return;
    }
  };

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.containerItem}>
          <Text style={Styles.itemTitle}> 用户名1: </Text>{" "}
          <TextInput
            style={Styles.textInputStyle}
            onChangeText={this.getTextChangeFunc("userName")}
            maxLength={30}
            placeholder="请输入用户名"
            value={this.state.userName}
            textContentType="name"
          />
        </View>{" "}
        <View style={Styles.containerItem}>
          <Text style={Styles.itemTitle}> 密码1: </Text>{" "}
          <TextInput
            style={Styles.textInputStyle}
            onChangeText={this.getTextChangeFunc("password")}
            maxLength={20}
            placeholder="请输入密码"
            value={this.state.password}
            textContentType="password"
          />
        </View>{" "}
        <View style={Styles.containerButtonItem}>
          <Button
            title="登  录"
            accessibilityLabel="登录"
            onPress={this.loginPress}
          />{" "}
        </View>{" "}
      </View>
    );
  }
}
