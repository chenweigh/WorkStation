/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import CodePush from 'react-native-code-push';
const codePushOptions = {
  installMode: CodePush.InstallMode.ON_NEXT_RESUME,
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
};
const entry = CodePush(codePushOptions)(App);

AppRegistry.registerComponent(appName, () => entry);
