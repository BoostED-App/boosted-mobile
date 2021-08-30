import React from 'react';

import BottomView from '../../components/BottomView';
import Button from '../../components/Button';
import Header from '../../components/Header';
import { colors } from '../../style';

export default function Landing({navigation}) {

    const options = [
        {
            label: 'Student',
            onPress: () => navigation.navigate('StudentLanding'),
        },
        {
            label: 'Administrator',
            onPress: () => navigation.navigate('AdminLanding'),
        },
        {
            label: 'School',
            onPress: () => navigation.navigate('SchoolLanding'),
        }
    ]

    return (
        <>
            <BottomView centered height={400}>
                <Header type="h3" centered margin={20}>
                    Which Describes You?
                </Header>
                { options.map((option, index) => {
                        return (
                            <Button 
                                rounded
                                mv = {7}
                                key = {index} 
                                size = "large"
                                color = {colors.landing.primary}  
                                onPress = {option.onPress}
                            >
                                {option.label}
                            </Button>
                        )
                })}
            </BottomView>
        </>
    )
}