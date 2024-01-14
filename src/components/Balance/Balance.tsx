import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './BalanceStyles';
import { BalanceButtons } from '../BalanceButtons/BalanceButtons';
import { useAppContext } from '../AppProvider/AppProvider';

export function Balance({ navigation }: any) {
  const { globalState } = useAppContext();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saldo</Text>
      <Text style={styles.balance}>R$ {globalState.balance.toFixed(2).replace('.', ',')}</Text>
      <BalanceButtons navigation={navigation} />
    </View>
  );
}