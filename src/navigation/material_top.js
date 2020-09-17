import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Feed from '../pages/dashboard/dashboard'
import Conversations from '../pages/conversations/conversations'

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Conversas" component={Conversations} />
    </Tab.Navigator>
  );
}