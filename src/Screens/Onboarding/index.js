// Onboarding Screen
import React from 'react';
import { Text, View, StatusBar } from 'react-native';
import styled from 'styled-components/native';

import { Colors, Images, Metrics } from 'Constants';
import { McText, McImage, PlayButton } from 'Components';

const Onboarding = ({
    navigation
}) => (
    <Container>
        <StatusBar barStyle='light-content'/>
        <McImage source={Images.logo} style={{marginTop: 204 - 40}}/>
        <McText 
            color={Colors.primary} 
            size={24} 
            black 
            style={{
            marginTop: 28,
            }}
        >
            The sound of life</McText>
        <McText color={Colors.grey4} size={14} medium align='center' style={{
            marginHorizontal: 51, 
            marginTop:8
        }}>
            Music is not an entertainment, but also it is our life
        </McText>
        <View style={{ marginTop : 202 }}>
            <PlayButton 
                size={78} 
                circle={70} 
                icon={Images.right_arrow}
                onPress={()=>{
                    navigation.navigate('Library');
                }}
            />
        </View>
    </Container>
);

const Container = styled.SafeAreaView`
    flex:1;
    background-color: ${Colors.background};
    justify_content: center;
    align-items: center;
`;
export default Onboarding;