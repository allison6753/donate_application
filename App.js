import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from "@react-navigation/native"

import { Login } from "./src/screens/Login";
import { Home } from './src/screens/Home';
import { Sign_up } from './src/screens/Sign_up';
import { UserType } from './src/screens/UserType';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="UserType" component={UserType} />
        <Stack.Screen name="Sign_up" component={Sign_up} />
      </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
