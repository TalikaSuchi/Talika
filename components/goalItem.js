import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = props => {
    return (

        <TouchableOpacity activeOpacity={0.4} onPress={props.onDelete.bind(this, props.id)}  >
            <View style={styles.task}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>

    );
}
export default GoalItem;

const styles = StyleSheet.create({
    task:
    {
        justifyContent: 'center',
        alignItems: "center",
        padding: 10,
        margin: 4,
        borderBottomColor: 'grey',
        borderWidth: 1,
        borderRadius: 9,
    },
});