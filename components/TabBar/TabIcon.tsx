import React from 'react';
import { Text, Center, Pressable } from 'native-base';
import {
    LabelPosition,
    BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import { getIcon } from './getIcon';

interface TabIconProps {
    isFocused: boolean;
    label:
        | string
        | ((props: {
              focused: boolean;
              color: string;
              position: LabelPosition;
          }) => React.ReactNode);
    onPress: () => void;
    onLongPress: () => void;
    options: BottomTabNavigationOptions;
}

const TabIcon: React.FC<TabIconProps> = ({
    isFocused,
    label,
    onLongPress,
    onPress,
    options,
}: TabIconProps) => {
    return (
        <Pressable
            accessibilityRole="button"
            accessibilityState={
                isFocused ? { selected: true } : {}
            }
            accessibilityLabel={
                options.tabBarAccessibilityLabel
            }
            testID={options.tabBarTestID}
            cursor="pointer"
            opacity={isFocused ? 1 : 0.5}
            py="3"
            flex={1}
            onPress={onPress}
            onLongPress={onLongPress}
        >
            <Center>
                {getIcon(label as string, isFocused)}
                <Text color="light.700" fontSize="12">
                    {label}
                </Text>
            </Center>
        </Pressable>
    );
};

export default TabIcon;
