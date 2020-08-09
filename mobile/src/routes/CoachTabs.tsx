import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import CoachList from '../pages/CoachList';
import Favorites from '../pages/Favorites/intex';


const { Navigator, Screen } = createBottomTabNavigator();

const CoachTabs = () => {
  return (
    <Navigator tabBarOptions={{
      style: {
        elevation: 0,
        shadowOpacity: 0,
        height: 64,
      },
      tabStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
      },
      iconStyle: {
        flex: 0,
        width: 20,
        height: 20
      },
      labelStyle: {
        fontFamily: 'Archivo_700Bold',
        fontSize: 13,
        marginLeft: 16
      },
      inactiveBackgroundColor: '#FAFAFC',
      activeBackgroundColor: 'EBEBF5',
      inactiveTintColor: '#C1BCCC',
      activeTintColor: '#32264D'
    }}>
      <Screen name="CoachList" component={CoachList}
        options={{
          tabBarLabel: 'Sessions',
          tabBarIcon: ({ color, size }) => {
            return (
              <Ionicons name="ios-easel" size={size} color={color} />
            );
          }
        }} />
      <Screen name="Favorites" component={Favorites}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({ color, size }) => {
            return (
              <Ionicons name="ios-heart" size={size} color={color} />
            );
          }
        }}
      />
    </Navigator>
  )
}

export default CoachTabs
