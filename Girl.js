import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';
import NavigationBar from './js/common/NavigationBar';

export default class Girl extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderBtn(image) {
    return (
      <TouchableOpacity
        onPress = {() => this.props.navigator.pop()}
      >
        <Image style = {styles.icon} source = {image}></Image>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <NavigationBar
          title = {'Girl'}
          style = {{
            backgroundColor: '#EE6363'
          }}
          statusBar = {{
            backgroundColor: '#EE6363'
          }}
          leftBtn = {
            this.renderBtn(require('./res/images/ic_arrow_back_white_36pt.png'))
          }
          rightBtn = {
            this.renderBtn(require('./res/images/ic_star.png'))
          }
        />
        <Text style={styles.text}>I am Girl.</Text>
        <Text style={styles.text}>我收到了男孩送的：{this.props.word}</Text>
        <Text style={styles.text}
          onPress = {() => {
            this.props.onCallBack('一盒巧克力');
            this.props.navigator.pop();
          }}
        >回赠巧克力</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 20
  },
  icon: {
    margin: 5,
    width: 22,
    height: 22
  }
});
