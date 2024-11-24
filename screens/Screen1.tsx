import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RootStackParamList } from '../types';

type RootStackParamList = {
    Home: undefined;
    Details: undefined;
    Dropdown: undefined;    
    Main: undefined;
  };

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

let currentMode = false;

export const setModeFunc = (modeValue: boolean) => {
  currentMode = modeValue;
}

export const getMode = () => currentMode;

export default function HomeScreen({ navigation }: Props) {
  
  const [mode, setMode] = useState(false);

  void mode;

  const updateMode = (newMode: boolean) => {
    setMode(newMode);
    setModeFunc(newMode);
  };

  return (
    
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Details')}
      >
        <Text style={styles.buttonText}>Lesson</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          updateMode(true);
          navigation.navigate('Details');
        }}
      >
        <Text style={styles.buttonText}>Quiz</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
    gap: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#f5f5f5',
  },
  button: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 8,
    minWidth: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
    backgroundColor: 'f5f5f5'
  },
});