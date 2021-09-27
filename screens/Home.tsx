import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBar from '../components/TabBar';
import Search from './Search';
import Settings from './Settings';
import Favourite from './Favourite';

const Tab = createBottomTabNavigator();

const Home = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBar={(props) => <TabBar {...props} />}
        >
            <Tab.Screen
                name="Favourite"
                component={Favourite}
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
    );
};

export default Home;
