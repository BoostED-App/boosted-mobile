import React from 'react';
import { ScrollView, View } from 'react-native';

import Item from '../../../components/Item';

export default function ClubRoot() {
    return (
        <ScrollView>
            <View style={{flex: 1, alignItems: 'center'}}>
                <Item>
                    <Item.Title>
                        FBLA
                    </Item.Title>
                    <Item.Subtitle>
                        Fbla is a club dedicated to helping students grow
                    </Item.Subtitle>
                    <Item.Avatar iconName="account-group"/>
                </Item>
            </View>        
        </ScrollView>
    )
}