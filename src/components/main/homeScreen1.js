import React from "react";
import { StyleSheet, Button, View, Text, Modal } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

//this.props.navigation.navigate("Drawer")

class Home extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Home",
    headerLeft: (
      <Button
        onPress={() => {
          navigation.openDrawer();
        }}
        title="Draw"
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
