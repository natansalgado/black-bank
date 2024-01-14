import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { AppProvider } from './src/components/AppProvider/AppProvider';
import { Home } from './src/screens/Home/Home';
import { Settings } from './src/screens/Settings/Settings';
import { Pix } from './src/screens/Pix/Pix';

const Stack = createStackNavigator();

export default function App() {
  const customHeaderBackButton = ({ onPress }: any) => (
    <TouchableOpacity onPress={onPress}>
      <Ionicons name='arrow-back' style={styles.headerBack} />
    </TouchableOpacity>
  );

  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'
          screenOptions={{
            headerStyle: styles.header,
            headerTitleStyle: styles.headerTitle,
            headerLeft: customHeaderBackButton,
          }}>
          <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
          <Stack.Screen name='Settings' component={Settings} options={{ title: 'Configurações' }} />
          <Stack.Screen name='Pix' component={Pix} options={{ title: 'Pix' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}


export const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FF1E56'
  },
  headerTitle: {
    color: 'white'
  },
  headerBack: {
    color: 'white',
    paddingLeft: 20,
    fontSize: 20
  }
});