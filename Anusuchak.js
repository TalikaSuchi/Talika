import { StatusBa } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './Components/Header';
import Subjects from './Components/Subjects';

export default function Anusuchak() {
	return (
		<View style={styles.BG}>
			<Header />
			<View style={styles.content}>
				<Subjects />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	BG: {
		backgroundColor: 'white',
		flex: 1,
	},
	content: {
		flex: 1,
		padding: 20,
	},
});
