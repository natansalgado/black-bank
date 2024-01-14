import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';

import { styles } from './CreditButtonsStyles';
import barcode from '../../../assets/icons/barcode.png';
import list from '../../../assets/icons/list.png';
import limit from '../../../assets/icons/limit.png';
import cards from '../../../assets/icons/cards.png';

export function CreditButtons() {
    return (
        <ScrollView scrollEnabled horizontal style={styles.container}>
            <View>
                <TouchableOpacity style={styles.button} onPress={() => { }}>
                    <Image style={styles.image} source={barcode} />
                </TouchableOpacity>
                <Text style={styles.buttonText}>
                    FATURA
                </Text>
            </View>
            <View>
                <TouchableOpacity style={styles.button} onPress={() => { }}>
                    <Image style={styles.image} source={list} />
                </TouchableOpacity>
                <Text style={styles.buttonText}>
                    RESUMO
                </Text>
            </View>
            <View>
                <TouchableOpacity style={styles.button} onPress={() => { }}>
                    <Image style={styles.image} source={limit} />
                </TouchableOpacity>
                <Text style={styles.buttonText}>
                    LIMITE
                </Text>
            </View>
            <View>
                <TouchableOpacity style={styles.button} onPress={() => { }}>
                    <Image style={styles.image} source={cards} />
                </TouchableOpacity>
                <Text style={styles.buttonText}>
                    CARTÕES
                </Text>
            </View>
        </ScrollView>
    );
}