import { Dimensions, StyleSheet } from "react-native";

export const Metrics = {
  screenWidth: Dimensions.get('screen').width,
  windowWidth: Dimensions.get('window').width,
  windowHeight: Dimensions.get('window').height,
  screenHeight: Dimensions.get('screen').height
}

export const text = StyleSheet.create({
  bottom: {
    textAlignVertical: 'bottom'
  }
})