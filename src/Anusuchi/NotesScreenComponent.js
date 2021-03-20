import React, { useState } from 'react';
import { FlatList, View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import SingleNoteSummaryComponent from './SingleNoteSummaryComponent';
import CreateNoteComponent from './CreateNoteComponent';
import elevation from 'react-native-elevation';
import Theme from '../styles/Theme'

const NotesScreenComponent = () => {
	const [data, setData] = useState([]);
	const [keyNum, setKeyNum] = useState(0);
	const [flag, setFlag] = useState(3);
	const [currentNote, setNote] = useState({ key: -1, title: '', text: '', date: new Date() });

	const addNewNote = (note) => {
		if (note.text || note.title) {
			setKeyNum(keyNum + 1);
			setData([{ key: keyNum, title: note.title, text: note.text, date: new Date() }, ...data]);
		}
		setFlag(3);
	};

	const setCurrentNote = (note) => {
		var ndata = data;
		for (var i = 0; i < ndata.length; i++) {
			if (ndata[i].key === currentNote.key) {
				ndata[i] = { key: currentNote.key, title: note.title, text: note.text, date: new Date() };
				break;
			}
		}
		setData(ndata);
		setFlag(3);
	};

	const showNoteScreen = () => {
		if (flag === 1)
			//Edit an Old Note
			return (
				<View style={{height:'100%'}}>
				<CreateNoteComponent
					onCreateButtonPress={(note) => setCurrentNote(note)}
					Title={currentNote.title}
					Text={currentNote.text}
					Key={currentNote.key}
				/>
				</View>
			);
		else if (flag === 2)
			//Create a new Note
			return <CreateNoteComponent onCreateButtonPress={(note) => addNewNote(note)} Title={''} Text={''} />;
		else if (flag === 3)
			//View list of notes
			return (
				<View style={{ flex: 1 }}>
					<View style={{ flex: 1 }}>
						<Text style={{ color: Theme.themeCol.color ,textAlign: 'center', fontSize: 40, fontWeight: 'bold', top: 13, left: 2 }}>
							Anu<Text style={{ color: Theme.textcol.color ,textAlign: 'center', fontSize: 40, fontWeight: 'bold', top: 13, left: 2 }}>suchi</Text>
						</Text>
					</View>
					<View
						style={{
							flex: 10,
						}}
					>
						<FlatList
							showsVerticalScrollIndicator={false}
							style={{ flex: 1, flexWrap: 'wrap' ,...elevation[2]}}
							data={data}
							numColumns={2}
							renderItem={({ item }) => {
								return (
									<SingleNoteSummaryComponent
										myNoteDate={item.date}
										myNoteText={item.text}
										myNoteTitle={item.title}
										myNoteKey={item.key}
										currentNoteVal={(note) => {
											setNote(note);
											setFlag(1);
										}}
									/>
								);
							}}
						/>
						<TouchableOpacity
							onPress={() => {
								setFlag(2);
							}}
							style={inputButton()}
						>
							<Text style={{ color: '#eeeeee', fontSize: 32, fontWeight: 'bold' , ...elevation[4] }}>New Note</Text>
						</TouchableOpacity>
					</View>
				</View>
			);
	};

	return(
	
		 <View style={styles.viewProperties}>{showNoteScreen()}</View>

		
		 );
};

function inputButton() {
	return {
		borderRadius: 10,
		padding: 15,
		margin: 20,
		alignItems: 'center',
		alignSelf: 'center',
		backgroundColor: '#212121',
		elevation: 2,
	};
}

/*const randomBackground = (x) => {
	var red = Math.floor(Math.random() * (255 - x)) + x;
	var green = Math.floor(Math.random() * (255 - x)) + x;
	var blue = Math.floor(Math.random() * (255 - x)) + x;
	return `rgb(${red}, ${green}, ${blue})`;
};*/

const styles = StyleSheet.create({
	viewProperties: {
		flex: 1,
		margin:10,
		width: '98%',
		minHeight:"50%",
		borderRadius:30,
		alignSelf: 'center',
	},
	textProperties: {
		fontSize: 24,
		alignSelf:"center",
	},
});

export default NotesScreenComponent;
