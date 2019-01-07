import React from "react";
import {
  StyleSheet,
  Button,
  View,
  Text,
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

//this.props.navigation.navigate("Drawer")

class Home extends React.Component {
  static navigationOptions = navigation => ({
    title: "Home",
    headerLeft: (
      <Button
        onPress={() => {
          DeviceEventEmitter.emit(EVENTS.OPEN_DRAWER_MENUS);
        }}
        title="Menus"
        color="blue"
      />
    ),
    headerRight: (
      <Button
        onPress={() => alert("This is a button!")}
        title="Info"
        color="blue"
      />
    )
  });

  render() {
    return (
      <View style={styles.container}>
        <Text>Home!</Text>
      </View>
    );
  }
}

const MyNavigator = createStackNavigator(
  {
    Home: {
      screen: Home
    }
  },
  {
    initialRouteName: "Home"
  }
);
export default createAppContainer(MyNavigator);
