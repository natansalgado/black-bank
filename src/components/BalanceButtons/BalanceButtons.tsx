import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';

import { styles } from './BalanceButtonsStyles';
import pix from '../../../assets/icons/pix.png';
import transf from '../../../assets/icons/transf.png';
import barcode from '../../../assets/icons/barcode.png';
import invest from '../../../assets/icons/invest.png';
import loan from '../../../assets/icons/loan.png';

export function BalanceButtons({ navigation }: any) {
    return (
        <ScrollView scrollEnabled horizontal style={styles.container}>
            <View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Pix')}>
                    <Image style={styles.image} source={pix} />
                </TouchableOpacity>
                <Text style={styles.buttonText}>
                    PIX
                </Text>
            </View>
            <View>
                <TouchableOpacity style={styles.button} onPress={() => { }}>
                    <Image style={styles.image} source={transf} />
                </TouchableOpacity>
                <Text style={styles.buttonText}>
                    TRANSFERIR
                </Text>
            </View>
            <View>
                <TouchableOpacity style={styles.button} onPress={() => { }}>
                    <Image style={styles.image} source={barcode} />
                </TouchableOpacity>
                <Text style={styles.buttonText}>
                    BOLETO
                </Text>
            </View>
            <View>
                <TouchableOpacity style={styles.button} onPress={() => { }}>
                    <Image style={styles.image} source={invest} />
                </TouchableOpacity>
                <Text style={styles.buttonText}>
                    INVESTIR
                </Text>
            </View>
            <View>
                <TouchableOpacity style={styles.button} onPress={() => { }}>
                    <Image style={styles.image} source={loan} />
                </TouchableOpacity>
                <Text style={styles.buttonText}>
                    EMPRÉSTIMO
                </Text>
            </View>
        </ScrollView>
    );
}