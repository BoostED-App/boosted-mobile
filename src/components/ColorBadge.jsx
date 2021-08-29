import React from 'react';
import {View, StyleSheet, Text} from 'react-native'

export default function ColorBadge({
    color='white',
    padding=8,
    badgeStyle,
 }) {
    return (
        <>
            <View style={[styles.badge, badgeStyle, {padding, backgroundColor: color,}]}/>
            <Text>  </Text>
        </>
    )
}

const styles = StyleSheet.create({
    badge: {
        borderRadius: 4
    }
})