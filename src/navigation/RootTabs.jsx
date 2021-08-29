import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { colors, fontSizes } from '../style';
import CalendarNavigator from './CalendarNavigator';
import ScheduleRoot from '../screens/Home/Schedule/Root';
import ClubRoot from '../screens/Home/Clubs/Root';
import ExploreRoot from '../screens/Home/Explore/Root';
import MenuRoot from '../screens/Home/Menu/Root';

const Tab = createBottomTabNavigator();

export default function RootTabs() {


    return (
        <Tab.Navigator
            initialRouteName="Explore"
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: colors.accent,
                headerStatusBarHeight: 65,
                headerTitleAlign: 'left',
                headerStyle: { 
                    shadowColor: 'transparent',
                    backgroundColor: colors.primary500,
                },
                headerTitleStyle: {
                    fontSize: fontSizes.h2,
                    fontWeight: '700',
                    paddingLeft: 10,
                    color: colors.white,
                },
                tabBarStyle: {
                    backgroundColor: colors.primary500,
                }
            }}
        >
            <Tab.Screen 
                name="Explore" 
                component={ExploreRoot} 
                options={{
                    tabBarIcon: ({ color }) => <Ionicons name="ios-compass-outline" size={26} color={color} />
                }}
            />
            <Tab.Screen
                name="Calendar"
                component={CalendarNavigator}
                options={{
                    tabBarIcon: ({ color }) => <Ionicons name="ios-calendar-sharp" size={26} color={color} />
                }}
            />
            <Tab.Screen
                name="Schedule"
                component={ScheduleRoot}
                options={{
                    tabBarIcon: ({ color }) => <Ionicons name="ios-time-outline" size={26} color={color} />
                }}
            />
            <Tab.Screen
                name="Clubs"
                component={ClubRoot}
                options={{
                    tabBarIcon: ({ color }) => <Ionicons name="ios-people-outline" size={26} color={color} />
                }}
            />
            <Tab.Screen
                name="Menu"
                component={MenuRoot}
                options={{
                    tabBarIcon: ({ color }) => <Ionicons name="ios-fast-food-outline" size={26} color={color} />
                }}
            />
        </Tab.Navigator>
    )
}