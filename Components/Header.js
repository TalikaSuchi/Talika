import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={HeaderStyle.content}>
      <Text style={HeaderStyle.title}>ANUSUCHAK</Text>
    </View>
  );
}

const HeaderStyle = StyleSheet.create({
  content: {
    marginTop: 35,
    backgroundColor: "#0d7377",
    height: 50,
  },
  title: {
    textAlign: "center",
    color: "#eeeeee",
    fontSize: 24,
    fontWeight: "bold",
    padding: 10,
  },
});
