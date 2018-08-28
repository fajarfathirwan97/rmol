/**
 * @format
 * @flow
 */

import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { createStackNavigator } from "react-navigation";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Home from "../Screen/Home";
import Reducer from "../Reducer";
const StackNavigator = createStackNavigator({
  Home: {
    screen: Home,
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

type Props = {};

export default class navigation extends Component<Props> {
  render() {
    return (
      <Provider store={Reducer().store}>
        <PersistGate loading={null} persistor={Reducer().persistor}>
          <View style={styles.container}>
            <StackNavigator />
          </View>
        </PersistGate>
      </Provider>
    );
  }
}