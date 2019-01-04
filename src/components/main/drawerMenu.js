import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import {
  createDrawerNavigator,
  createAppContainer,
  DrawerItems,
  SafeAreaView
} from "react-navigation";

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

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

class Menu1 extends React.Component {
  render() {
    return (
      <View>
        <Text>Menu1</Text>
      </View>
    );
  }
}

class Menu2 extends React.Component {
  render() {
    return (
      <View>
        <Text>Menu2</Text>
      </View>
    );
  }
}

const MyDrawerNavigator = createDrawerNavigator(
  {
    Menu1: {
      screen: Menu1
    },
    Menu2: {
      screen: Menu2
    }
  },
  {
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
