import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "react-router-native";

const Settings = () => {
  return (
    <View style={null}>
      <Text>Settings</Text>
      <Link to="/">
        <Text>Home</Text>
      </Link>
    </View>
  );
};

export default Settings;
