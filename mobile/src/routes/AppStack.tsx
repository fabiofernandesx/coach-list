import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { } from '@react-navigation/stack'
import { createStackNavigator } from '@react-navigation/stack'
import Landing from '../pages/Landing';
import CoachRegister from '../pages/CoachRegister';
import CoachTabs from './CoachTabs';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Landing" component={Landing} />
        <Screen name="CoachRegister" component={CoachRegister} />
        <Screen name="Coaches" component={CoachTabs} />
      </Navigator>
    </NavigationContainer>
  )
}

export default AppStack;
