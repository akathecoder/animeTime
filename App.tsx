import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Home from './screens/Home';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NativeBaseProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    {true ? (
                        <Stack.Screen
                            name="SignIn"
                            component={Login}
                            options={{
                                headerShown: false,
                            }}
                        />
                    ) : (
                        <Stack.Screen
                            name="Home"
                            component={Home}
                            options={{
                                headerShown: false,
                            }}
                        />
                    )}
                </Stack.Navigator>
            </NavigationContainer>
        </NativeBaseProvider>
    );
}
