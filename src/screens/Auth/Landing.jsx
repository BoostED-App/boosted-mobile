import React from 'react';
import {Button, View} from 'react-native'

export default function Landing({navigation}) {
    return (
        <>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Button onPress={() => navigation.navigate('StudentRoot')} title="Click to navigate home"/>
            </View>
        </>
    )
}