import React from "react";
import { View, PanResponder, StyleSheet, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import BackButton from "./backButton";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "red",
    fontSize: 16
  }
});

class RNPanResponder extends React.Component {
  constructor(props) {
    super(props);
    this._panResponder = PanResponder.create({
      // 用户开始触摸屏幕的时候，是否愿意成为响应者，默认返回false，当返回true的时候则可以进行之后的事件传递
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      //在每一个触摸点开始移动的时候，再询问一次是否响应触摸交互；
      onMoveShouldSetPanResponder: (e, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (e, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      //开始手势操作，也就是说按下去给用户一些视觉反馈(如可以改变颜色)
      onPanResponderGrant: (evt, gestureState) => {
        // The gesture has started. Show visual feedback so the user knows
        // what is happening!
        // gestureState.d{x,y} will be set to zero now
        this.setState({
          info: "grant"
        });
      },
      onPanResponderStart: (e, gestureState) => {
        this.setState({
          info: "start"
        });
      },
      onPanResponderReject: (e, gestureState) => {
        this.setState({
          info: "reject"
        });
      },
      onPanResponderMove: (evt, gestureState) => {
        // The most recent move distance is gestureState.move{X,Y}
        // The accumulated gesture distance since becoming responder is
        // gestureState.d{x,y}
        this.setState({
          info: "move"
        });
      },
      onPanResponderEnd: (e, gestureState) => {
        this.setState({
          info: "end"
        });
      },
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      //用户放开所有触点，且此时视图已经成为了响应者。
      onPanResponderRelease: (evt, gestureState) => {
        // The user has released all touches while this view is the
        // responder. This typically means a gesture has succeeded
        this.setState({ info: "release" });
      },
      //另一个组件已经成为了新的响应者，所以当前手势将被取消
      onPanResponderTerminate: (evt, gestureState) => {
        // Another component has become the responder, so this gesture
        // should be cancelled
        this.setState({ info: "terminate" });
      },
      // 返回一个布尔值，决定当前组件是否应该阻止原生组件成为JS响应者
      onShouldBlockNativeResponder: (evt, gestureState) => {
        // Returns whether this component should block native components from becoming the JS
        // responder. Returns true by default. Is currently only supported on android.
        return true;
      }
    });
  }

  state = {
    info: "none"
  };

  static navigationOptions = navigation => ({
    title: "Keyboard",
    headerLeft: <BackButton />
  });

  componentDidMount() {}

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
        <View
          style={{ width: 200, height: 200, backgroundColor: "blue" }}
          {...this._panResponder.panHandlers}
        />
      </View>
    );
  }
}

const MyNavigator = createStackNavigator(
  {
    Index: {
      screen: RNPanResponder
    }
  },
  {
    initialRouteName: "Index"
  }
);

export default createAppContainer(MyNavigator);
