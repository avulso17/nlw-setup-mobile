import './src/lib/dayjs';

import { StatusBar } from 'expo-status-bar';

import { Loading } from './src/components/Loading';

import { 
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  } from '@expo-google-fonts/inter';

import { Home } from './src/screens/Home';


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
    <>
      <StatusBar style='light' />
      <Home />
    </>
  );
}

