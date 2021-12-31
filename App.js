/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './app/counter/Store';
import Counter from './app/counter/Counter';

const App = props => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App;
