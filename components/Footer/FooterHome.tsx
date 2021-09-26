import React from 'react';
import { Text, Icon, Center, Pressable } from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../utilities/NavigationTypes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface FooterHomeProps {
    selected: number;
    setSelected: React.Dispatch<
        React.SetStateAction<number>
    >;
    index: number;
}

type homeScreenProp = NativeStackNavigationProp<
    RootStackParamList,
    'Home'
>;

const FooterHome: React.FC<FooterHomeProps> = ({
    selected,
    setSelected,
    index,
}: FooterHomeProps) => {
    const navigation = useNavigation<homeScreenProp>();

    const handleOnPress = () => {
        setSelected(index);
        navigation.navigate('Home');
    };

    return (
        <Pressable
            cursor="pointer"
            opacity={selected === index ? 1 : 0.5}
            py="3"
            flex={1}
            onPress={handleOnPress}
        >
            <Center>
                <Icon
                    mb="1"
                    as={
                        <MaterialCommunityIcons
                            name={
                                selected === index
                                    ? 'home'
                                    : 'home-outline'
                            }
                        />
                    }
                    color="light.700"
                    size="sm"
                />
                <Text color="light.700" fontSize="12">
                    Home
                </Text>
            </Center>
        </Pressable>
    );
};

export default FooterHome;
