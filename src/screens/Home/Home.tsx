import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, ScrollView } from 'react-native';

import { styles } from './HomeStyles';
import { Header } from '../../components/Header/Header';
import { Balance } from '../../components/Balance/Balance';
import { Credit } from '../../components/Credit/Credit';

export function Home({ navigation }: any) {
    return (
        <ScrollView style={styles.container} scrollEnabled={true}>
            <StatusBar style='light' />
            <Header navigation={navigation} />
            <Balance navigation={navigation} />
            <Credit />
        </ScrollView>
    );
}