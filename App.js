import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList, Text } from 'react-native';
import GoalItem from './components/goalItem';
import GoalInput from './components/goalInput';

export default function App() {


  //hook to manage the array of the stored goals/tasks
  const [goal, setGoal] = useState([]);

  const [addMode, setAddMode] = useState(false);

  //takes in the text in the text felid using the useState hook and adds that value to the array
  const addGoalHandler = textInput => {
    if (textInput != "") {
      setGoal(currentGoal => [...currentGoal,
      { id: Math.random().toString(), val: textInput }
      ]);

    }
    setAddMode(false);
  };

  const deletHandler = (goalindex) => {
    setGoal(
      currentGoal => {
        return (
          currentGoal.filter((goal) => goal.id !== goalindex)
        );
      }
    )
  };

  const resetHandle = () => setGoal([]);


  return (
    <View style={styles.screen}>
      <View style={{ borderBottomColor: 'grey', borderBottomWidth: 3, borderBottomEndRadius: 8, }}>
        <View style={styles.head}>

          <Text style={styles.textcol}> Forget <Text style={styles.themeCol} >Not</Text> Bro</Text>

        </View>

        <View style={styles.ButtonFeild}>

          <Button color={'green'} title="Add new Goal" onPress={() => setAddMode(true)} />
          <Button title="Reset" onPress={resetHandle} color={'red'} />

        </View>

        <GoalInput visible={addMode} onAddGoal={addGoalHandler} onCancle={() => setAddMode(false)} />

      </View>
      <View style={styles.arrView}>

        {/* //scrolled area which does not render the items which are not visible  */}
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={goal}
          renderItem=
          {
            itemData => (
              <GoalItem id={itemData.item.id} title={itemData.item.val} onDelete={deletHandler} />
            )}
        />

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    height: '95%',
    margin: 20,
    padding: '10%',
    justifyContent: "center",
    borderWidth: 4,
  },

  arrView:
  {
    flexDirection: 'column-reverse',
  },
  head: {
    flexDirection: "row",
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  ButtonFeild:
  {
    margin: 20,
    justifyContent: 'space-around',
    flexDirection: "row",
  },

  textcol: {
    fontSize: 38,
    color: '#7e8a97',
  },
  themeCol: {
    color: '#30475e',
    fontSize: 40,
    fontWeight: 'bold',
  },


});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#4a7',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
