/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, View, Image, ImageBackground } from 'react-native';
import { Content, Container, Text, Icon } from "native-base";
import { Metrics } from '../../Style';

type Props = {};
export default class Home extends Component<Props> {
  componentDidMount() {
    console.debug('asdsa')
  }
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <ImageBackground
            resizeMethod='resize'
            resizeMode='stretch'
            style={styles.imageBackground}
            source={{ uri: 'https://awsimages.detik.net.id/community/media/visual/2017/05/31/d4e24277-0094-4555-b069-58e354d30f8f_169.jpg?w=780&q=90' }} >
            <View style={styles.containerImageBackground}>
              <View style={styles.wrapperContainerImageBackground}>
                <View style={[styles.sectionImageBackground, { flex: 3, paddingLeft: 10 }]}>
                  <Text style={styles.imageBackgroundText}>POLITIK</Text>
                </View>
                <View style={[styles.sectionImageBackground, { flexDirection: 'row', paddingRight: 10, flex: 7, justifyContent: 'flex-start' }]}>
                  <Icon type='Ionicons' name='time' style={[styles.imageBackgroundText, { paddingRight: 10 }]} />
                  <Text style={[styles.imageBackgroundText]}>
                    Baru Saja
                  </Text>
                </View>
                <View style={[styles.sectionImageBackground, { flex: 2 }]}>
                  <Icon type='MaterialIcons' name='bookmark' style={styles.imageBackgroundText} />
                </View>
              </View>
            </View>
          </ImageBackground>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, },
  imageBackground: {
    width: Metrics.screenWidth,
    height: Metrics.screenHeight * 0.25, flex: 1
  },
  containerImageBackground: {
    flex: 1,
    flexDirection: 'column-reverse',
  },
  wrapperContainerImageBackground: {
    flex: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: Metrics.windowHeight * 0.05,
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  sectionImageBackground: {
    justifyContent: 'center'
  },
  imageBackgroundText: {
    color: 'white',
    fontSize: 17,
    textAlignVertical: 'center'
  },
});
