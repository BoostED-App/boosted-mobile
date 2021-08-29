import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { colors, fontSizes } from '../style/index';
import Upcoming from '../screens/Home/Calendar/Upcoming';
import Past from '../screens/Home/Calendar/Past';

const Tab = createMaterialTopTabNavigator();

export default function CalendarNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                swipeEnabled: true,
                tabBarActiveTintColor: colors.accent,
                tabBarInactiveTintColor: colors.primary300,
                tabBarStyle: { backgroundColor: colors.primary500 },
                tabBarLabelStyle: {
                    fontSize: fontSizes.h4,
                    fontWeight: '600',
                    textTransform: 'none'
                },
            }}
        >
            <Tab.Screen
                name="Upcoming"
                component={Upcoming}
            />
            <Tab.Screen
                name="Past"
                component={Past}
            />
        </Tab.Navigator>
    )
}