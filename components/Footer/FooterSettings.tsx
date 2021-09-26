import React from 'react';
import { Text, Icon, Center, Pressable } from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface FooterSettingsProps {
    selected: number;
    setSelected: React.Dispatch<
        React.SetStateAction<number>
    >;
    index: number;
}

const FooterSettings: React.FC<FooterSettingsProps> = ({
    selected,
    setSelected,
    index,
}: FooterSettingsProps) => {
    return (
        <Pressable
            cursor="pointer"
            opacity={selected === index ? 1 : 0.5}
            py="2"
            flex={1}
            onPress={() => setSelected(index)}
        >
            <Center>
                <Icon
                    mb={1}
                    as={
                        <MaterialCommunityIcons
                            name={
                                selected === index
                                    ? 'account'
                                    : 'account-outline'
                            }
                        />
                    }
                    color="light.700"
                    size="sm"
                />
                <Text color="light.700" fontSize="12">
                    Account
                </Text>
            </Center>
        </Pressable>
    );
};

export default FooterSettings;
