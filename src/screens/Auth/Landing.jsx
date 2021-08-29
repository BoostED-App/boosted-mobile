import React from 'react';

import BottomView from '../../components/BottomView';
import Button from '../../components/Button';
import Header from '../../components/Header';

export default function Landing({navigation}) {
    return (
        <>
            <BottomView centered height={400}>
                <Header type="h3" centered margin={20}>
                    Which Describes You?
                </Header>
                <Button>
                    Student
                </Button>
            </BottomView>
        </>
    )
}