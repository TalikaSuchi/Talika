import { StatusBa } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './components/Header';
import Subjects from './components/Subjects';
import Theme from './styles/Theme';

export default function Anusuchak() {
	return (
		<View style={Theme.screen}>
			<View style={Theme.body}>
				<Header />
				<View style={styles.content}>
					<Subjects />
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	BG: {
		backgroundColor: Theme.body.backgroundColor,
		flex: 1,
	},
	content: {
		flex: 1,
		padding: 20,
	},
});
