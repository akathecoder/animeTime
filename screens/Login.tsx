import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    Box,
    Button,
    Center,
    Heading,
    Icon,
    Image,
} from 'native-base';
import { logo } from '../utilities/images';
import { MaterialIcons } from '@expo/vector-icons';

const Login = () => {
    return (
        <Box
            flex={1}
            safeArea
            px={5}
            py={3}
            bgColor="lightBlue.500"
        >
            {/* <ScrollView flex={1}> */}
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
                >
                    Login with AniList
                </Button>
            </Center>
            {/* </ScrollView> */}

            <StatusBar style="auto" />
        </Box>
    );
};

export default Login;
