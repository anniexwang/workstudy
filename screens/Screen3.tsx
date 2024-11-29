import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { View, StyleSheet } from 'react-native';

import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RootStackParamList } from '../types';
import { setListFunc, setEngFunc, setPinyinFunc } from './Screen2';
// import { getList, getEngTranslation, getPinyin } from './Screen2';
import { listCharacters, listRadicals1, listRadicals2, listRadicals3, listRadicals4, listRadicals5, listRadicals6, listRadicals7, listRadicals8, listRadicals9, listRadicals10 } from './Screen4';

import { Dropdown } from 'react-native-element-dropdown';

import { writer } from './Screen4';

type RootStackParamList = {
    Home: undefined;
    Details: undefined;
    Dropdown: undefined;
    Main: undefined;
  };

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Dropdown'>;
};


// let currentList: string[] = []; 
// let currentEngTranslation: string[] = []; 
// let currentPinyin: string[] = [];


const data = [
    { label: 'Lesson 1', value: '1', list: ["人", "口", "土", "女", "心", "手", "日", "月", "木", "氵"], eng: ["human, person, people", "mouth, opening", "earth", "woman, female", "heart", "hand", "sun, day", "moon, month", "tree", "water"], pinyin: ["rén", "kǒu", "tǔ", "nü", "xīn", "shǒu", "rì", "yùe", "mù", "shǔi"]},
    { label: 'Lesson 2', value: '2', list: ["火", "纟", "艹", "讠", "辶", "钅", "刂", "宀", "贝", "一"], eng: ["fire", "silk", "grass", "speech", "walk", "gold, metal", "knife, sword", "roof", "shell", "one"], pinyin: ["hǔo", "mì", "cǎo", "yán", "chùo", "jīn", "dāo", "mían", "bèi", "yī"]},
    { label: 'Lesson 3', value: '3', list: ["力", "又", "犭", "禾", "⺮", "虫", "阝", "大", "广", "田"], eng: ["power, force", "right hand", "dog", "grain", "bamboo", "insect", "mound, dam", "big, very", "house on cliff", "field"], pinyin: []},
    { label: 'Lesson 4', value: '4', list: ["目", "石", "衤", "足", "马", "页", "巾", "米", "车", "八"], eng: ["eye", "stone", "clothes", "foot", "horse", "leaf", "turban, scarf", "rice", "cart, vehicle", "eight"], pinyin: []},
    { label: 'Lesson 5', value: '5', list: ["尸", "寸", "山", "攵", "彳", "十", "工", "方", "门", "饣"], eng: ["corpse", "thumb, inch", "mountain", "knock, tap", "(small) step", "ten", "work", "square, raft", "gate", "eat, food"], pinyin: []},
    { label: 'Lesson 6', value: '6', list: ["欠", "儿", "冫", "子", "疒", "隹", "斤", "亠", "王", "白"], eng: ["lack, yawn", "human, legs", "ice", "child, seed", "sickness", "(short-tailed) bird", "axe, pound", "lid", "jade, king", "white"], pinyin: []},
    { label: 'Lesson 7', value: '7', list: ["立", "羊", "艮", "冖", "厂", "皿", "礻", "穴", "走", "雨"], eng: ["stand, erect", "sheep", "stopping", "cover", "cliff", "dish", "sign, spirit, show", "cave", "run, walk", "rain"], pinyin: []},
    { label: 'Lesson 8', value: '8', list: ["口", "小", "戈", "几", "舌", "干", "殳", "夕", "止", "牜"], eng: ["enclosure", "small", "halberd, spear", "table", "tongue", "dry", "weapon", "evening, sunset", "stop", "cow"], pinyin: []},
    { label: 'Lesson 9', value: '9', list: ["皮", "耳", "辛", "阝", "酉", "青", "鸟", "弓", "厶", "户"], eng: ["skin", "ear", "bitter", "city", "wine", "green/blue", "bird", "bow", "private", "door, house"], pinyin: []},
    { label: 'Lesson 10', value: '10', list: ["羽", "舟", "里", "匕", "夊", "见", "卩", "𦉪", "士", "勹"], eng: ["feather", "boat", "village, mile", "spoon", "go (slowly)", "see", "seal", "net", "scholar", "embrace, wrap"], pinyin: []},
];


export default function DropdownScreen({ navigation }: Props) {
    
    const [dropdown, setDropdown] = useState(null);
    void setDropdown;
    
    const [list, setList] = useState<string[]>(listCharacters);
    const [engTranslation, setEngTranslation] = useState<string[]>(listCharacters);
    const [pinyin, setPinyin] = useState<string[]>();

    void list;
    void engTranslation;
    void pinyin;

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

    return (
    <View style={styles.container}>
       <Dropdown
    style={styles.dropdown}
    placeholderStyle={styles.placeholderStyle}
    selectedTextStyle={styles.selectedTextStyle}
    inputSearchStyle={styles.inputSearchStyle}
    iconStyle={styles.iconStyle}
    itemTextStyle={styles.selectedTextStyle}
    data={data}
    search
    maxHeight={100}
    labelField="label"
    valueField="value"
    placeholder="Radicals"
    searchPlaceholder="Search..."
    value={dropdown}
    onChange={item => {
        // setDropdown(item.value);
        writer?.hideCharacter();
        writer?.hideOutline();
        updateList(item.list);
        updateEng(item.eng);
        updatePinyin(item.pinyin);
        if (item.value === '1') {
            updateList(listRadicals1);
        }
        if (item.value === '2') {
            updateList(listRadicals2);
        }
        if (item.value === '3') {
            updateList(listRadicals3);
        }
        if (item.value === '4') {
            updateList(listRadicals4);
        }
        if (item.value === '5') {
            updateList(listRadicals5);
        }
        if (item.value === '6') {
            updateList(listRadicals6);
        }
        if (item.value === '7') {
            updateList(listRadicals7);
        }
        if (item.value === '8') {
            updateList(listRadicals8);
        }
        if (item.value === '9') {
            updateList(listRadicals9);
        }
        if (item.value === '10') {
            updateList(listRadicals10);
        }
        navigation.navigate('Main');
    }}
    />
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
        height: 10,
        backgroundColor: '#e0e0e0'
    },
});







// export default function DropdownScreen({ navigation }: Props) {
//   return (
//     <View style={styles.container}>
//      
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     // // position : 'absolute',
//     // flex: 1,
//     // backgroundColor: 'transparent',
//     // top: (height / 2) - 400, 
//     // left: (width / 2) - 200, 
//     // // right: 0, 
//     // // bottom: 0,
//     // width: 400,
//     // height: 200,
//     // // justifyContent: 'center',
//     // // alignContent: 'center',
//   },
//   svg: {
//     // flex: 1,
    
//     // justifyContent: 'center',
//     // alignContent: 'center',
//   },
//   dropdown: {
//     margin: 0,
//     height: 20,
//     width: 100,
//     textAlign: 'center',
//     borderBottomColor: 'gray',
//     borderBottomWidth: 0.5,
//     },
//     icon: {
//         marginRight: 5,
//     },
//     placeholderStyle: {
//         fontSize: 10,
//     },
//     selectedTextStyle: {
//         fontSize: 10,
//         textAlign: 'center',
//     },
//     iconStyle: {
//         width: 20,
//         height: 20,
//     },
//     inputSearchStyle: {
//         height: 40,
//         fontSize: 10,
//     },
//     progressBar: {
//         width: '80%',
//         height: 10, // Height adjustment for better visibility
//         backgroundColor: '#e0e0e0'
//     },
// });

