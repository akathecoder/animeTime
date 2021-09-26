import React from 'react';
import { Text, Icon, Center, Pressable } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../utilities/NavigationTypes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface FooterSearchProps {
    selected: number;
    setSelected: React.Dispatch<
        React.SetStateAction<number>
    >;
    index: number;
}

type searchScreenProp = NativeStackNavigationProp<
    RootStackParamList,
    'Search'
>;

const FooterSearch: React.FC<FooterSearchProps> = ({
    selected,
    setSelected,
    index,
}: FooterSearchProps) => {
    const navigation = useNavigation<searchScreenProp>();

    const handleOnPress = () => {
        setSelected(index);
        navigation.navigate('Search');
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
                    mb="1"
                    as={<MaterialIcons name="search" />}
                    color="light.700"
                    size="sm"
                />
                <Text color="light.700" fontSize="12">
                    Search
                </Text>
            </Center>
        </Pressable>
    );
};

export default FooterSearch;
