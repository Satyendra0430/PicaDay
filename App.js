import React from 'react';
import { StatusBar, View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ExploreCatogriesScreen from './src/screens/ExploreCatogriesScreen';
import TestingScreen from './src/screens/TestingScreen';
import SplashScreen from './src/screens/SplashScreen';
import SimpleImagePicker from './src/screens/SimpleImagePicker';

const Stack = createStackNavigator();

export default class App extends React.Component {
  componentDidMount() { }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {/* <Stack.Screen name="SimpleImagePicker" component={SimpleImagePicker} /> */}
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="ExploreCatogries" component={ExploreCatogriesScreen} />

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
