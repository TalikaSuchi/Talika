import { setStatusBarStyle, StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Elevation from 'react-native-elevation';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, FlatList } from 'react-native';
import Theme from '../../styles/Theme';

export default class Subjects extends Component {
	state = {
		clicks: 0,
		textInputholder: '',
		Data: [],
	};

	joinData = () => {
		this.state.Data.push({
			SubName: this.state.textInputholder,
			Total: 0,
			Attended: 0,
			Percentage: 0,
			key: this.state.clicks + 1,
		});
		this.setState({ clicks: this.state.clicks + 1 });
	};

	Calc = (item) => {
		if (item.Total === 0) item.Percentage = 0;
		else item.Percentage = (item.Attended / item.Total) * 100;
		item.Percentage = Math.floor(item.Percentage);
		this.setState({});
	};

	attendedClass = (item) => {
		item.Attended++;
		item.Total++;
		this.Calc(item);
		this.setState({ clicks: this.state.clicks + 1 });
	};

	missedClass = (item) => {
		item.Total++;
		this.Calc(item);
		this.setState({ clicks: this.state.clicks + 1 });
	};

	foo = (props) => {
		return (
			<View style={Substyle.item}>
				<Text style={Theme.textcol}> {props.item.SubName} </Text>
				<View style={{ flex: 1, flexDirection: 'row' }}>
					<View style={Substyle.counter}>
						<Text style={Substyle.text2}>Total</Text>
						<View style={Substyle.numberCounter}>
							<Text style={{ fontSize: 20, fontWeight: 'bold' }}>{props.item.Total}</Text>
						</View>
					</View>
					<View style={Substyle.counter}>
						<Text style={Substyle.text2}>Attended</Text>
						<View style={Substyle.numberCounter}>
							<Text style={{ fontSize: 20, fontWeight: 'bold' }}>{props.item.Attended}</Text>
						</View>
					</View>
					<View style={Substyle.counter}>
						<AnimatedCircularProgress
							size={60}
							width={5}
							fill={props.item.Percentage}
							tintColor="#32e0c4"
							backgroundColor="#212121"
						>
							{(fill) => <Text style={{ fontSize: 10, fontWeight: 'bold' }}>{Math.floor(fill)}%</Text>}
						</AnimatedCircularProgress>
					</View>
				</View>
				<View style={{ flex: 0.5, flexDirection: 'row' }}>
					<TouchableOpacity
						onPress={() => this.attendedClass(props.item)}
						activeOpacity={0.7}
						style={Substyle.Attended}
					>
						<Text style={Substyle.buttonText}> Class Attended </Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => this.missedClass(props.item)}
						activeOpacity={0.7}
						style={Substyle.Missed}
					>
						<Text style={Substyle.buttonText}> Class Missed </Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	};

	render() {
		return (


			<View style={{ flex: 1, ...Elevation[4] }}>
				<TextInput
					placeholder="Subject Name"
					onChangeText={(data) => this.setState({ textInputholder: data })}
					style={Substyle.textInput}
					underlineColorAndroid="transparent"
				/>

				
				<TouchableOpacity onPress={this.joinData} activeOpacity={0.7} style={Substyle.button}>
					<Text style={Substyle.buttonText}>Add</Text>
				</TouchableOpacity>


				<View style={{ flex: 1 }}>
					<FlatList
						data={this.state.Data}
						KeyExtractor={(item) => {
							toString(item.key);
						}}
						renderItem={this.foo}
						showsVerticalScrollIndicator={false}
					/>
				</View>
			</View>
		);
	}
}

const Substyle = StyleSheet.create({
	item: {
		flex: 1,
		margin: 2,
		backgroundColor: '#efefef',
		borderRadius: 10,
		borderColor: 'black',
		padding: 10,
		flexWrap: 'wrap',
		justifyContent: 'center',
		alignItems: 'center',
		...Elevation[4],
		
	},
	text: {
		alignSelf: 'flex-start',
		color: 'black',
		fontSize: 26,
		fontWeight: 'bold',
	},
	counter: {
		flex: 1,
		padding: 20,
		justifyContent: 'flex-start',
		alignItems: 'center',
		alignSelf: 'flex-start',
	},
	numberCounter: {
		backgroundColor: '#eeeeee',
		height: 35,
		width: 35,
		borderRadius: 35,
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 20,
		marginRight: 20,
	},
	text2: {
		justifyContent: 'center',
		color: '#0d7377',
		fontSize: 12,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	text3: {
		flex: 1,
		padding: 100,
		alignSelf: 'flex-start',
		justifyContent: 'center',
		color: 'blueviolet',
		fontSize: 20,
		fontWeight: 'bold',
	},
	disp: {
		padding: 3,
		fontSize: 20,
		fontWeight: 'bold',
		backgroundColor: '#EDF3F6',
		height: 35,
		width: 35,
		borderRadius: 35,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		marginLeft: 20,
		marginRight: 20,
		elevation: 0.5,
	},
	Input: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
		margin: 2,
	},
	textInput: {
		textAlign: 'center',
		height: 40,
		minWidth : '90%',
		backgroundColor:"rgb(255,255,255)",
		borderColor: '#212121',
		borderRadius: 7,
		marginTop: 2,
		alignSelf: 'center',
	},
	button: {
		width: '90%',
		height: 40,
		padding: 10,
		borderRadius: 8,
		marginTop: 10,
		alignSelf: 'center',
		marginBottom: 20,
	},
	buttonText: {
		color: Theme.textcol.color,
		textAlign: 'center',
		fontWeight: 'bold',
	},
	Attended: {
		padding: 10,
		alignSelf: 'flex-start',
		backgroundColor: '#32e0c4',
		borderRadius: 20,
		margin: 10,
		
		borderColor: '#212121',
		elevation: 0.6,
	},
	Missed: {
		padding: 10,
		alignSelf: 'flex-start',
		backgroundColor: '#0d7377',
		borderRadius: 20,
		margin: 10,
		
		borderColor: '#212121',
		elevation: 0.6,
	},
});
