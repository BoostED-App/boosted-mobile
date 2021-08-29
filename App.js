import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import RootPages from './src/navigation/RootPages';
import { darkTheme } from './src/style';

export default function App() {
  return (
    <NavigationContainer theme={darkTheme}>
      <RootPages />
    </NavigationContainer>
  );
}