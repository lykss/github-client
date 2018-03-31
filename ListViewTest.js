import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ListView,
  Image,
  RefreshControl
} from 'react-native';
import Toast, {DURATION} from 'react-native-easy-toast';
import NavigationBar from './NavigationBar';

let mockData = {
  result: [{
    email: '1@example.com',
    fullName: '张三1'
  }, {
    email: '2@example.com',
    fullName: '张三2'
  }, {
    email: '3@example.com',
    fullName: '张三3'
  }, {
    email: '4@example.com',
    fullName: '张三4'
  }, {
    email: '5@example.com',
    fullName: '张三5'
  }, {
    email: '6@example.com',
    fullName: '张三6'
  }, {
    email: '7@example.com',
    fullName: '张三7'
  }, {
    email: '8@example.com',
    fullName: '张三8'
  }, {
    email: '9@example.com',
    fullName: '张三9'
  }, {
    email: '10@example.com',
    fullName: '张三10'
  }, {
    email: '11@example.com',
    fullName: '张三11'
  }, {
    email: '12@example.com',
    fullName: '张三12'
  }]
}

export default class ListViewTest extends Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2});
    this.state = {
      dataSource: dataSource.cloneWithRows(mockData.result),
      isLoading: true
    };
    this.onLoad();
  }

  renderRow(item) {
    return (
      <View style = {styles.row}>
        <TouchableOpacity
          onPress = {() => {
            this.toast.show(`你单击了${item.fullName}`, DURATION.LENGTH_SHORT)
          }}
        >
          <Text style = {styles.tips}>{item.fullName}</Text>
          <Text style = {styles.tips}>{item.email}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
    return (
      <View key = {rowID} style = {styles.line}></View>
    );
  }

  renderFooter() {
    return (
      <View>
        <Image style = {{height: 100, width: 400}} source = {{uri: 'http://bpic.588ku.com/back_pic/02/66/53/59578b189b1bf9f.jpg!ww800'}}/>
      </View>
    );
  }

  onLoad() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      });
    }, 2000);
  }

  render() {
    return (
      <View style = {styles.container}>
        <NavigationBar
          title = 'ListViewTest'
        />
        <ListView
          dataSource = {this.state.dataSource}
          renderRow = {item => this.renderRow(item)}
          renderSeparator = {(sectionID, rowID, adjacentRowHighlighted) => this.renderSeparator(sectionID, rowID, adjacentRowHighlighted)}
          renderFooter = {() => this.renderFooter()}
          refreshControl = {
            <RefreshControl
              refreshing = {this.state.isLoading}
              onRefresh = {() => this.onLoad()}
            />
          }
        />
        <Toast ref = {toast => this.toast = toast}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  tips: {
    fontSize: 18
  },
  row: {
    height: 50
  },
  line: {
    height: 1,
    backgroundColor: 'black'
  }
});
