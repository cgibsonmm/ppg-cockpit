import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "react-router-native";

export default function Home() {
  return (
    <View style={null}>
      <Text>Home</Text>
      <Link to="/settings">
        <Text>Settings</Text>
      </Link>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
