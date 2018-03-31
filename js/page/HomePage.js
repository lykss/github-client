import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Navigator from 'react-native-deprecated-custom-components';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'tb_popular'
    };
  }

  render() {
    return(
      <View style = {styles.container}>
        <TabNavigator>
          <TabNavigator.Item
            selected = {this.state.selectedTab === 'tb_popular'}
            selectedTitleStyle = {{color: 'red'}}
            title = 'Popular'
            renderIcon = {() => <Image style={styles.image} source={require('../../res/images/ic_polular.png')}/>}
            renderSelectedIcon = {() => <Image style={[styles.image, {tintColor: 'red'}]} source={require('../../res/images/ic_polular.png')}/>}
            badgeText = '1'
            onPress = {() => this.setState({selectedTab: 'tb_popular'})}
          >
            <View style={styles.page1}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected = {this.state.selectedTab === 'tb_trending'}
            selectedTitleStyle = {{color: 'red'}}
            title = 'Trending'
            renderIcon = {() => <Image style={styles.image} source={require('../../res/images/ic_trending.png')}/>}
            renderSelectedIcon = {() => <Image style={[styles.image, {tintColor: 'red'}]} source={require('../../res/images/ic_trending.png')}/>}
            badgeText = '2'
            onPress = {() => this.setState({selectedTab: 'tb_trending'})}
          >
            <View style={styles.page2}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected = {this.state.selectedTab === 'tb_favorite'}
            selectedTitleStyle = {{color: 'red'}}
            title = 'Favorite'
            renderIcon = {() => <Image style={styles.image} source={require('../../res/images/ic_favorite.png')}/>}
            renderSelectedIcon = {() => <Image style={[styles.image, {tintColor: 'red'}]} source={require('../../res/images/ic_favorite.png')}/>}
            badgeText = '3'
            onPress = {() => this.setState({selectedTab: 'tb_favorite'})}>
            <View style={styles.page1}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected = {this.state.selectedTab === 'tb_my'}
            selectedTitleStyle = {{color: 'red'}}
            title = 'My'
            renderIcon = {() => <Image style={styles.image} source={require('../../res/images/ic_my.png')}/>}
            renderSelectedIcon = {() => <Image style={[styles.image, {tintColor: 'red'}]} source={require('../../res/images/ic_my.png')}/>}
            onPress = {() => this.setState({selectedTab: 'tb_my'})}>
            <View style={styles.page2}></View>
          </TabNavigator.Item>
        </TabNavigator>
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
