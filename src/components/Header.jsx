import React from 'react';
import { Text } from 'react-native';

import { fontSizes } from '../style/index';


/**
 * Renders a <Header /> Component
 * @param props
 * @param props.type - Type of header / Size
 * @param props.color - Color of the header text
 * @param props.fontWeight - Weight of header text
 * @param props.margin - Header margin
 * @param props.centered - Whether text is centered
 */
export default function Header({
    type="h1",
    color="black",
    fontWeight="700",
    margin=0,
    centered,
    children,
    ...props
}) {

    const centeredStyle = centered ? {textAlign: 'center'} : null;

    const fontSizeStyle = {fontSize: fontSizes[type]};

    const headerStyle = [fontSizeStyle, centeredStyle, props.style, {color, fontWeight, margin}];

    return (
        <Text style={headerStyle}>
            {children}
        </Text>
    )
}