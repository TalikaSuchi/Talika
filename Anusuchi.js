import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NotesScreenComponent from './src/NotesScreenComponent';
import Theme from './styles/Theme';


export default function Anusuchi() {
	return (
		<View style={Theme.screen}>
			<View style={Theme.anu}>
				<NotesScreenComponent />
			</View>
		</View>
	);
}
