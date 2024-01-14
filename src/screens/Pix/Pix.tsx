import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { format } from 'date-fns';

import { styles } from './PixStyles';
import { useAppContext } from '../../components/AppProvider/AppProvider';

export function Pix({ navigation }: any) {
    const { globalState, updateGlobalState } = useAppContext();

    const [key, SetKey] = useState<string>();
    const [value, SetValue] = useState<string>();
    const [modal, setModal] = useState(false);
    const [successModal, setSuccessModal] = useState(false);
    const [notEnoughMoney, setNotEnoughMoney] = useState(false);

    const handleValue = (text: string) => {
        const formattedText = text.replace(/[^0-9.]/g, '');

        const parts = formattedText.split('.');
        if (parts.length > 1) {
            parts[1] = parts[1].slice(0, 2);
        }

        SetValue(parts.join('.'));
    };

    const handleModal = () => {
        if (key && Number(value) > 0 && globalState.balance >= Number(value)) {
            setModal(true);
        }
    };

    const handleConfirmTransaction = () => {
        updateGlobalState('balance', globalState.balance - Number(value));
        setModal(false);
        setSuccessModal(true);
    }

    useEffect(() => {
        if (Number(value) > globalState.balance) {
            setNotEnoughMoney(true);
        }
        else {
            setNotEnoughMoney(false);
        }
    }, [value])

    return (
        <View style={styles.container}>
            {
                successModal ?
                    <View style={styles.successModal}>
                        <Text style={styles.title}>
                            Pix efetuado com sucesso!
                        </Text>

                        <Text style={styles.label}>
                            Chave: {key}
                        </Text>

                        <Text style={styles.label}>
                            Valor: R$ {Number(value).toFixed(2).replace('.', ',')}
                        </Text>

                        <Text style={styles.label}>
                            Data: {format(Date.now(), 'dd/MM/yyyy')} às {format(Date.now(), 'HH:mm')}
                        </Text>

                        <TouchableOpacity style={styles.button} onPress={() => { }}>
                            <Text style={styles.buttonText}>Enviar comprovante</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('Home') }}>
                            <Text style={styles.buttonText}>Voltar</Text>
                        </TouchableOpacity>
                    </View>
                    :
                    !modal ?
                        <>
                            <Text style={styles.title}>
                                Fazer transferência via Pix
                            </Text>

                            <Text style={styles.balance}>
                                Saldo atual de R$ {globalState.balance.toFixed(2).replace('.', ',')}
                            </Text>

                            <Text style={styles.label}>
                                Chave Pix
                            </Text>

                            <TextInput
                                style={styles.input}
                                onChangeText={(text) => SetKey(text)}
                                value={key}
                            />

                            <TouchableOpacity style={styles.button} onPress={() => { }}>
                                <Text style={styles.buttonText}>Ler QR code</Text>
                            </TouchableOpacity>

                            <Text style={styles.label}>
                                Valor R$
                            </Text>
                            <TextInput
                                keyboardType='numeric'
                                style={styles.input}
                                onChangeText={handleValue}
                                value={value}
                            />

                            {
                                notEnoughMoney &&
                                <Text style={styles.error}>
                                    Saldo insuficiente
                                </Text>
                            }

                            <TouchableOpacity style={styles.button} onPress={handleModal}>
                                <Text style={styles.buttonText}>Transferir</Text>
                            </TouchableOpacity>
                        </>
                        :
                        <View style={styles.modal}>
                            <Text style={styles.modalLabel}>
                                Deseja realmente enviar
                            </Text>
                            <Text style={styles.modalValue}>
                                R$ {Number(value).toFixed(2).replace('.', ',')}
                            </Text>
                            <Text style={styles.modalLabel}>
                                Para a chave
                            </Text>
                            <Text style={styles.modalValue}>
                                {key}
                            </Text>

                            <TouchableOpacity style={styles.button} onPress={handleConfirmTransaction}>
                                <Text style={styles.buttonText}>Confirmar</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.button} onPress={() => setModal(false)}>
                                <Text style={styles.buttonText}>Cancelar</Text>
                            </TouchableOpacity>
                        </View>
            }
        </View>
    );
}