import { setStatusBarStyle, StatusBar } from 'expo-status-bar';
import React, { useState, Component } from 'react';

import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	TextInput,
	FlatList,
	Button,
	TouchableWithoutFeedbackBase,
} from 'react-native';

export default class Notes extends Component {
	state = {
		TextInputHolder: '',
		data: [],
	};

	addNote = () => {
		this.state.data.push({
			text: this.state.TextInputHolder,
		});
		this.setState({});
	};

	Hammer = (props) => {
		return (
			<View>
				<Text> {props.item.text}</Text>
			</View>
		);
	};

	render() {
		return (
			<View>
				<TextInput
					placeholder="Loading Note...."
					onChangeText={(data) => this.setState({ TextInputHolder: data })}
					style={noteStyle.text}
					underlineColorAndroid="transparent"
				/>
				<TouchableOpacity onPress={this.addNote} activeOpacity={0.7} style={noteStyle.addNote}>
					<Text> Add Note </Text>
				</TouchableOpacity>

				<FlatList
					data={this.state.data}
					KeyExtractor={(index) => index.toString()}
					renderItem={this.Hammer}
					showsVerticalScrollIndicator={false}
				/>
			</View>
		);
	}
}

const noteStyle = StyleSheet.create({
	text: {
		textAlign: 'center',
		height: 40,
		width: '90%',
		borderWidth: 1,
		borderColor: '#4CAF50',
		borderRadius: 7,
		marginTop: 12,
	},
	AddButton: {
		width: '90%',
		height: 40,
		padding: 10,
		backgroundColor: '#4CAF50',
		borderRadius: 8,
		marginTop: 10,
	},
});
