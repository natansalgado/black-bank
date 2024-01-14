import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './CreditStyles';
import { CreditButtons } from '../CreditButtons/CreditButtons';

export function Credit() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Crédito
            </Text>
            <Text style={styles.currentText}>
                Fatura atual
            </Text>
            <Text style={styles.current}>
                R$ 1250,42
            </Text>
            <Text style={styles.available}>
                Limite disponível de R$ 50,38
            </Text>

            <CreditButtons />
        </View>
    );
}