import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import Navigator from 'react-native-deprecated-custom-components';
import WelcomePage from './WelcomePage';

function setup() {
  // 进行一些初始化配置
  class Root extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    renderScene(route, navigator) {
      let Component = route.component;
      return <Component navigator = {navigator} {...route.params}/>
    }

    render() {
      return (
        <Navigator.Navigator
          initialRoute = {{component: WelcomePage}}
          renderScene = {(route, navigator) => this.renderScene(route, navigator)}
        />
      );
    }
  }

  return <Root/>;
}

module.exports = setup;
