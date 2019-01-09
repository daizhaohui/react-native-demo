import React from "react";
import { View, TextInput, Keyboard, StyleSheet, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import BackButton from "./backButton";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textInputStyle: {
    height: 40,
    width: 200,
    borderWidth: 1,
    marginTop: 100
  },
  text: {
    color: "red",
    fontSize: 16
  }
});

class RNKeyboard extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    info: ""
  };

  static navigationOptions = navigation => ({
    title: "Keyboard",
    headerLeft: <BackButton />
  });

  _keyboardDidShow = () => {
    //alert("Keyboard Shown");
    this.setState({ info: "Keyboard Shown" });
  };

  _keyboardDidHide = () => {
    //alert("Keyboard Hidden");
    this.setState({ info: "Keyboard Hidden" });
  };

  componentDidMount() {
    // keyboardWillShow
    // keyboardDidShow
    // keyboardWillHide
    // keyboardDidHide
    // keyboardWillChangeFrame
    // keyboardDidChangeFrame
    this.keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      this._keyboardDidShow
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      this._keyboardDidHide
    );
  }

  componentWillUnMount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  render() {
    return (
      <View sytle={Styles.container}>
        <View>
          <Text style={Styles.text}>{this.state.info}</Text>
        </View>
        <View>
          <TextInput
            style={Styles.textInputStyle}
            placeholder="请输入内容"
            textContentType="name"
          />
        </View>
      </View>
    );
  }
}

const MyNavigator = createStackNavigator(
  {
    Index: {
      screen: RNKeyboard
    }
  },
  {
    initialRouteName: "Index"
  }
);

export default createAppContainer(MyNavigator);
