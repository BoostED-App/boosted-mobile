import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CalendarRoot from '../screens/Home/Calendar/Root';
import ScheduleRoot from '../screens/Home/Schedule/Root';
import ClubRoot from '../screens/Home/Clubs/Root';
import ExploreRoot from '../screens/Home/Explore/Root';
import MenuRoot from '../screens/Home/Menu/Root';

const Tab = createBottomTabNavigator();

export default function RootTabs() {

    const { colors } = useTheme();

    return (
        <Tab.Navigator
            initialRouteName="Explore"
            screenOptions={{
                title: null,
                tabBarShowLabel: false,
                tabBarActiveTintColor: colors.accent,
                headerStyle: { 
                    shadowColor: 'transparent',
                    backgroundColor: colors.primary500
                },
                tabBarStyle: {
                    backgroundColor: colors.primary500
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
                component={CalendarRoot}
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