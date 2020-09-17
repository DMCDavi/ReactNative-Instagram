import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Feed from '../pages/dashboard/dashboard'
import Conversations from '../pages/conversations/conversations'
import Stack from './stack'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Feed',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Conversas"
        component={Conversations}
        options={{
          tabBarLabel: 'Conversas',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}