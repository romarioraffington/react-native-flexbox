import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box}></View>
        <View style={[styles.box, {flex: 2, alignSelf: 'flex-start'}]}></View>
        <View style={styles.box}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    height: 50,
    width: 50,
    backgroundColor: '#E76E63',
    margin: 10
  }
});
