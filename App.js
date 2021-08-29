import React from 'react';

import RootTabs from './src/navigation/RootTabs';
import RootPages from './src/navigation/RootPages';
import { NavigationContainer } from '@react-navigation/native';
import { darkTheme } from './src/style';

export default function App() {
  return (
    <NavigationContainer theme={darkTheme}>
      <RootPages />
    </NavigationContainer>
  );
}