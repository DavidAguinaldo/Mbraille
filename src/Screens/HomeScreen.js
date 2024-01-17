import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import Transcription from "./Transcription";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AntDesign } from "@expo/vector-icons";
import { myColors } from "../Utils/MyColors";
import About from "./About";
import Profile from "./Profile";

const botNav = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <botNav.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: myColors.primary,
      }}
    >
      <botNav.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-sharp" size={20} color={color} />
          ),
        }}
      />
      <botNav.Screen
        name="Transcription"
        component={Transcription}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="document-attach" size={20} color={color} />
          ),
        }}
      />

      <botNav.Screen
        name="About"
        component={About}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="team" color={color} size={ 20 } />
          ),
        }}
      />

      <botNav.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" size={20} color= {color} />
          ),
        }}
      />
    </botNav.Navigator>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
