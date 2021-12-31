/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {increment, decrement} from '../counter/Actions';
import {useDispatch, useSelector} from 'react-redux';

const Counter = props => {
  const data = useSelector(state => state);
  const dispatch = useDispatch();

  // const [counter, setCounter] = useState(0);
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.container}>
        <Pressable onPress={() => dispatch(increment())}>
          <Text>Incr3m3nt</Text>
        </Pressable>
        <Text>{data.counter}</Text>
        <Pressable onPress={() => dispatch(decrement())}>
          <Text>Decr3m3nt</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Counter;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
