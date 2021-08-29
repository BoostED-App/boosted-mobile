import React from 'react';
import { View, ScrollView } from 'react-native';

import Item from '../../../components/Item';
import Button from '../../../components/Button';
import { screenContainer } from '../../../style';

export default function ScheduleRoot() {
    return (
        <>
            <ScrollView>
                <View style={[{flex: 1, alignItems: 'center'}, screenContainer]}>
                    <Button>Request Schedule Change</Button>
                        <Item>
                            <Item.Title badge badgeOptions={{color: 'blue'}}>
                                Algebra II
                            </Item.Title>
                            <Item.Subtitle>
                                Test
                            </Item.Subtitle>
                            <Item.Avatar iconName="account-group"/>
                        </Item>
                </View>
            </ScrollView>
        </>
    )
}