import React from 'react';

import HomeIcon from './HomeIcon';
import SearchIcon from './SearchIcon';
import SettingsIcon from './SettingsIcon';

export const getIcon = (
    label: string,
    isFocused: boolean,
) => {
    switch (label) {
        case 'Home':
            return <HomeIcon focused={isFocused} />;

        case 'Search':
            return <SearchIcon focused={isFocused} />;

        case 'Settings':
            return <SettingsIcon focused={isFocused} />;

        default:
            break;
    }
};
