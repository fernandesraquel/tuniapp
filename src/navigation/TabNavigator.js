import React from 'react';

import { CommonActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation } from 'react-native-paper';
import { HomeScreen, ProfileScreen, NotificationsScreen, ChatScreen } from '../screens';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Lista"
      screenOptions={{
        headerShown: false,
      }}
      tabBar={({ navigation, state, descriptors, insets }) => (
        <BottomNavigation.Bar
          navigationState={state}
          safeAreaInsets={insets}
          onTabPress={({ route, preventDefault }) => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (event.defaultPrevented) {
              preventDefault();
            } else {
             navigation.dispatch({
                ...CommonActions.navigate(route.name, route.params),
                target: state.key,
              });
            }
          }}
          renderIcon={({ route, focused, color }) => {
            const { options } = descriptors[route.key];
            if (options.tabBarIcon) {
              return options.tabBarIcon({ focused, size: 24, color });
            }

            return null;
          }}
          getLabelText={({ route }) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.title;

            return label;
          }}
          activeColor="#fff"
          inactiveColor="#B4B4B8"
          shifting={false}
          getColor={({ route }) => {
            const { options } = descriptors[route.key];
            const backgroundColor = options.tabBarBackground;
          
            return backgroundColor !== undefined ? backgroundColor : '#4051b2';
          }}         
        />
      )}
    >
      <Tab.Screen
        name="Lista"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Início',
          tabBarIcon: ({  size, color }) => {
            return <MaterialIcons name="list" size={size} color={color} />; 
          },
        }}
      />     
      <Tab.Screen 
        name="Mensagens" 
        component={ChatScreen} 
        options={{
          tabBarLabel: 'Conversas',
          tabBarIcon: ({ size, color }) => {
            return <MaterialIcons name="sms" size={size} color={color} />;
          },
        }} 
      />
      <Tab.Screen 
        name="Notificações" 
        component={NotificationsScreen} 
        options={{
          tabBarLabel: 'Notificações',
          tabBarIcon: ({ size, color }) => {
            return <MaterialIcons name="notifications" size={size} color={color} />;
          },
        }} 
      />
      <Tab.Screen 
        name="Perfil" 
        component={ProfileScreen} 
        options={{
          tabBarLabel: 'Rotas',
          tabBarIcon: ({ size, color }) => {
            return <MaterialIcons name="route" size={size} color={color} />;
          },
        }} 
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
