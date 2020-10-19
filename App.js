import { StatusBar, } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet,ImageBackground, TouchableHighlight , Text, View, Button, FlatList } from 'react-native';

import InputTask from './components/textInp';
import GoalItem from './components/goalItem';
import Elevation from "react-native-elevation";



const bg2 = require("./assets/baground2.jpg");


export default function App() {

  const [TaskState, setTaskState] = useState(false);
  const [TaskState1, setTaskState1] = useState(false);
const [bg1Visiable,setBg1Visiablity] = useState(false);
const [bg2Visiable,setBg2Visiablity] = useState(false);
const [BG,setBG] = useState(require("./assets/baground1.jpg"));
  const taskStateHandler = () => { setTaskState(true); }

  const [TaskList, setTaskList] = useState([]);

  const [dt, setDt] = useState(new Date().toLocaleString());

  useEffect(() => {
    let secTimer = setInterval(() => {
      setDt(new Date().toLocaleString())
    }, 1000)

    return () => clearInterval(secTimer);
  }, []);


  //Adding the task in the list
  const AddHandler = (Task) => {

    TaskList.push(Task);

    setTaskState(false);

  };

  const cancleHandler = () => { setTaskState(false); };


  const screenHandler = () =>
  {
    if(bg1Visiable)
    {
      setBg1Visiablity(false);
      setBg2Visiablity(true);
      setBG(require("./assets/baground2.jpg"));
    }
    else if(bg2Visiable)
    {
      setBg1Visiablity(false);
      setBg2Visiablity(false);
      setBG(require("./assets/baground1.jpg"));
    }
    else
    {
      setBg1Visiablity(true);
      setBg2Visiablity(false);
      setBG(require("./assets/baground1.jpg"));
    }



  }


  const bgStyle = () =>
  {
    if(bg1Visiable )
    {
      const styleBG1 = StyleSheet.create(
        {
        screen : {
          height: '100%',
          width: '100%',
          backgroundColor: 'rgba(153, 123, 102,0.3)',
        },
    
        body : {
          height: '99%',
          justifyContent: 'center',
          margin: "1%",
          marginBottom: "3%",
          backgroundColor: 'rgba(157, 107, 83,-0.2)',
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius:15,
        },
        textcol: {
          fontSize: 50,
          color: '#463f3a',
        },
        themeCol: {
          color: '#606c38',
          fontSize: 45,
          fontWeight: 'bold',
        },
        task:
        {
            justifyContent: 'center',
            alignItems: "center",
            minWidth: "70%",
            padding: 10,
            margin: 4,
            borderBottomColor: 'grey',
            borderRadius: 30,
            backgroundColor: "#f2effe",
            ...Elevation[4],
        },
      }
      );
      
      return(styleBG1);
        
    }
    else if(bg2Visiable)
    {
      const styleBG2 = StyleSheet.create(
        {
        screen : {
          height: '100%',
          width: '100%',
          backgroundColor: 'rgba(255,255,255,.1)',
        },
    
        body : {
          height: '99%',
          justifyContent: 'center',
          margin: "1%",
          marginBottom: "3%",
          backgroundColor: 'rgba(100,100,100,.2)',
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius:30,
        },
        textcol: {
          fontSize: 50,
          color: '#1a535c',
        },
        themeCol: {
          color: '#73d2de',
          fontSize: 48,
          fontWeight: 'bold',
        },
        task:
        {
            justifyContent: 'center',
            alignItems: "center",
            minWidth: "90%",
            padding: 10,
            margin: 4,
            borderBottomColor: 'grey',
            borderRadius: 30,
            backgroundColor: "#f2effe",
            ...Elevation[3],
        },
      }
      );
      
      return(styleBG2);

    }

    else 
    {
      const styleNBG = StyleSheet.create(
        {
        screen : {
          height: '100%',
          width: '100%',
          backgroundColor: '#264653',
        },
    
        body : {
          height: '98%',
          width: "97%",
          justifyContent: 'center',
          margin: "2%",
          marginBottom: "6%",
          backgroundColor: '#f5f3f4',
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius:30,
          alignSelf:"center",
        },
        textcol: {
          fontSize: 50,
          color: '#373a40',
        },
        themeCol: {
          color: '#19d3da',
          fontSize: 48,
          fontWeight: 'bold',
        },
        task:
        {
            justifyContent: 'center',
            alignItems: "center",
            minWidth: "90%",
            padding: 10,
            margin: 4,
            borderBottomColor: 'grey',
            borderRadius: 30,
            backgroundColor: "#eeeeee",
            ...Elevation[3],
        },
      }
      );
    return(styleNBG);

    }


  }


  return (
    <ImageBackground source={BG} style={{ resizeMode:"cover" , flex:1,justifyContent:"center" }}>
    
    <View style={bgStyle().screen}>


      {/* // Body */}
      <StatusBar hidden />
          <View style={bgStyle().body}>

       

        <View style={styles.header}>


      <TouchableHighlight onPress={screenHandler} >
          {/* //text */}
          <View style={{...Elevation[1],}} >


            <Text style={bgStyle().textcol}> S<Text style={bgStyle().themeCol} >uch</Text>i</Text>


          </View>

          </TouchableHighlight>  
     

          {/* //input text and button container */}
          <View >


            <View>

              <InputTask bgStyle={bgStyle()} onAdd={AddHandler} onCancel={cancleHandler} VisitState={TaskState} />

            </View>


            <View style={styles.button}>

              <Button  color={bgStyle().themeCol.color} title="Tap me to Remember" onPress={taskStateHandler} />
            
            </View>

          </View>

        </View>

        {/* List output*/}
        <View style={styles.list}>

          <FlatList
            keyExtractor={(item, index) => item.Key}
            data={TaskList}
            renderItem=
            {
              itemData => (
                <GoalItem BGstyle={bgStyle()} id={itemData.item.Key} color={itemData.item.Color} desc={itemData.item.description} startDate={itemData.item.startDate} endDate={itemData.item.endDate} title={itemData.item.task} />
              )}
          />


        </View>
        
      </View>
      

    </View>
    </ImageBackground>

  );
}

const styles = StyleSheet.create(
  {
   
    header: {
      alignItems: "center",
      paddingTop: "40%",

    },
    
    list: {
      marginTop: "5%",
      flexDirection: 'column-reverse',
      borderTopColor: '#373a40',
      height: "85%",
      marginBottom: "20%"
    },
    modal: {
      height: "20%",
    },
    button : { 
    borderRadius:40,
    fontSize:40,
    elevation:20,
    ...Elevation[1],
    },

}
);