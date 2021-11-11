import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  NativeRouter as Router,
  Route,
  Link,
  Routes,
} from "react-router-native";

import Home from "./views/Home.jsx";
import Settings from "./views/Settings.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      <View>
        <Link to="/">
          <Text>Home</Text>
        </Link>
        <Link to="/settings">
          <Text>Settings</Text>
        </Link>
      </View>
    </Router>
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
