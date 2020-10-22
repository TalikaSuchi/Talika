import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';

export default function Menu({ navigation }) {
	const [details, setDetails] = useState([
		{ det: 'Suchi', key: 1 },
		{ det: 'Anusuchi', key: 2 },
		{ det: 'Anusuchak', key: 3 },
	]);

	const pressHandler = (id) => {
		navigation.navigate(id);
	};
	return (
		<View style={styles.body}>
			<View style={styles.sectionHeader} backgroundColor="white">
				<Text style={styles.sectionTitle}>Project Taalika</Text>
			</View>
			<View style={{ flex: 3, backgroundColor: 'white' }}>
				{details.map((detail) => {
					return (
						<TouchableOpacity
							key={detail.key}
							style={styles.sectionContainer}
							backgroundColor="white"
							onPress={() => pressHandler(detail.det)}
						>
							<Text style={styles.row}>{detail.det}</Text>
						</TouchableOpacity>
					);
				})}
			</View>
			<View style={{ flex: 3, backgroundColor: 'white' }}></View>
		</View>
	);
}

const styles = StyleSheet.create({
	body: {
		backgroundColor: 'white',
		flex: 1,
		justifyContent: 'center',
		backgroundColor: 'white',
	},
	sectionHeader: {
		flex: 2,
		padding: 20,
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		zIndex: 1,
	},
	sectionContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'center',
		margin: 5,
		padding: 10,
		height: 80,
	},
	row: {
		fontSize: 35,
		color: 'black',
		alignSelf: 'flex-start',
		flexDirection: 'row',
		marginHorizontal: 10,
		marginTop: 10,
		fontWeight: 'bold',
		textAlign: 'center',
	},

	sectionTitle: {
		fontSize: 45,
		color: 'black',
		fontWeight: 'bold',
		padding: 20,
	},
	footer: {
		color: 'gray',
		fontSize: 12,
		fontWeight: '600',
		textAlign: 'right',
	},
	footerContainer: {
		padding: 4,
		paddingRight: 12,
	},
	icons: {
		justifyContent: 'center',
		alignSelf: 'flex-start',
		backgroundColor: 'black',
		height: 50,
		width: 50,
		borderRadius: 50,
		// padding: 50
	},
	img: {
		height: 150,
		width: 150,
		borderRadius: 50,
		alignSelf: 'center',
	},
});
