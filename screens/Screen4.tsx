// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RootStackParamList } from '../types';


import { Text, View, StyleSheet} from "react-native";

import React, {useState, useRef, useEffect} from 'react';

import HanziWriter from "hanzi-writer";

import { Dropdown } from 'react-native-element-dropdown';

import * as Progress from 'react-native-progress';

import { getList, getEngTranslation, getPinyin } from './Screen2';


type RootStackParamList = {
    Home: undefined;
    Details: undefined;
    Dropdown: undefined;
    Main: undefined;
  };

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Main'>;
};

// let listCharacters = ["我", "爱", "你"];
export const listCharacters = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
export const listNumbers = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
export const engTranslationNumbers = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
export const pinyinNumbers = ["yi", "er", "san", "si", "wu", "liu", "qi", "ba", "jiu", "shi"];

export const listRadicals1 = ["人", "口", "土", "女", "心", "手", "日", "月", "木", "氵"];
export const listRadicals2 = ["火", "纟", "艹", "讠", "辶", "钅", "刂", "宀", "贝", "一"];
export const listRadicals3 = ["力", "又", "犭", "禾", "⺮", "虫", "阝", "大", "广", "田"];
export const listRadicals4 = ["目", "石", "衤", "足", "马", "页", "巾", "米", "车", "八"];
export const listRadicals5 = ["尸", "寸", "山", "攵", "彳", "十", "工", "方", "门", "饣"];
export const listRadicals6 = ["欠", "儿", "冫", "子", "疒", "隹", "斤", "亠", "王", "白"];
export const listRadicals7 = ["立", "羊", "艮", "冖", "厂", "皿", "礻", "穴", "走", "雨"];
export const listRadicals8 = ["口", "小", "戈", "几", "舌", "干", "殳", "夕", "止", "牜"];
export const listRadicals9 = ["皮", "耳", "辛", "阝", "酉", "青", "鸟", "弓", "厶", "户"];
export const listRadicals10 = ["羽", "舟", "里", "匕", "夊", "见", "卩", "𦉪", "士", "勹"];

export let writer: HanziWriter | null = null;


// let text = engTranslation[0];

