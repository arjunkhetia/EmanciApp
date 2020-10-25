import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Buttons = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Buttons Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Buttons;