import React from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  DeviceEventEmitter,
  TouchableHighlight,
  View,
  Modal
} from "react-native";
import { SafeAreaView } from "react-navigation";
import { EVENTS } from "../../consts";

const styles = StyleSheet.create({
  menuLink: {
    color: "#fff",
    marginTop: 10,
    marginLeft: 10
  }
});

export default class DrawerMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      currentComponent: null
    };
  }

  getMenuClick = (navigation, menuItem) => {
    let _this = this;
    return () => {
      if (menuItem.component) {
        _this.setState({
          modalVisible: true,
          currentComponent: menuItem.component
        });
      }
    };
  };

  closeDialog = () => {
    this.setState({
      modalVisible: false
    });
  };

  componentDidMount() {
    DeviceEventEmitter.addListener(
      EVENTS.CLOSE_DRAWER_MENU_DIALOG,
      this.closeDialog
    );
  }

  componentWillMount() {
    DeviceEventEmitter.removeListener(EVENTS.CLOSE_DRAWER_MENU_DIALOG);
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  renderModalContentView = Comp => (Comp ? <Comp /> : <View />);

  render() {
    let { menuItems, navigation } = this.props;
    return (
      <View>
        <ScrollView>
          <SafeAreaView
            style={styles.container}
            forceInset={{ top: "always", horizontal: "never" }}
          >
            {menuItems.map(menuItem => (
              <TouchableOpacity
                onPress={this.getMenuClick(navigation, menuItem)}
              >
                <Text style={styles.menuLink}>{menuItem.label}</Text>
              </TouchableOpacity>
            ))}
          </SafeAreaView>
        </ScrollView>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
        >
          {this.renderModalContentView(this.state.currentComponent)}
        </Modal>
      </View>
    );
  }
}
