import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import PhotoDetails from '../pages/photo_details/photo_details'
import Bottom from './material_bottom'
import Top from './material_top'
import Drawer from './drawer'

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Feed" component={Drawer} />
      <Stack.Screen name="Foto" component={PhotoDetails} />
    </Stack.Navigator>
  );
}