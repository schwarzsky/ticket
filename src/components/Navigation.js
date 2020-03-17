import React from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';

import Main from '../views/Main';
import Saveds from '../views/Saveds';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function Navigation(){
    return (
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Home" component={Main} style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}/>
                    <Tab.Screen name="Saveds" component={Saveds} style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}/>
                </Tab.Navigator>
            </NavigationContainer>
      );
}