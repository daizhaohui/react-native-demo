import React from "react";
import {
  CameraRoll,
  ScrollView,
  View,
  Button,
  Image,
  ActivityIndicator,
  StatusBar
} from "react-native";
import BackButton from "./backButton";
import { createStackNavigator, createAppContainer } from "react-navigation";
class CameraView extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = navigation => ({
    title: "Camera",
    headerLeft: <BackButton />
  });

  state = {
    photos: [],
    animating: true
  };
  _handelButtonPress = () => {
    CameraRoll.getPhotos({
      first: 20,
      assetType: "Photos"
    })
      .then(r => {
        this.setState({
          photos: r.edges
        });
      })
      .catch(err => {});
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        animating: false
      });
    }, 6000);
  }

  render() {
    return (
      <View>
        <ActivityIndicator
          size="small"
          color="#00ff00"
          animating={this.state.animating}
        />
        <Button title="load images" onPress={this._handelButtonPress} />
        <View>
          <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
        </View>
        <ScrollView>
          {this.state.photos.map((p, i) => {
            return (
              <Image
                key={i}
                style={{ width: 300, height: 100 }}
                source={{ uri: p.node.image.uri }}
              />
            );
          })}
        </ScrollView>
      </View>
    );
  }
}
const MyNavigator = createStackNavigator(
  {
    Index: {
      screen: CameraView
    }
  },
  {
    initialRouteName: "Index"
  }
);

export default createAppContainer(MyNavigator);
