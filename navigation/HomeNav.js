import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Screens/Home';
import MonthlyStatement from '../Screens/MonthlyStatement';
import BestUsers from '../Screens/BestUsers';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="monthly_statement"
        component={MonthlyStatement}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="best_users"
        component={BestUsers}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}