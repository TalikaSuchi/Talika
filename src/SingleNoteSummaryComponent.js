import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SingleNoteSummaryComponent = (props) => {
	return (
		<TouchableOpacity
			onPress={() =>
				props.currentNoteVal({
					key: props.myNoteKey,
					text: props.myNoteText,
					title: props.myNoteTitle,
					date: props.myNoteDate,
				})
			}
		>
			<View style={textViewStyle()}>
				<Text style={styles.titleProperties}>{props.myNoteTitle.substring(0, 15)}</Text>
				<Text style={styles.textProperties}>{props.myNoteText.substring(0, 20)}</Text>
				<Text style={styles.dateProperties}>{props.myNoteDate.toDateString()} </Text>
			</View>
		</TouchableOpacity>
	);
};

function textViewStyle() {
	return {
		margin: 10,
		borderRadius: 10,
		elevation: 2,
		padding: 12,
		backgroundColor: '#0d7377',
		alignSelf: 'center',
		width: 180,
		height: 100,
	};
}

const styles = StyleSheet.create({
	textProperties: {
		fontSize: 15,
		textAlign: 'left',
		paddingTop: 3,
		paddingBottom: 15,
		color: 'white',
	},
	dateProperties: {
		fontSize: 10,
		right: 6,
		bottom: 6,
		paddingTop: 7,
		color: 'white',
		position: 'absolute',
	},
	titleProperties: {
		fontSize: 19,
		fontWeight: 'bold',
		textAlign: 'left',
		color: 'white',
	},
});

export default SingleNoteSummaryComponent;
