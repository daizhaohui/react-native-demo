import React from "react";
import {
  View,
  Animated,
  Text,
  NativeModules,
  TouchableOpacity,
  LayoutAnimation,
  Easing
} from "react-native";
import BackButton from "./backButton";

const { UIManager } = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

class LayoutAnimatedView extends React.Component {
  constructor() {
    super();
  }

  _onPress = () => {
    // Animate the update
    LayoutAnimation.spring();
    this.setState({ w: this.state.w + 15, h: this.state.h + 15 });
  };

  state = {
    w: 100,
    h: 100
  };

  render() {
    return (
      <View
        style={{
          width: this.state.w,
          height: this.state.h,
          backgroundColor: "red"
        }}
      >
        <TouchableOpacity onPress={this._onPress}>
          <View
            style={{
              backgroundColor: "black",
              paddingHorizontal: 20,
              paddingVertical: 15,
              marginTop: 15
            }}
          >
            》<Text style={{ color: "#fff" }}>Press me!</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

class FadeInView extends React.Component {
  constructor() {
    super();
  }

  state = {
    fadeAnim: new Animated.Value(0)
  };

  componentDidMount() {
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 9000,
      easing: Easing.linear
    }).start();
  }

  render() {
    let { fadeAnim } = this.state;
    return (
      <Animated.View
        style={{
          ...this.props.style,
          opacity: fadeAnim
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

export default class RNAnimatedView extends React.Component {
  constructor() {
    super();
  }

  state = {
    fadeAnim: new Animated.Value(0)
  };

  componentDidMount() {
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 9000,
      easing: Easing.linear
    }).start();
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <BackButton />
        <FadeInView
          style={{ width: 250, height: 50, backgroundColor: "powderblue" }}
        >
          <Text style={{ fontSize: 28, textAlign: "center", margin: 10 }}>
            Fading in
          </Text>
        </FadeInView>
        <LayoutAnimatedView />
      </View>
    );
  }
}
