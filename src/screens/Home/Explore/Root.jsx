import React from 'react';
import { View, ScrollView } from 'react-native';

import Item from '../../../components/Item';
import { screenContainer } from '../../../style';

export default function ExploreRoot() {
    return (
        <>
            <ScrollView>
                <View style={[{flex: 1, alignItems: 'center'}, screenContainer]}>
                    <Item onPress={() => alert("A")}>
                        <Item.Title badge badgeOptions={{color: 'purple'}}>
                            Test Header
                        </Item.Title>
                        <Item.Subtitle>
                            Subtitle Here
                        </Item.Subtitle>
                    </Item>
                    <Item onPress={() => alert("A")}>
                        <Item.Title badge badgeOptions={{color: 'blue'}}>
                            Test Header
                        </Item.Title>
                        <Item.Subtitle>
                            Subtitle Here
                        </Item.Subtitle>
                    </Item>
                    <Item onPress={() => alert("A")}>
                        <Item.Title badge badgeOptions={{color: 'yellow'}}>
                            Test Header
                        </Item.Title>
                        <Item.Subtitle>
                            Subtitle Here
                        </Item.Subtitle>
                    </Item>
                </View>
            </ScrollView>
        </>
    )
}