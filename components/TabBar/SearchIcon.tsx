import React from 'react';
import { Icon } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

interface SearchIconProps {
    focused: boolean;
}

const SearchIcon: React.FC<SearchIconProps> = ({
    focused,
}: SearchIconProps) => {
    return (
        <Icon
            mb="1"
            as={<MaterialIcons name="search" />}
            color="light.700"
            size="sm"
        />
    );
};

export default SearchIcon;
