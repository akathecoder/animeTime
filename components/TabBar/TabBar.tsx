import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { HStack } from 'native-base';
import React from 'react';
import TabIcon from './TabIcon';

const TabBar = ({
    state,
    descriptors,
    navigation,
}: BottomTabBarProps) => {
    return (
        <HStack
            bg="light.50"
            alignItems="center"
            safeAreaBottom
            shadow={10}
        >
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                        ? options.title
                        : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (
                        !isFocused &&
                        !event.defaultPrevented
                    ) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TabIcon
                        key={index}
                        isFocused={isFocused}
                        label={label}
                        onLongPress={onLongPress}
                        onPress={onPress}
                        options={options}
                    />
                );
            })}
        </HStack>
    );
};

export default TabBar;
