import React from 'react';
import { Text } from 'react-native';

import { fontSizes } from '../style/index';

export default function Header({
    type="h1",
    color="black",
    fontWeight="700",
    margin=0,
    centered,
    ...props
}) {

    const centeredStyle = centered ? {textAlign: 'center'} : null;
    const fontSizeStyle = {fontSize: fontSizes[type]};

    return (
        <Text style={[fontSizeStyle, centeredStyle, props.style, {color, fontWeight, margin}]}>
            {props.children}
        </Text>
    )
}