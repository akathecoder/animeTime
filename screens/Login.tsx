import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    Box,
    Button,
    Center,
    Heading,
    Icon,
    Image,
    Text,
} from 'native-base';
import { logo } from '../utilities/images';
import { MaterialIcons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as Linking from 'expo-linking';
import { getAccessTokenFromResponse } from '../utilities/getAccessTokenFromURL';
import {
    ANILIST_API_ENDPOINT,
    ANILIST_CLIENT_ID,
} from '@env';

const Login = () => {
    const [result, setResult] = useState<string>(
        Linking.createURL('/'),
    );

    const _openAuthSessionAsync = async () => {
        try {
            let requiredResult =
                await WebBrowser.openAuthSessionAsync(
                    `${ANILIST_API_ENDPOINT}/oauth/authorize?client_id=${ANILIST_CLIENT_ID}&response_type=token`,
                    Linking.createURL('/'),
                );

            setResult(JSON.stringify(requiredResult));
        } catch (error) {
            alert(error);
            console.log(error);
        }
    };

    return (
        <Box
            flex={1}
            safeArea
            px={5}
            py={3}
            bgColor="lightBlue.500"
        >
            <Center width="100%" height="100%">
                <Image source={logo} size="xl" alt="Logo" />

                <Heading size="2xl" mb={4} color="light.50">
                    Anime Share
                </Heading>

                <Heading size="md" color="light.100">
                    Sign In
                </Heading>

                <Button
                    variant="subtle"
                    leftIcon={
                        <Icon
                            as={MaterialIcons}
                            name="login"
                            size="md"
                        />
                    }
                    size="lg"
                    mt={12}
                    colorScheme="light"
                    onPress={_openAuthSessionAsync}
                >
                    Login with AniList
                </Button>

                <Text mt={2} size="xs">
                    {getAccessTokenFromResponse(result)}
                </Text>
            </Center>

            <StatusBar style="auto" />
        </Box>
    );
};

export default Login;
