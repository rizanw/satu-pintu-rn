import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./main/HomeScreen";
import ProfileScreen from "./main/ProfileScreen";
import DiscoverScreen from "./main/DiscoverScreen";
import FavoriteScreen from "./main/FavoriteScreen";
import { colors } from "../res/colors";
import { MaterialCommunityIcons, FontAwesome, Fontisto } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default class Main extends React.Component {
  render() {
    return (
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          activeTintColor: colors.PRIMARY_BLUE,
        }}
        backBehavior="initialRoute"
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons
                name="view-dashboard"
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Favorite"
          component={FavoriteScreen}
          options={{
            tabBarIcon: ({ size, color }) => (
              <FontAwesome
                name="star"
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Discover"
          component={DiscoverScreen}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Fontisto
                name="earth"
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ size, color }) => (
              <FontAwesome
                name="user"
                size={size}
                color={color}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}
