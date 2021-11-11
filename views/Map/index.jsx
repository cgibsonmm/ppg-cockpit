import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MapboxGL from "@react-native-mapbox-gl/maps";

MapboxGL.setAccessToken(
  "pk.eyJ1IjoiY2dpYnNvbm1tIiwiYSI6ImNrM3hmdDl2ODE5YTMzbG8xb285M2FpdHAifQ.qbBrR5H8k2bHZByM3uDQug"
);

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  container: {
    height: 300,
    width: 300,
    backgroundColor: "tomato",
  },
  map: {
    flex: 1,
  },
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.page}>
        <View style={styles.container}>
          <MapboxGL.MapView
            style={styles.map}
            center={[0, 0]}
            zoom={1}
          ></MapboxGL.MapView>
        </View>
        <Text>Map</Text>
      </View>
    );
  }
}
