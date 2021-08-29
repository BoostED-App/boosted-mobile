import React from 'react';
import { View, StyleSheet } from 'react-native';

import { colors } from '../style';


/**
 * Renders a <BottomView /> Component
 * @param props
 * @param props.height - Height of the bottom view
 * @param props.color - Color of the bottom view
 * @param props.children - Rendered inside of bottom view
 */
export default function BottomView({height, color, centered, children}) {

    const centeredStyle = centered ? { alignItems: 'center' } : null;

    const contentStyle = [ { height, backgroundColor: color }, centeredStyle, styles.contentContainer ];

    return (
        <View style={styles.flexContainer}>
            <View style={contentStyle}>
                {children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    flexContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: colors.landing.primary
    },
    contentContainer: {
        backgroundColor: colors.landing.accent100,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        paddingTop: 10
    }
})