import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  StatusBar,
  View,
  Text,
  Image
} from 'react-native';
import PropTypes from 'prop-types';

const NAV_BAR_HEIGHT_ANDROID = 50;
const NAV_BAR_HEIGHT_IOS = 44;
const STATUS_BAR_HEIGHT = 20;
const STATUS_BAR_SHAPE = {
  backgroundColor: PropTypes.string,
  barStyle: PropTypes.oneOf(['default', 'light-content', 'dark-content']),
  hidden: PropTypes.bool
};

export default class NavigationBar extends Component {
  static propTypes = {
    style: View.propTypes.style,
    title: PropTypes.string,
    titleView: PropTypes.element,
    hide: PropTypes.bool,
    leftBtn: PropTypes.element,
    rightBtn: PropTypes.element,
    statusBar: PropTypes.shape(STATUS_BAR_SHAPE)
  }

  static defaultProps = {
    statusBar: {
      barStyle: 'light-content',
      hidden: false
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      hide: false
    }
  }

  render() {
    let statusBar = <View style = {[styles.statusBar, this.props.statusBar]}>
      <StatusBar {...this.props.statusBar}/>
    </View>;

    let titleView = this.props.titleView ? this.props.titleView : <Text style = {styles.title}>{this.props.title}</Text>;

    let content = <View style = {styles.navBar}>
      {this.props.leftBtn}
      <View style = {styles.titleViewContainer}>{titleView}</View>
      {this.props.rightBtn}
    </View>;

    return (
      <View style = {[styles.container, this.props.style]}>
        {statusBar}
        {content}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray'
  },
  navBar: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    height: Platform.OS === 'ios' ? NAV_BAR_HEIGHT_IOS : NAV_BAR_HEIGHT_ANDROID,
  },
  titleViewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    right: 40,
    bottom: 0,
    left: 40
  },
  title: {
    fontSize: 20,
    color: 'white'
  },
  statusBar: {
    height: Platform.OS === 'ios' ? STATUS_BAR_HEIGHT : 0
  }
});
