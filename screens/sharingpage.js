import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import {  } from 'react-native-svg';

export default function Rectangle93() {
    return (
    		<View style={styles.rectangle93}/>
    )
}
const { width, height } = Dimensions.get('window'); // Get the screen dimensions

const styles = StyleSheet.create({
  	rectangle93: {
        flex: 1, // Use flex 1 to make it fill the entire screen
   // flexShrink: 0,
    width: width,
    height: height,
    backgroundColor: "rgba(146, 98, 3, 1)",
    borderRadius: 0
}
})