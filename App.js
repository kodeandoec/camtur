import React from 'react';

import HomeMenu from './src/navigation/HomeMenu';

import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {

  return (
    <SafeAreaProvider>
        <HomeMenu />
    </SafeAreaProvider>
  );
};
export default App;
