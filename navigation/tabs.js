import React from 'react';
import { 
    StyleSheet,
    Image
} from 'react-native';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';

import { Home } from '../Screens';

import { COLORS, icons } from '../constants';


const Tab = createBottomTabNavigator();


const Tabs = () => {
  return (
   <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: true,
        }}
   >
       <Tab.Screen 
            name="Home"
            component={Home}
            options={{
                tabBarIcon: ({focused}) => (
                    <Image 
                        source={icons.cutlery}
                        resizeMode='contain'
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? COLORS.primary : COLORS.secondary
                        }}
                    />
                )
            }}
       />

<Tab.Screen 
            name="Search"
            component={Home}
            options={{
                tabBarIcon: ({focused}) => (
                    <Image 
                        source={icons.search}
                        resizeMode='contain'
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? COLORS.primary : COLORS.secondary
                        }}
                    />
                )
            }}
       />

<Tab.Screen 
            name="Like"
            component={Home}
            options={{
                tabBarIcon: ({focused}) => (
                    <Image 
                        source={icons.like}
                        resizeMode='contain'
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? COLORS.primary : COLORS.secondary
                        }}
                    />
                )
            }}
       />

<Tab.Screen 
            name="User"
            component={Home}
            options={{
                tabBarIcon: ({focused}) => (
                    <Image 
                        source={icons.user}
                        resizeMode='contain'
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? COLORS.primary : COLORS.secondary
                        }}
                    />
                )
            }}
       />
   </Tab.Navigator>
  )
}

export default Tabs

const styles = StyleSheet.create({})