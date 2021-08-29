import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RootTabs from './RootTabs';
import Landing from '../screens/Auth/Landing';

import StudentLogin from '../screens/Auth/Student/Login';
import StudentLanding from '../screens/Auth/Student/Landing';
import StudentRegister from '../screens/Auth/Student/Register';

import AdminLogin from '../screens/Auth/Admin/Login';
import AdminLanding from '../screens/Auth/Admin/Landing';
import AdminRegister from '../screens/Auth/Admin/Register';

import SchoolLanding from '../screens/Auth/School/Landing';
import SchoolPurchase from '../screens/Auth/School/Purchase';
import SchoolActivation from '../screens/Auth/School/Activation';
import SchoolActivationCode from '../screens/Auth/School/Activation.Code';
import SchoolActivationTheme from '../screens/Auth/School/Activation.Theme';
import SchoolActivationSecurity from '../screens/Auth/School/Activation.Security';
import SchoolActivationFeatures from '../screens/Auth/School/Activation.Features';

const Stack = createNativeStackNavigator();

export default function RootPages() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                headerBackVisible: true
            }}
        >
            <Stack.Screen 
                name='Landing' 
                component={Landing}
            />


            <Stack.Screen 
                name='StudentLanding' 
                component={StudentLanding}
            />
            <Stack.Screen 
                name='StudentLogin' 
                component={StudentLogin}
            />
            <Stack.Screen 
                name='StudentRegister' 
                component={StudentRegister}
            />

            <Stack.Screen 
                name='AdminLanding' 
                component={AdminLanding}
            />
            <Stack.Screen 
                name='AdminLogin' 
                component={AdminLogin}
            />
            <Stack.Screen 
                name='AdminRegister' 
                component={AdminRegister}
            />


            <Stack.Screen 
                name='SchoolLanding' 
                component={SchoolLanding}
            />
            <Stack.Screen 
                name='SchoolPurchase' 
                component={SchoolPurchase}
            />
            <Stack.Screen 
                name='SchoolActivation' 
                component={SchoolActivation}
            />
            <Stack.Screen 
                name='SchoolActivation-Theme' 
                component={SchoolActivationTheme}
            />
            <Stack.Screen 
                name='SchoolActivation-Code' 
                component={SchoolActivationCode}
            />
            <Stack.Screen 
                name='SchoolActivation-Security' 
                component={SchoolActivationSecurity}
            />
            <Stack.Screen 
                name='SchoolActivation-Features' 
                component={SchoolActivationFeatures}
            />


            <Stack.Screen 
                name='StudentRoot' 
                component={RootTabs}
            />
            

            <Stack.Screen 
                name='AdminRoot' 
                component={RootTabs}
            />
        </Stack.Navigator>
    )
}