import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, ProfileScreen, NotificationsScreen, ChatScreen } from '../screens';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Lista"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Lista') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Mensagens') {
            iconName = focused ? 'chat' : 'chat';
          } else if (route.name === 'Perfil') {
            iconName = focused ? 'person' : 'person';
          } else if (route.name === 'Notificações') {
            iconName = focused ? 'notifications' : 'notifications';
          }
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#4051b2',
        tabBarInactiveTintColor: '#B4B4B8',
        tabBarStyle: [
          {
            "display": "flex"
          },
          null
        ]
      })}
    >
      <Tab.Screen name="Lista" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Mensagens" component={ChatScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Notificações" component={NotificationsScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Perfil" component={ProfileScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
