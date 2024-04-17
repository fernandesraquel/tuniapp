import { createStackNavigator } from '@react-navigation/stack';
import {
  SignInScreen,
  SignUpScreen } from '../screens';

const Stack = createStackNavigator();

export default function StackNavigation() {

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}