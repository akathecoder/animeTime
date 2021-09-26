import React from 'react';
import { Icon } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

interface SettingsIconProps {
    focused: boolean;
}

const SettingsIcon: React.FC<SettingsIconProps> = ({
    focused,
}: SettingsIconProps) => {
    return (
        <Icon
            mb="1"
            as={<MaterialIcons name="settings" />}
            color="light.700"
            size="sm"
        />
    );
};

export default SettingsIcon;
