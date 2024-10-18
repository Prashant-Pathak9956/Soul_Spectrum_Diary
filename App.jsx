import { StyleSheet } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler'; // Import this
import HomeScreen from './src/screen/HomeScreen';
// import LoginScreen from './src/screen/LoginScreen';
import LoginScreen from "./src/screen/LoginScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="LOGIN" component={LoginScreen} />
          
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({});
