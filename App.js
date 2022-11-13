import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView} from 'react-native';
import Home from './src/Screens/Home'

export default function App() {
  return (
    <>
      <StatusBar barStyle = "dark-content"/>
      <SafeAreaView>
        <Home/>
      </SafeAreaView>
    </>
  );
}

