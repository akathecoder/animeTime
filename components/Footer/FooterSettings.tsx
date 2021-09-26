import React from 'react';
import { Text, Icon, Center, Pressable } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../utilities/NavigationTypes';

interface FooterSettingsProps {
    selected: number;
    setSelected: React.Dispatch<
        React.SetStateAction<number>
    >;
    index: number;
}

type settingsScreenProp = NativeStackNavigationProp<
    RootStackParamList,
    'Settings'
>;

const FooterSettings: React.FC<FooterSettingsProps> = ({
    selected,
    setSelected,
    index,
}: FooterSettingsProps) => {
    const navigation = useNavigation<settingsScreenProp>();

    const handleOnPress = () => {
        setSelected(index);
        navigation.navigate('Settings');
    };

    return (
        <Pressable
            cursor="pointer"
            opacity={selected === index ? 1 : 0.5}
            py="2"
            flex={1}
            onPress={handleOnPress}
        >
            <Center>
                <Icon
                    mb={1}
                    as={<MaterialIcons name="settings" />}
                    color="light.700"
                    size="sm"
                />
                <Text color="light.700" fontSize="12">
                    Settings
                </Text>
            </Center>
        </Pressable>
    );
};

export default FooterSettings;
