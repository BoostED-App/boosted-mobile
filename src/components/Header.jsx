import React from 'react';
import { Text } from 'react-native';

import { fontSizes } from '../style';

export default function Header({
    type="h1",
    colors="black",
    fontWeight="700",
    centered,
    ...props
}) {

    const centeredStyle = centered ? {textAlign: 'center'} : null;
    const fontSizeStyle = {fontSize: fontSizes[type]};

    return (
        <Text style={[fontSizeStyle, centeredStyle, props.style, {color, fontWeight}]}>
            {props.children}
        </Text>
    )
}