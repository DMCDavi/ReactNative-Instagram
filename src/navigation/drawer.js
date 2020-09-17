import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Feed from '../pages/dashboard/dashboard'
import Conversations from '../pages/conversations/conversations'

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Conversas" component={Conversations} />
    </Drawer.Navigator>
  );
}