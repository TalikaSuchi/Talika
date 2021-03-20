import React, { useState } from 'react';
import { StyleSheet, TextInput, Text, View, TouchableOpacity } from 'react-native';

const CreateNoteComponent = (props) => {
	const [newNoteText, setNewNoteText] = useState(props.Text);
	const [newNoteTitle, setNewNoteTitle] = useState(props.Title);

	return (

		<View style={styles.noteStyle}>
			<TextInput
				style={titleInputStyles()}
				autoCorrect={true}
				autoCapitalize="sentences"
				value={newNoteTitle}
				onChangeText={(currentTitle) => {
					setNewNoteTitle(currentTitle);
				}}
				placeholder={'Enter your Title'}
				placeholderTextColor="#212121"
			/>
			<TextInput
				style={textInputStyles()}
				autoCorrect={true}
				autoCapitalize="sentences"
				multiline={true}
				value={newNoteText}
				onChangeText={(currentText) => {
					setNewNoteText(currentText);
				}}
				placeholder={'Enter your Note'}
				placeholderTextColor="#bbbbbb"
			/>
			<TouchableOpacity
				onPress={() => {
					setNewNoteText(newNoteText);
					setNewNoteTitle(newNoteTitle);
					var note = { title: newNoteTitle, text: newNoteText };
					props.onCreateButtonPress(note);
				}}
				style={inputButton()}
			>
				<Text style={{ color: '#212121', fontSize: 30, fontWeight: 'bold' }}>Done</Text>
			</TouchableOpacity>
		</View>
	);
};

const randomBackground = (x) => {
	var red = Math.floor(Math.random() * (255 - x)) + x;
	var green = Math.floor(Math.random() * (255 - x)) + x;
	var blue = Math.floor(Math.random() * (255 - x)) + x;
	return `rgb(${red}, ${green}, ${blue})`;
};

function inputButton() {
	return {
		marginBottom: 25,
		alignSelf: 'center',
		alignItems: 'center',
		backgroundColor: '#eeeeee',
	};
}

function textInputStyles() {
	return {
		flex: 15,
		paddingLeft: 25,
		padding: 10,
		fontSize: 22,
		width: 430,
		alignSelf: 'center',
		backgroundColor: '#eeeeee',
		color: '#212121',
		textAlignVertical: 'top',
	};
}

function titleInputStyles() {
	return {
		flex: 1,
		borderBottomWidth: 2,
		width: 430,
		paddingLeft: 25,
		padding: 15,
		fontSize: 25,
		alignSelf: 'center',
		borderColor: '#212121',
		backgroundColor: '#0d7377',
		color: 'white',
		top: -5,
	};
}

const styles = StyleSheet.create({
	noteStyle: {
		flex: 1,
		
		alignContent: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'center',
		backgroundColor: '#eeeeee',
		color: 'white',
		borderRadius:30,
	},
});

export default CreateNoteComponent;
