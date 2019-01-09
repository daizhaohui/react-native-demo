import React from "react";
import { CameraRoll, ScrollView, View, Button, Image } from "react-native";
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
    photos: []
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

  render() {
    return (
      <View>
        <View>
          <BackButton />
        </View>
        <Button title="load images" onPress={this._handelButtonPress} />
        <ScrollView>
          {this.state.photos.map((p, i) => {
            return (
              <Image
                key={i}
                style={{
                  width: 300,
                  height: 100
                }}
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
