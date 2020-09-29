import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, TextInput, Modal } from 'react-native';

const GoalInput = props => {
    //useState hook to manage the input feild data
    const [textGoal, setTextGoal] = useState("");
    const goalInputHandler = (enteredText) => setTextGoal(enteredText);


    return (

        <Modal presentationStyle={'pageSheet'} visible={props.visible} animationType="fade">

            <View style={styles.inpCont} >

                <Text style={styles.textcol} >Enter The <Text style={styles.themeCol}> Goals </Text> you want to set</Text>
                <TextInput
                    onChangeText={goalInputHandler}
                    value={textGoal}
                    placeholder="Topics you want to remember "
                    style={styles.inp} />
                <View style={styles.ButtonFeild}>
                    <Button color={'green'} title="Add" onPress={() => { props.onAddGoal(textGoal); setTextGoal(""); }} />
                    <Button title="Cancel" onPress={() => props.onCancle()} />
                </View>
                <View >
                    <Text style={{ color: 'grey', margin: 20 }}>If you dont want to enter any goals press Cancel </Text>
                </View>
            </View>

        </Modal>
    );
};

export default GoalInput;

const styles = StyleSheet.create(
    {
        textcol: {
            fontSize: 38,
            color: '#7e8a97',
        },
        themeCol: {
            color: '#30475e',
            fontSize: 40,
            fontWeight: 'bold',
        },


        inpCont: {
            height: '95%',
            margin: 15,
            borderWidth: 4,
            padding: '10%',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },
        inp:
        {
            width: '90%',
            height: '10%',
            margin: 20,
            borderBottomColor: 'black',
            borderBottomWidth: 2,
        },
        ButtonFeild:
        {
            margin: 20,
            justifyContent: 'space-around',
            flexDirection: "column",
        },
    }
);