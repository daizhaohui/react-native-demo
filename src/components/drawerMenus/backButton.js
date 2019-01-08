import React from "react";
import { Button, DeviceEventEmitter } from "react-native";
import { EVENTS } from "../../consts";

export default class BackButton extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Button
        onPress={() => {
          DeviceEventEmitter.emit(EVENTS.CLOSE_DRAWER_MENU_DIALOG);
        }}
        title="Back"
        color="blue"
      />
    );
  }
}
