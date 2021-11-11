import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import {
  NativeRouter as Router,
  Route,
  Link,
  Routes,
} from "react-router-native";

import { t } from "react-native-tailwindcss";

import Home from "./views/Home.jsx";
import Settings from "./views/Settings.jsx";
import BottomNav from "./components/shared/BottomNav";

export default function App() {
  return (
    <Router>
      <View style={[t.bgGray400, t.flex, t.hFull, t.wFull, t.justifyBetween]}>
        <SafeAreaView>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </SafeAreaView>
        <BottomNav />
      </View>
    </Router>
  );
}
