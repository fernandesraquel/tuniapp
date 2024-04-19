import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  SplashScreen,
  SignInScreen,
} from '../screens';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Splash" >
      <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown: false}}/>
      <Stack.Screen name="SignIn" component={SignInScreen} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}