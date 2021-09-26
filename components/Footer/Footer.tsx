import React, { useState } from 'react';
import { HStack } from 'native-base';

import FooterHome from './FooterHome';
import FooterSearch from './FooterSearch';
import FooterSettings from './FooterSettings';

const Footer = () => {
    const [selected, setSelected] = useState<number>(1);
    return (
        <HStack
            bg="light.50"
            alignItems="center"
            safeAreaBottom
            shadow={10}
        >
            <FooterHome
                selected={selected}
                setSelected={setSelected}
                index={0}
            />

            <FooterSearch
                selected={selected}
                setSelected={setSelected}
                index={1}
            />

            <FooterSettings
                selected={selected}
                setSelected={setSelected}
                index={2}
            />
        </HStack>
    );
};

export default Footer;
