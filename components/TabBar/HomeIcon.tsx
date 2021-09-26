import React from 'react';
import { Icon } from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface HomeIconProps {
    focused: boolean;
}

const HomeIcon: React.FC<HomeIconProps> = ({
    focused,
}: HomeIconProps) => {
    return (
        <Icon
            mb="1"
            as={
                <MaterialCommunityIcons
                    name={focused ? 'home' : 'home-outline'}
                />
            }
            color="light.700"
            size="sm"
        />
    );
};

export default HomeIcon;
