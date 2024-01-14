import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        height: '100%',
        padding: 10
    },
    label: {
        fontSize: 20,
        color: 'white',
        paddingTop: 20,
        paddingBottom: 10
    },
    input: {
        color: 'white',
        backgroundColor: 'black',
        padding: 10,
        fontSize: 20,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'white'
    },
    button: {
        backgroundColor: '#FF1E56',
        padding: 10,
        marginTop: 20,
        borderRadius: 5
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    },
    modal: {
        marginTop: 30
    },
    modalLabel: {
        fontSize: 20,
        color: 'white',
    },
    modalValue: {
        fontSize: 30,
        color: 'white',
        marginBottom: 10
    },
    successModal: {
        marginTop: 20
    },
    title: {
        color: 'white',
        fontSize: 26,
        marginBottom: 20
    },
    error: {
        color: '#900',
        fontSize: 18,
        marginTop: 8
    },
    balance: {
        color: '#ccc',
        fontSize: 18,
        marginTop: -5,
        marginBottom: -5
    }
});