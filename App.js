import React from 'react';

import HomeMenu from './src/navigation/HomeMenu';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);
const App = () => {

  return (
    <SafeAreaProvider>
        <HomeMenu />
    </SafeAreaProvider>
  );
};
export default App;
