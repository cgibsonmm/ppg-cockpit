import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "react-router-native";

const Settings = () => {
  return (
    <View style={styles.container}>
      <Text>Settings</Text>
      <Link to="/">
        <Text>Home</Text>
      </Link>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
