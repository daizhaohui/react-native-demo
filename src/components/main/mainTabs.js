import React from "react";
import { Text, View, Button, DeviceEventEmitter } from "react-native";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./homeScreen";
import SettingsScreen from "./settingScreen";
import { EVENTS } from "../../consts";

const TabNavigator = createAppContainer(
  createBottomTabNavigator(
    {
      Home: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => ({})
      },
      Settings: {
        screen: SettingsScreen,
        navigationOptions: ({ navigation }) => ({})
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

export default class MainTabs extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <TabNavigator />;
  }
}
