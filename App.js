import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "./src/Screens/Splash";
import Login from "./src/Screens/Login";
import Signup from "./src/Screens/Signup";
import HomeScreen from "./src/Screens/HomeScreen";
import About from "./src/Screens/HomeScreen";
import Profile from "./src/Screens/Profile";



const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer independent= { true }>
      <Stack.Navigator initialRouteName= "Splash" screenOptions={{ headerShown: false, }}>
        <Stack.Screen name="Splash" component={ Splash } />
        <Stack.Screen name="Login" component={ Login }/>
        <Stack.Screen name="Signup" component={ Signup }/>
        <Stack.Screen name= "HomeScreen" component={ HomeScreen }/>
        <Stack.Screen name= "About" component={ About }/>
        <Stack.Screen name= "Profile" component={ Profile }/>
      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default App;