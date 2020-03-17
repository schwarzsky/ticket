import React from 'react';
import {StyleSheet, View, Text, SafeAreaView, FlatList} from 'react-native';

import MainList from '../components/MainList';

export default function Main(){

    return(
        <SafeAreaView>
            <View 
                style={{width: '100%', height: '40vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#e8e8e8'}}>
                    <Text style={{fontSize: '26px', fontWeight: 'bold'}}>.con</Text>
            </View>
            <MainList>
            </MainList>
        </SafeAreaView>
    )

}