import React from 'react';
import { Icon } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

interface FavouriteIconProps {
    focused: boolean;
}

const FavouriteIcon: React.FC<FavouriteIconProps> = ({
    focused,
}: FavouriteIconProps) => {
    return (
        <Icon
            mb="1"
            as={
                <MaterialIcons
                    name={
                        focused
                            ? 'favorite'
                            : 'favorite-outline'
                    }
                />
            }
            color="light.700"
            size="sm"
        />
    );
};

export default FavouriteIcon;
