import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

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
      />
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Settings!</Text>
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
