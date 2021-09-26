import React from 'react';
import { Text, Icon, Center, Pressable } from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface FooterHomeProps {
    selected: number;
    setSelected: React.Dispatch<
        React.SetStateAction<number>
    >;
    index: number;
}

const FooterHome: React.FC<FooterHomeProps> = ({
    selected,
    setSelected,
    index,
}: FooterHomeProps) => {
    return (
        <Pressable
            cursor="pointer"
            opacity={selected === index ? 1 : 0.5}
            py="3"
            flex={1}
            onPress={() => setSelected(index)}
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
