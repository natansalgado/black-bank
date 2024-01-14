import React, { useState } from 'react';
import { TextInput, View, Text, TouchableOpacity } from 'react-native';

import { styles } from './SettingsStyles';
import { useAppContext } from '../../components/AppProvider/AppProvider';

export function Settings({ navigation }: any) {
    const { globalState, updateGlobalState } = useAppContext();

    const [name, setName] = useState(globalState.name);
    const [balance, setBalance] = useState(globalState.balance.toString());

    const handleBalance = (text: string) => {
        const formattedText = text.replace(/[^0-9.]/g, '');

        const parts = formattedText.split('.');
        if (parts.length > 1) {
            parts[1] = parts[1].slice(0, 2);
        }

        setBalance(parts.join('.'));
    };

    const handleSave = () => {
        updateGlobalState('name', name);
        updateGlobalState('balance', Number(balance));
        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>
                Nome
            </Text>
            <TextInput
                style={styles.input}
                onChangeText={(text) => setName(text)}
                value={name}
            />

            <Text style={styles.label}>
                Saldo R$
            </Text>
            <TextInput
                keyboardType='numeric'
                style={styles.input}
                onChangeText={handleBalance}
                value={balance}
            />

            <TouchableOpacity style={styles.button} onPress={handleSave}>
                <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
        </View>
    );
}
