import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Header = (props) => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerLeft}> Left </Text>
          <Text style={styles.headerCenter}> Title </Text>
          <Text style={styles.headerRight}> Right </Text>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: "#233c63",
  },
  header: {
    paddingVertical: 14,
    width: '100%',
    flexDirection: 'row', 
    alignItems:'center',
  },
  headerLeft: {
    flex: 1,
    color: "#f5f5f5",
    fontSize: 20,
    fontWeight: "bold",
  },
  headerCenter: {
    flex: 1, 
    textAlign: 'center',
    color: "#f5f5f5",
    fontSize: 20,
    fontWeight: "bold",
  }, 
  headerRight: {
    flex: 1, 
    textAlign: 'right',
    color: "#f5f5f5",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Header;