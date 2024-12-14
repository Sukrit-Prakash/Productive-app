import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from "../(tabs)/login";
import TabTwoScreen from "../(tabs)/mytask"
const Stack = createStackNavigator();

const AppNavigator=()=>(
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
     <Stack.Screen name ="Login"  component={LoginScreen} /> 
     <Stack.Screen name ="Explore"  component={TabTwoScreen} /> 
     </Stack.Navigator>
    </NavigationContainer>
)
export default AppNavigator;