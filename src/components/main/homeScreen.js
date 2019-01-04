import React from "react";
import { StyleSheet, Button, View, Text, ScrollView } from "react-native";
import {
  createDrawerNavigator,
  createAppContainer,
  SafeAreaView,
  DrawerItems
} from "react-navigation";

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
    drawerLabel: ""
  });

  render() {
    return (
      <View style={styles.container}>
        <Text>Home!</Text>
      </View>
    );
  }
}

const CustomDrawerContentComponent = props => (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: "always", horizontal: "never" }}
    >
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const MyDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: Home
    }
  },
  {
    initialRouteName: "Home",
    contentComponent: CustomDrawerContentComponent,
    drawerPosition: "left",
    drawerType: "front",
    drawerWidth: 200,
    drawerBackgroundColor: "blue",
    contentOptions: {
      activeTintColor: "#e91e63",
      itemsContainerStyle: {
        marginVertical: 0
      },
      iconContainerStyle: {
        opacity: 1
      }
    }
  }
);

export default createAppContainer(MyDrawerNavigator);
