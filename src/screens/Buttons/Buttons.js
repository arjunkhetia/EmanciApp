import React from "react";
import { View, StyleSheet, Text, Button, TouchableOpacity } from "react-native";

const Buttons = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Buttons Screen</Text>
      <View style={styles.space}></View>
      <TouchableOpacity activeOpacity={0.8} style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>Button</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  space: {
    padding: 10,
  },
  appButtonContainer: {
    width: "100%",
    elevation: 8,
    backgroundColor: "#233c63",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});

export default Buttons;