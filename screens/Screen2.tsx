import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RootStackParamList } from '../types';
// import { listCharacters, listNumbers, engTranslationNumbers, pinyinNumbers} from './Screen4';
import { listCharacters, listNumbers, engTranslationNumbers, pinyinNumbers, colloquialNumbers, colloquialPinyinNumbers} from './Screen4';

type RootStackParamList = {
    Home: undefined;
    Details: undefined;
    Dropdown: undefined;    
    Main: undefined;
  };

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Details'>;
};


let currentList: string[] = [];
let currentEngTranslation: string[] = [];
let currentPinyin: string[] = [];
let currentColloquial: string[] = [];
let currentColloquialPinyin: string[] = [];


export const setListFunc = (listValue: string[]) => {
  currentList = listValue;
}

export const setEngFunc = (engValue: string[]) => {
  currentEngTranslation = engValue;
}

export const setPinyinFunc = (pinyinValue: string[]) => {
  currentPinyin = pinyinValue;
}

export const setColloquialFunc = (colloquialValue: string[]) => {
  currentColloquial = colloquialValue;
}

export const setColloquialPinyinFunc = (colloquialPinyinValue: string[]) => {
  currentColloquialPinyin = colloquialPinyinValue;
}

export const getList = () => currentList;
export const getEngTranslation = () => currentEngTranslation;
export const getPinyin = () => currentPinyin;
export const getColloquial = () => currentColloquial;
export const getColloquialPinyin = () => currentColloquialPinyin;


export default function DetailsScreen({ navigation }: Props) {
  
  const [list, setList] = useState<string[]>(listCharacters);
  const [engTranslation, setEngTranslation] = useState<string[]>();
  const [pinyin, setPinyin] = useState<string[]>();
  const [colloquial, setColloquial] = useState<string[]>();
  const [colloquialPinyin, setColloquialPinyin] = useState<string[]>();

  void list;
  void engTranslation;
  void pinyin;
  void colloquial;
  void colloquialPinyin;

  const updateList = (newList: string[]) => {
    setList(newList);
    setListFunc(newList);
  };

  const updateEng = (newList: string[]) => {
    setEngTranslation(newList);
    setEngFunc(newList);
  };

  const updatePinyin = (newList: string[]) => {
    setPinyin(newList);
    setPinyinFunc(newList);
  };

  const updateColloquial = (newList: string[]) => {
    setColloquial(newList);
    setColloquialFunc(newList);
  };

  const updateColloquialPinyin = (newList: string[]) => {
    setColloquialPinyin(newList);
    setColloquialPinyinFunc(newList);
  };

  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            updateList(listNumbers);
            updateEng(engTranslationNumbers);
            updatePinyin(pinyinNumbers);
            updateColloquial(colloquialNumbers);
            updateColloquialPinyin(colloquialPinyinNumbers);
            navigation.navigate('Main');
          }}
        >
          <Text style={styles.buttonText}>Numbers</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Dropdown')}
        >
          <Text style={styles.buttonText}>Radicals</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          // onPress={() => navigation.navigate('Dropdown')}
        >
          <Text style={styles.buttonText}>EAS100</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          // onPress={() => navigation.navigate('Dropdown')}
        >
          <Text style={styles.buttonText}>EAS101</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          // onPress={() => navigation.navigate('Dropdown')}
        >
          <Text style={styles.buttonText}>EAS200</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          // onPress={() => navigation.navigate('Dropdown')}
        >
          <Text style={styles.buttonText}>EAS300</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          // onPress={() => navigation.navigate('Dropdown')}
        >
          <Text style={styles.buttonText}>EAS402</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          // onPress={() => navigation.navigate('Dropdown')}
        >
          <Text style={styles.buttonText}>EAS404</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    // flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 20,
    gap: 20
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
    gap: 20
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
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
  },
});