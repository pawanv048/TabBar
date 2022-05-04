import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home, Restaurant, OrderDelivery } from './Screens';
import Tabs from './navigation/tabs';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={Home}
      >

        <Stack.Screen name='Home' component={Tabs}/>
        <Stack.Screen name='Restaurant' component={Restaurant}/>
        <Stack.Screen name='OrderDelivery' component={OrderDelivery}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}