import React from 'react';

import FavouriteIcon from './FavouriteIcon';
import SearchIcon from './SearchIcon';
import SettingsIcon from './SettingsIcon';

export const getIcon = (
    label: string,
    isFocused: boolean,
) => {
    switch (label) {
        case 'Favourite':
            return <FavouriteIcon focused={isFocused} />;

        case 'Search':
            return <SearchIcon focused={isFocused} />;

        case 'Settings':
            return <SettingsIcon focused={isFocused} />;

        default:
            break;
    }
};
