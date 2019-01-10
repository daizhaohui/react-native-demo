import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  DeviceEventEmitter
} from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { EVENTS } from "../../consts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

class Settings extends React.Component {
  static navigationOptions = {
    title: "Settings",
    headerLeft: null,
    headerRight: (
      <Button
        onPress={() => alert("This is a button!")}
        title="Info"
        color="blue"
        accessibilityLabel="info button"
      />
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Settings!</Text>
        <Button
          onPress={() => {
            DeviceEventEmitter.emit(EVENTS.LOGOUT);
          }}
          title="退出"
          color="blue"
        />
      </View>
    );
  }
}

const MyNavigator = createStackNavigator(
  {
    Settings: {
      screen: Settings
    }
  },
  {
    initialRouteName: "Settings"
  }
);

export default createAppContainer(MyNavigator);
