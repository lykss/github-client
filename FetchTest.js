import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import NavigationBar from './NavigationBar';

const FETCH_URL = 'http://rap.taobao.org/mockjsdata/11793/test';
const SUBMIT_URL = 'http://rap.taobao.org/mockjsdata/11793/submit';

export default class FetchTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: ''
    };
  }

  onLoad(url) {
    fetch(url)
      .then(response => response.json())
      .then(result => {
        this.setState({
          result: JSON.stringify(result)
        })
      })
      .catch(error => {
        this.setState({
          result: JSON.stringify(error)
        })
      })
  }

  onSubmit(url, data) {
    let options = {
      method: 'POST',
      header: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };

    fetch(url, options)
      .then(response => response.json())
      .then(result => {
        this.setState({
          result: JSON.stringify(result)
        })
      })
      .catch(error => {
        this.setState({
          result: JSON.stringify(error)
        })
      })
  }

  render() {
    return (
      <View style = {styles.container}>
        <NavigationBar
          title = 'Fetch的使用'
        />
        <View>
          <Text
            style = {styles.tips}
            onPress = {() => this.onLoad(FETCH_URL)}
          >获取数据</Text>
          <Text style = {styles.tips}>返回数据：{this.state.result}</Text>
        </View>
        <View>
          <Text
            style = {styles.tips}
            onPress = {() => this.onSubmit(SUBMIT_URL, {userName: '小明', password: '123456'})}
          >提交数据</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tips: {
    fontSize: 18
  }
});
