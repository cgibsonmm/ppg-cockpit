import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Link } from "react-router-native";
import { t } from "react-native-tailwindcss";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faHome,
  faCog,
  faClipboard,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";

const index = () => {
  return (
    <SafeAreaView
      style={[t.bgGray700, t.p50, t.flex, t.flexRow, t.justifyAround]}
    >
      <Link to="/" component={TouchableOpacity}>
        <View style={[t.pT4]}>
          <FontAwesomeIcon size={22} icon={faHome} color={"#fff"} />
        </View>
      </Link>
      <Link to="/map" component={TouchableOpacity}>
        <View style={[t.pT4]}>
          <FontAwesomeIcon size={22} icon={faMapMarkedAlt} color={"#fff"} />
        </View>
      </Link>
      <Link to="/settings" component={TouchableOpacity}>
        <View style={[t.pT4]}>
          <FontAwesomeIcon size={22} icon={faClipboard} color={"#fff"} />
        </View>
      </Link>
      <Link to="/settings" component={TouchableOpacity}>
        <View style={[t.pT4]}>
          <FontAwesomeIcon size={22} icon={faCog} color={"#fff"} />
        </View>
      </Link>
    </SafeAreaView>
  );
};

export default index;
