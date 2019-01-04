import React from "react";
import { Text, View, Button } from "react-native";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./homeScreen";
import SettingsScreen from "./settingScreen";

const TabNavigator = createAppContainer(
  createBottomTabNavigator(
    {
      Home: {
        screen: HomeScreen,
        navigationOptions: () => ({})
      },
      Settings: {
        screen: SettingsScreen,
        navigationOptions: () => ({})
      }
    },
    {
      tabBarOptions: {
        labelStyle: {
          fontSize: 12
        },
        tabStyle: {
          width: 100
        },
        style: {
          backgroundColor: "#fff"
        }
      }
    }
  )
);

export default class MainScreen extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <TabNavigator />;
  }
}
