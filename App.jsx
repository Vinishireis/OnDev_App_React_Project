import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

// Importe os componentes das telas
import HomeScreen from './app/Home';
import LoginScreen from './app/LoginScreen';
import SignupScreen from './app/SignUpScreen';
import ServicesScreen from './app/ServicesScreen';
import MessagesScreen from './app/MessageScreen';
import SettingsScreen from './app/SettingsScreen';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
        <Stack.Screen name="SignUp" component={SignupScreen} options={{headerShown:false}} />
        <Stack.Screen name="Services" component={ServicesScreen} options={{headerShown:false}} />
        <Stack.Screen name="Messages" component={MessagesScreen} options={{headerShown:false}} />
        <Stack.Screen name="Settings" component={SettingsScreen} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

AppRegistry.registerComponent(appName, () => App);

export default App;
