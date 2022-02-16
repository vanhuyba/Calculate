import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CalculateScreen from '../screens/Calculate';
import ResultScreen from '../screens/Result';

const Tab = createBottomTabNavigator();

const AppNavigation = () => (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen
                name="CalculateScreen"
                component={CalculateScreen}
                options={{ title: 'Calculate' }}
            />
            <Tab.Screen
                name="ResultScreen"
                component={ResultScreen}
                options={{ title: 'Result' }}
            />
        </Tab.Navigator>
    </NavigationContainer>
);

export default AppNavigation;
