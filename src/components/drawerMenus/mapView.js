import React from "react";
import { View, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import { createStackNavigator, createAppContainer } from "react-navigation";
import BackButton from "./backButton";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  mapView: {
    width: 400,
    height: 400
  }
});

class RNMapView extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = navigation => ({
    title: "MapView",
    headerLeft: <BackButton />
  });
  render() {
    return (
      <View style={Styles.container}>
        <MapView
          style={Styles.mapView}
          showsUserLocation
          followsUserLocation
          showsPointsOfInterest={false}
        >
          <MapView.Marker
            title="Duff Brewery"
            description="Duff beer for me,Duff beef for you"
            coordinate={{ latitude: 43.8418728, longitude: -79.086082 }}
          />
          <MapView.Marker
            title="Pawtucket Brewery"
            description="New! Patriot light"
            coordinate={{ latitude: 43.8401328, longitude: -79.085407 }}
          />
        </MapView>
      </View>
    );
  }
}

const MyNavigator = createStackNavigator(
  {
    Index: {
      screen: RNMapView
    }
  },
  {
    initialRouteName: "Index"
  }
);
export default createAppContainer(MyNavigator);
