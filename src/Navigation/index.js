/**
 * @format
 * @flow
 */

import React, { Component } from "react";
import { View, StyleSheet, Image } from "react-native";
import { createStackNavigator, createTabNavigator } from "react-navigation";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Home from "../Screen/Home";
import Reducer from "../Reducer";
import { Metrics } from "../Style";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    justifyContent: 'center',
    padding: Metrics.screenWidth * 0.04,
  },
  stackNav: {
    backgroundColor: 'white',
    elevation: 0
  },
  labelTabNav: {
    fontSize: Metrics.screenHeight * 0.03,
    color: 'grey'
  }
})

class LogoTitle extends React.Component {
  render() {
    return (
      <View style={[styles.container, styles.header]}>
        <Image
          resizeMode='contain'
          source={require('../../assets/logo/android/xxhdpi/ic_logo.png')}
          style={{ width: Metrics.screenWidth * 0.45, height: null, flex: 1 }}
        />
      </View>

    );
  }
}
const TabNavigator = createTabNavigator(
  {
    Terbaru: { screen: Home, },
    Terpopuler: { screen: Home, },
    Politik: { screen: Home, }
  }, {
    tabBarOptions: {
      indicatorStyle: { backgroundColor: 'transparent' },
      labelStyle: styles.labelTabNav,
      style: { backgroundColor: 'white', },
    },
  }
)
const StackNavigator = createStackNavigator({
  Home: {
    screen: TabNavigator,
    navigationOptions: {
      headerTitle: <LogoTitle />
    }
  }
}, {
    navigationOptions: {
      headerStyle: styles.stackNav
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