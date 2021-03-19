import React, {Component} from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';

export default class StopWatch extends Component {
  state = {
    timer: null,
    min: 0,
    seconds: 0,
    start: true,
  };

  startTimer = () => {
    var sec = this.state.seconds + 1;
    var mins = this.state.min + 1;
    if (this.state.start === true) {
      if (sec !== 60) this.setState({seconds: sec});
      else if (sec === 60) this.setState({seconds: 0, min: mins, start: true});
    }
  };
  resetTimer = () => {
    this.setState({seconds: 0, min: 0, start: true});
  };
  stopTimer = () => {
    this.setState({start: false});
  };
  render() {
    // let timerId=
    return (
      <View style={styles.container}>
        <Text style={styles.counter}>
          {this.state.min}:{this.state.seconds}
        </Text>
        <View style={styles.buttonStyle}>
          <Button
            title="Start"
            onPress={(myVar) => setInterval(this.startTimer, 1000)}
          />
          <Button
            title="Reset"
            onPress={() => {
              this.resetTimer();
            }}
          />
          <Button
            title="Pause"
            onPress={() => {
              this.stopTimer();
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  counter: {
    fontSize: 60,
    textAlign: 'center',
  },
  miniCounter: {
    fontSize: 20,
    position: 'relative',
    top: -32,
    right: -50,
  },
  buttonStyle: {
    top: 30,
    width: 80,
    height: 50,
    flexDirection: 'row',
  },
});
