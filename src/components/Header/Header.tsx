import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'

import { styles } from './HeaderStyles';
import { useAppContext } from '../AppProvider/AppProvider';

export function Header({ navigation }: any) {
    const { globalState } = useAppContext();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Olá, {globalState.name}</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Settings')}>
                <FontAwesome name='gear' color='white' size={30} />
            </TouchableOpacity>
        </View>
    );
}