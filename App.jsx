import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

// Importe os componentes das telas
import InitialScreen from './app/InitialScreen';
import HomeScreen from './app/HomeScreen';
import LoginScreen from './app/LoginScreen';
import SignupScreen from './app/SignUpScreen';
import ServicesScreen from './app/ServicesScreen';
import ProfileScreen from './app/ProfileScreen';
import SettingsScreen from './app/SettingsScreen';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="InitialScreen">
        <Stack.Screen name="Initial" component={InitialScreen} options={{headerShown:false}} />
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
        <Stack.Screen name="SignUp" component={SignupScreen} options={{headerShown:false}} />
        <Stack.Screen name="Services" component={ServicesScreen} options={{headerShown:false}} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown:false}} />
        <Stack.Screen name="Settings" component={SettingsScreen} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

AppRegistry.registerComponent(appName, () => App);

export default App;
