import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NativeBaseProvider } from 'native-base';

import Home from './screens/Home';
import Search from './screens/Search';
import Settings from './screens/Settings';
import TabBar from './components/TabBar';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NativeBaseProvider>
            <NavigationContainer>
                <Tab.Navigator
                    initialRouteName="Home"
                    tabBar={(props) => (
                        <TabBar {...props} />
                    )}
                >
                    <Tab.Screen
                        name="Home"
                        component={Home}
                        options={{
                            headerShown: false,
                        }}
                    />

                    <Tab.Screen
                        name="Search"
                        component={Search}
                        options={{
                            headerShown: false,
                        }}
                    />

                    <Tab.Screen
                        name="Settings"
                        component={Settings}
                        options={{
                            headerShown: false,
                        }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        </NativeBaseProvider>
    );
}
