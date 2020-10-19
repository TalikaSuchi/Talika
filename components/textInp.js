import React, { useState } from 'react';
import { Text, View, TextInput, Button, Modal, StyleSheet } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Elevation from "react-native-elevation";



const InputTask = props => {




    // I know im also not proud of this but for now this will have to work
    // This is a stateHook for all the elements of he fourm which will then go to an object which will be added to the array
    const [Key, setkey] = useState(0);
    const [tasks, setTask] = useState("");
    const [StartDate, setStartDate] = useState(new Date(1991, 0, 0, 0, 0, 0));
    const [EndDate, setEndDate] = useState(new Date(1992, 0, 0, 0, 0, 0));
    const [Description, setDescription] = useState("");
    const [Visible, setVisiable] = useState(true);
    const [Color, setColor] = useState("#0e918c");
    //For date picker
    const [datestate, setdatestate] = useState(false);
    const [enddatestate, setenddatestate] = useState(false);
    const [Error, setError] = useState("");

    const taskInputHandler = (enteredText) => setTask(enteredText);

    const descInputHandler = (enteredText) => setDescription(enteredText);



    let Task =
    {
        Key: Key,
        task: tasks,
        startDate: StartDate,
        endDate: EndDate,
        description: Description,
        visible: Visible,
        Color: Color,
    };

    //Date press handler

    const datePress = () => setdatestate(true);

    const hideDatePicker = () => {
        setdatestate(false);
    };

    const handleConfirm = (date) => {
        setStartDate(date);
        // console.warn("A date has been picked: ", date);
        hideDatePicker();
    };



    const enddatePress = () => setenddatestate(true);

    const hideendDatePicker = () => { setenddatestate(false); };

    const handleendConfirm = (date) => {
        setEndDate(date);
        // console.warn("A End date has been picked: ", date, " and ", EndDate);
        hideendDatePicker();
    };

    let colorArr = ["#277da1", "#577590", "#4d908e", "#43aa8b", "#90be6d", "#f9c74f", "#f9844a", "#f8961e", "#f3722c", "#f94144", "#6c757d", "#"]

    //Handler for the add input handler which sends the object to main page
    const AddHandler = () => {

        setStartDate(StartDate.setSeconds(0));
        setEndDate(EndDate.setSeconds(0));

        if (StartDate.getTime() <= EndDate.getTime()) {
            
            setColor(colorArr[Math.floor(Math.random() * 10)]);
            Task.Key = Math.floor(Math.random() * 1000).toString();
            props.onAdd(Task);
            setTask("");
            setError("");
            setDescription("");
            setStartDate(new Date(1991, 0, 0, 0, 0, 0));
            setEndDate(new Date(1992, 0, 0, 0, 0, 0 ));
        }
        else {
            setError("The starting date is Greater than end date.");
        }



    }



    const TimeRender = () => {
        if (StartDate <= (new Date(1991, 0, 0, 0, 0, 0)) || EndDate <= (new Date(1992, 0, 0, 0, 0, 0))) { }
        else {
            return (<View style={props.bgStyle.title} >

                <View style={{ flex: 1 }}>

                    <Text>
                        Start:-{Task.startDate.getDate()} {dayWord(Task.startDate.getDay())} {Task.startDate.getHours()}:{Task.startDate.getMinutes()}.{Task.startDate.getSeconds()}
                    </Text>

                </View>

                <View style={{ flex: 1 }} >
                    <Text>
                        End:-{Task.endDate.getDate()} {dayWord(Task.endDate.getDay())} {Task.endDate.getHours()}:{Task.endDate.getMinutes()}.{Task.endDate.getSeconds()}
                    </Text>
                </View>


            </View>);

        }

    }


    return (
        <View style={{ flexDirection: "column" }}>


            <Modal transparent={true} presentationStyle={'overFullScreen'} visible={props.VisitState} animationType="slide" >



                <View style={{ backgroundColor: "rgba(100,100,100,.5)", height: "100%", alignItems: "center" }} >

                    <View style={Style.body}>

                        <View>


                            <Text style={props.bgStyle.textcol}>So <Text style={props.bgStyle.themeCol}>What</Text> Is it</Text>

                            <View style={{ margin: "3%", borderBottomWidth: 2, borderColor: '#343a40', }}>

                                <TextInput placeholder='What to do' value={tasks} onChangeText={taskInputHandler} />
                                {/* value={currentTask.task} onChangeText={text => currentTask.task.concat(text)} */}

                            </View>

                            <View style={{ margin: "3%", borderBottomWidth: 2, borderColor: '#343a40', }}>

                                <TextInput placeholder='How to do' value={Description} onChangeText={descInputHandler} />

                            </View>

                            {/* Date and time picker view */}
                            <View style={Style.Date}  >

                                <View style={Style.buttonContanier}>
                                    <Button color={props.bgStyle.themeCol.color} style={Style.button} title="Start Date/Time" onPress={datePress} />
                                </View>

                                <View style={Style.buttonContanier} >
                                    <Button color={props.bgStyle.themeCol.color} style={Style.button} title="End Date/time" onPress={enddatePress} />
                                </View>

                                <DateTimePickerModal isDarkModeEnabled={true} mode='datetime' isVisible={datestate} onConfirm={handleConfirm} onCancel={hideDatePicker} />

                                <DateTimePickerModal isDarkModeEnabled={true} mode='datetime' isVisible={enddatestate} onConfirm={handleendConfirm} onCancel={hideendDatePicker} />


                            </View>

                                    <View>
                                        {TimeRender()}
                                    </View>


                                    <View style={{ margin: "3%", }}>
                                        <Text style={{ color: "red", }}> {Error} </Text>
                                    </View>
                                    

                            <View style={Style.buttonContanierL}> 

                                    <View style={{flex:1}}>  
                                    <Button color={props.bgStyle.themeCol.color} title="Add" onPress={AddHandler} />
                                    </View>

                                    <View style={{flex:1}}>
                                    <Button color={props.bgStyle.textcol.color} title="Cancel" onPress={() => { props.onCancel(); }} />
                                    </View>

                            </View>


                        </View>
                    </View>

                    {/* <View style={{ flex: 1, backgroundColor: 'rgba(100,100,100,.5)', justifyContent: 'center', flexDirection: 'row', alignItems: 'center', }} >
                    <Text>Add start and end date to keep track of the time elapsed</Text>
                </View> */}
                </View>
            </Modal>

        </View>

    );

}

export default InputTask;

let dayDict = { 0: 'Sun', 1: "Mon", 2: "Tue", 3: "Wed", 4: "Thu", 5: "Fri", 6: "Sat" };
const dayWord = (day) => dayDict[day];



const Style = StyleSheet.create(
    {
        body: {

            marginTop: "40%",
            height: '52%',
            justifyContent: 'center',
            backgroundColor: '#eeeeee',
            borderRadius: 50,
            minWidth: 350,
            flexDirection: 'row',
            alignItems: 'center',
            ...Elevation[5],
        },
     

        textcol: {
            fontSize: 30,
            color: '#373a40',
        },
        themeCol: {
            color: '#19d3da',
            fontSize: 35,
            fontWeight: 'bold',
        },

        Date: {
            flexDirection: "row"
        },

        button: {
            color: '#30475e',
            
        },
        buttonContanier: {
            padding: "3%",
        },

        buttonContanierL: {
            padding: "3%",
            flexDirection:"row",
            justifyContent:"center",
            alignItems:"center",
        },


        title:
        {
            justifyContent: 'space-between',
            alignItems: "baseline",
            flexDirection: "row",
            paddingBottom: "-14%",


        },
    }

);