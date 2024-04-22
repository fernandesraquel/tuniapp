import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  SplashScreen,
  SignInScreen,
  SignUpScreen,
  ResetPasswordScreen,
  NewPasswordScreen,
} from '../screens';
import TabNavigator from './TabNavigator';

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
      <Stack.Screen 
        name="ResetPassword" 
        component={ResetPasswordScreen} 
        options={{
          headerTitle: '',
          headerTintColor: '#fff',
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: '#4051b2', 
          },
        }}
      />
      <Stack.Screen 
        name="NewPassword" 
        component={NewPasswordScreen} 
        options={{
          headerTitle: '',
          headerTintColor: '#fff',
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: '#4051b2', 
          },
        }}
      />
      <Stack.Screen name="Home" component={TabNavigator} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}