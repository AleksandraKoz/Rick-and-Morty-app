import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { CharacterListScreen } from './screens/CharacterList';
import { FavoriteCharactersScreen } from './screens/FavoriteCharacters';
import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export const TabNavigationStack = () => {
  const insets = useSafeAreaInsets();
  
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveTintColor: "#DAE4DC",
        tabBarActiveBackgroundColor: "#224229",
        tabBarInactiveBackgroundColor: "#162C1B",
        tabBarIconStyle: { paddingTop: 0, marginTop: 8 },
        tabBarLabelStyle: { fontStyle: '400', fontSize: 14 },
        tabBarStyle: {
          position: 'absolute',
          height: 75 + insets.bottom,
          paddingBottom: insets.bottom,
        },
        tabBarBackground: () => (
          <View style={{ flex: 1, backgroundColor: '#162C1B' }}/>
        ),
      }}
    >
      <Tab.Screen
        name="ALL CHARACTERS"
        component={CharacterListScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={size / 1.5} color={color}/>
          ),
        }}
      />
      <Tab.Screen
        name="LIKED CHARACTERS"
        component={FavoriteCharactersScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="star" size={size / 1.5} color={color}/>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
