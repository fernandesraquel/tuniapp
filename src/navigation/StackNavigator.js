import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  SplashScreen,
  SignInScreen,
  SignUpScreen,
} from '../screens';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Splash" >
      <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown: false}}/>
      <Stack.Screen name="SignIn" component={SignInScreen} options={{headerShown: false}} />
      <Stack.Screen 
        name="SignUp" 
        component={SignUpScreen} 
        options={{
          headerTitle: '',
          headerTintColor: '#fff',
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: '#4051b2', 
          },
        }}
      />
    </Stack.Navigator>
  );
}