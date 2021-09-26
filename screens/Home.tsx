import { StatusBar } from 'expo-status-bar';
import {
    Box,
    Heading,
    ScrollView,
    Text,
} from 'native-base';
import React from 'react';

export default function Home() {
    return (
        <Box flex={1} safeArea px={5} py={3}>
            <ScrollView flex={1}>
                <Heading size="md">
                    Currently Watching
                </Heading>

                {/* TODO: Add Boxes */}
            </ScrollView>

            <StatusBar style="auto" />
        </Box>
    );
}
