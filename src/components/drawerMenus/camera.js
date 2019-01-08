import React from "react";
import { CameraRoll, ScrollView, View, Button, Image } from "react-native";
import BackButton from "./backButton";

export default class CameraView extends React.Component {
  constructor(props) {
    super(props);
  }

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
        <BackButton />
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
