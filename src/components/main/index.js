import React from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  DeviceEventEmitter,
  TouchableOpacity,
  Modal
} from "react-native";
import {
  createDrawerNavigator,
  createAppContainer,
  SafeAreaView
} from "react-navigation";
import DrawerMenu from "../main/drawerMenu";
import MainTabs from "./mainTabs";
import MenuItems from "./menuItems";
import { EVENTS } from "../../consts";

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

const createModalView = InnerView => {
  return class MenuItemModal extends React.Component {
    constructor(props) {
      super(props);
      this.state = { modalVisible };
    }

    render() {
      return (
        <Modal animationType="slide" visible={this.state.modalVisible}>
          <InnerView />
        </Modal>
      );
    }
  };
};

const OpenDrawerMenus = navigation => {
  navigation.openDrawer();
};

const CloseDrawerMenus = navigation => {
  navigation.closeDrawer();
};

const MyDrawerNavigator = createDrawerNavigator(
  {
    MainTabs: {
      screen: MainTabs,
      navigationOptions: ({ navigation }) => {
        DeviceEventEmitter.addListener(EVENTS.OPEN_DRAWER_MENUS, () => {
          OpenDrawerMenus(navigation);
        });
        DeviceEventEmitter.addListener(EVENTS.CLOSE_DRAWER_MENUS, () => {
          CloseDrawerMenus(navigation);
        });
      }
    }
  },
  {
    contentComponent: props => (
      <DrawerMenu navigation={props.navigation} menuItems={MenuItems} />
    ),
    drawerPosition: "left",
    drawerType: "front",
    drawerWidth: 200,
    drawerBackgroundColor: "#7A6BAC",
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
