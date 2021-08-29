import React from 'react';
import {View, StyleSheet, Text} from 'react-native'


/**
 * Renders a <ColorBadge /> Component
 * @param props
 * @param props.color - Background color of badge
 * @param props.padding - Padding of the badge
 * @param props.badgeStyle - Custom badge styling
 */
export default function ColorBadge({
    color='white',
    padding=8,
    badgeStyle,
 }) {

    const marginStyle = { maxWidth: padding / 2, marginRight: 8}

    const colorBadgeStyle = [styles.badge, marginStyle, badgeStyle, {padding, backgroundColor: color}];

    return (
        <>
            <View style={colorBadgeStyle}/> 
        </>
    )
}

const styles = StyleSheet.create({
    badge: { borderRadius: 4 }
})