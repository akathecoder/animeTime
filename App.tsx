import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base';

import Home from './screens/Home';
import Login from './screens/Login';
import Search from './screens/Search';
import Settings from './screens/Settings';
import { RootStackParamList } from './utilities/NavigationTypes';

const Stack =
    createNativeStackNavigator<RootStackParamList>();

export default function App() {
    return (
        <NativeBaseProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name="Login"
                        component={Login}
                    />
                    <Stack.Screen
                        name="Search"
                        component={Search}
                    />
                    <Stack.Screen
                        name="Settings"
                        component={Settings}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </NativeBaseProvider>
    );
}
