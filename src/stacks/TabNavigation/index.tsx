import React from 'react';
import { View } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CharacterListScreen } from './screens/CharacterList';
import { FavoriteCharactersScreen } from './screens/FavoriteCharacters';
import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export const TabNavigationStack = () => {
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
        tabBarStyle: { position: 'absolute', paddingBottom: 0, paddingTop: -16 },
        tabBarBackground: () => (
          <View style={{ backgroundColor: '#162C1B' }}/>
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
