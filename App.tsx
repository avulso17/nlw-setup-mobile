import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Loading } from './src/components/Loading';

import { 
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  } from '@expo-google-fonts/inter';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
  });

  if (!fontsLoaded) {
    return (
      <Loading />
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Haruo lindao</Text>
      <StatusBar style='light' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09090A',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    color: '#fff',
    fontSize: 30,
    fontFamily: 'Inter_700Bold',
  }
});
