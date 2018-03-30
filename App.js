/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Navigator from 'react-native-deprecated-custom-components';
import TabNavigator from 'react-native-tab-navigator';
import Boy from './Boy'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'tb_popular'
    }
  }

  render() {
    return (
      <View style = {styles.container}>
        <Navigator.Navigator
          initialRoute = {{
            component: Boy
          }}
          renderScene = {(route, navigator) => {
            let Component = route.component;
            return <Component navigator={navigator} {...route.params}/>
          }}
        />
        {/*<TabNavigator>
          <TabNavigator.Item
            selected = {this.state.selectedTab === 'tb_popular'}
            selectedTitleStyle = {{color: 'red'}}
            title = 'Popular'
            renderIcon = {() => <Image style={styles.image} source={require('./res/images/ic_polular.png')}/>}
            renderSelectedIcon = {() => <Image style={[styles.image, {tintColor: 'red'}]} source={require('./res/images/ic_polular.png')}/>}
            badgeText = '1'
            onPress = {() => this.setState({selectedTab: 'tb_popular'})}
          >
            <View style={styles.page1}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected = {this.state.selectedTab === 'tb_trending'}
            selectedTitleStyle = {{color: 'red'}}
            title = 'Trending'
            renderIcon = {() => <Image style={styles.image} source={require('./res/images/ic_trending.png')}/>}
            renderSelectedIcon = {() => <Image style={[styles.image, {tintColor: 'red'}]} source={require('./res/images/ic_trending.png')}/>}
            badgeText = '2'
            onPress = {() => this.setState({selectedTab: 'tb_trending'})}
          >
            <View style={styles.page2}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected = {this.state.selectedTab === 'tb_favorite'}
            selectedTitleStyle = {{color: 'red'}}
            title = 'Favorite'
            renderIcon = {() => <Image style={styles.image} source={require('./res/images/ic_favorite.png')}/>}
            renderSelectedIcon = {() => <Image style={[styles.image, {tintColor: 'red'}]} source={require('./res/images/ic_favorite.png')}/>}
            badgeText = '3'
            onPress = {() => this.setState({selectedTab: 'tb_favorite'})}>
            <View style={styles.page1}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected = {this.state.selectedTab === 'tb_my'}
            selectedTitleStyle = {{color: 'red'}}
            title = 'My'
            renderIcon = {() => <Image style={styles.image} source={require('./res/images/ic_my.png')}/>}
            renderSelectedIcon = {() => <Image style={[styles.image, {tintColor: 'red'}]} source={require('./res/images/ic_my.png')}/>}
            onPress = {() => this.setState({selectedTab: 'tb_my'})}>
            <View style={styles.page2}></View>
          </TabNavigator.Item>
        </TabNavigator>*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  page1: {
    flex: 1,
    backgroundColor: 'red'
  },
  page2: {
    flex: 1,
    backgroundColor: 'yellow'
  },
  image: {
    height: 22,
    width: 22
  }
});
