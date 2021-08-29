import React from 'react';
import {Button, View} from 'react-native'
import BottomView from '../../components/BottomView';

export default function Landing({navigation}) {
    return (
        <>
            <BottomView height={300}>
                <Button onPress={() => navigation.navigate('StudentRoot')} title="Click to navigate home"/>
            </BottomView>
        </>
    )
}