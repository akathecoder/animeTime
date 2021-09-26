import { StatusBar } from 'expo-status-bar';
import {
    Box,
    Heading,
    ScrollView,
    Text,
} from 'native-base';
import React from 'react';

const Settings = () => {
    return (
        <Box flex={1} safeArea px={5} py={3}>
            <ScrollView flex={1}>
                <Heading size="md">Settings</Heading>

                {/* TODO: Add Settings Icons */}
            </ScrollView>

            <StatusBar style="auto" />
        </Box>
    );
};

export default Settings;