const data = [
    { label: 'Lesson 1', value: '1', list: ["人", "口", "土", "女", "心", "手", "日", "月", "木", "氵"], eng: ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"], pinyin: []},
    { label: 'Lesson 2', value: '2', list: ["火", "纟", "艹", "讠", "辶", "钅", "刂", "宀", "贝", "一"], eng: [], pinyin: []},
    { label: 'Lesson 3', value: '3', list: ["力", "又", "犭", "禾", "⺮", "虫", "阝", "大", "广", "田"], eng: [], pinyin: []},
    { label: 'Lesson 4', value: '4', list: ["目", "石", "衤", "足", "马", "页", "巾", "米", "车", "八"], eng: [], pinyin: []},
    { label: 'Lesson 5', value: '5', list: ["尸", "寸", "山", "攵", "彳", "十", "工", "方", "门", "饣"], eng: [], pinyin: []},
    { label: 'Lesson 6', value: '6', list: ["欠", "儿", "冫", "子", "疒", "隹", "斤", "亠", "王", "白"], eng: [], pinyin: []},
    { label: 'Lesson 7', value: '7', list: ["立", "羊", "艮", "冖", "厂", "皿", "礻", "穴", "走", "雨"], eng: [], pinyin: []},
    { label: 'Lesson 8', value: '8', list: ["口", "小", "戈", "几", "舌", "干", "殳", "夕", "止", "牜"], eng: [], pinyin: []},
    { label: 'Lesson 9', value: '9', list: ["皮", "耳", "辛", "阝", "酉", "青", "鸟", "弓", "厶", "户"], eng: [], pinyin: []},
    { label: 'Lesson 10', value: '10', list: ["羽", "舟", "里", "匕", "夊", "见", "卩", "𦉪", "士", "勹"], eng: [], pinyin: []},
];

export default function MainScreen({ navigation }: Props) {

    const [quizMode, setQuizMode] = useState(false);

    const list = getList(); 
    const engTranslation = getEngTranslation(); 
    const pinyin = getPinyin(); 


    const [count, setCount] = useState(0);
    const [textCount, setTextCount] = useState(0);
    const [next, setNext] = useState(false);

    const writerRef = useRef(null);


    const characterTargetDiv = useRef(null);

    useEffect(() => {
        writer = HanziWriter.create('tian-grid', list[count], {
            width: 200,
            height: 200,
            padding: 5,
            delayBetweenStrokes: 200,
            drawingWidth: 10,
            strokeFadeDuration: 0,
        });
        writerRef.current = writer;

        if (!quizMode) {
            writer?.animateCharacter({onComplete: function () {
        writer?.quiz({ leniency: 0.75, highlightOnComplete: true, onComplete: function() {
        }});
        }});
        }
        else {
            writer?.hideCharacter();
            writer?.hideOutline();
            writer?.quiz({ leniency: 0.75, highlightOnComplete: true, onComplete: function() {
            }});
        }

    }, [count]);

    const nextCharacter = () => {

        
        setNext(true);
        
        writer?.hideCharacter();
        writer?.hideOutline();


        if ( count < list.length - 1){
            setTextCount(count + 1);
            setCount(count + 1);
        }
    }

    const handleLesson = () => {

        setCount(0);
        writer?.setCharacter(list[count]);
        
        if (writer) {
            
            writer.animateCharacter({onComplete: function () {
                writer?.quiz({leniency:0.75, highlightOnComplete: false, onComplete: function() {
                    writer?.hideCharacter();
                    writer?.hideOutline();
                    setCount(count + 1);
                }});
            }});
        }
    }
    const handleQuiz = () => {
        setQuizMode(true);
        setCount(0);

        writer?.setCharacter(list[count]);

        if (writer) {
            writer.hideCharacter();
            writer.hideOutline();

            writer.quiz({leniency: 0.75, highlightOnComplete: true, onComplete: function() {
                writer?.hideCharacter();
                writer?.hideOutline();
            }});
        }
    }

  return (
    
    <View style={{
                position: 'absolute',
                top: 0, 
                left: 0, 
                right: 0, 
                bottom: 0,
                justifyContent: "center",
                alignItems: "center",
                rowGap: 10,
        
              }}>


    <Progress.Bar progress={count/list.length} width={200} />

    <Text>{engTranslation[textCount]}</Text>
    <Text>{pinyin[textCount]}</Text>

    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" id="tian-grid">
        <line x1="0" y1="0" x2="200" y2="200" stroke="#DDD" strokeDasharray="10, 10, 10"/>
        <line x1="200" y1="0" x2="0" y2="200" stroke="#DDD" strokeDasharray="10, 10, 10"/>
        <line x1="100" y1="0" x2="100" y2="200" stroke="#DDD" strokeDasharray="10, 10, 10"/>
        <line x1="0" y1="100" x2="200" y2="100" stroke="#DDD" strokeDasharray="10, 10, 10"/>
    </svg>

    <View ref={characterTargetDiv}></View>

    <button onClick={handleLesson}> Lesson Mode </button>
    <button onClick={handleQuiz}> Quiz Mode </button>
    <button onClick={nextCharacter}> Next </button>

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
  dropdown: {
        margin: 0,
        height: 20,
        width: 100,
        textAlign: 'center',
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
        },
        icon: {
            marginRight: 5,
        },
        placeholderStyle: {
            fontSize: 10,
        },
        selectedTextStyle: {
            fontSize: 10,
            textAlign: 'center',
        },
        iconStyle: {
            width: 20,
            height: 20,
        },
        inputSearchStyle: {
            height: 40,
            fontSize: 10,
        },
        progressBar: {
            width: '80%',
            height: 10, // Height adjustment for better visibility
            backgroundColor: '#e0e0e0'
        },
});
