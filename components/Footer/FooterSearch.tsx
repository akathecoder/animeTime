import React from 'react';
import { Text, Icon, Center, Pressable } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

interface FooterSearchProps {
    selected: number;
    setSelected: React.Dispatch<
        React.SetStateAction<number>
    >;
    index: number;
}

const FooterSearch: React.FC<FooterSearchProps> = ({
    selected,
    setSelected,
    index,
}: FooterSearchProps) => {
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
