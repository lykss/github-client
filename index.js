import { AppRegistry } from 'react-native';
import App from './App';
import setup from './js/page/setup';

/*
 * APP启动引导流程
 * APP启动
 * 启动页(读取预配置文件)
 * 状态初始化(从服务器获取配置，更新本地数据状态)
 * 首页
 */
/*
 * APP启动(加载React Native引擎)
 * index.js(js部分入口)
 * setup.js(相关组件及服务初始化)
 * WelcomePage.js(欢迎轮播图)
 * HomePage.js
 */
AppRegistry.registerComponent('GithubClient', () => setup);
