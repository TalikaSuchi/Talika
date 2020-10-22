import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Theme from '../styles/Theme';

export default function Header() {
  return (
    <View style={HeaderStyle.content}>
      <Text style={HeaderStyle.title}>ANU<Text style={{color :  Theme.textcol.color , fontSize : 35}}>SUCHAK</Text></Text>
    </View>
  );
}

const HeaderStyle = StyleSheet.create({
  content: {
    marginTop: 35,
    height: 50,
  },
  title: {
    textAlign: "center",
    color: Theme.themeCol.color,
    fontSize: 35,
    fontWeight: "bold",
    padding: 10,
  },
});
