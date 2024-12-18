import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { View, StyleSheet } from 'react-native';

import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RootStackParamList } from '../types';
// import { setListFunc, setEngFunc, setPinyinFunc} from './Screen2';
import { setListFunc, setEngFunc, setPinyinFunc, setColloquialFunc, setColloquialPinyinFunc } from './Screen2';
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
    // { label: 'Lesson 1', value: '1', list: ["人", "亻", "口", "土", "女", "心", "手", "日", "月", "木", "氵"], eng: ["human, person, people", "human, person, people", "mouth, opening", "earth", "woman, female", "heart", "hand", "sun, day", "moon, month", "tree", "water"], pinyin: ["rén", "rén", "kǒu", "tǔ", "nü", "xīn", "shǒu", "rì", "yùe", "mù", "shǔi"], colloquial: ["test", "", "", "", "", "", "", "", "", "", ""], colloquialPinyin: ["test", "", "", "", "", "", "", "", "", "", ""]},
    { label: 'Lesson 1', value: '1', list: ["人", "亻", "口", "土", "女", "心", "忄", "⺗", "手", "扌", "日", "月", "木", "氵", "水", "氺"], eng: ["human, person, people", "human, person, people", "mouth, opening", "earth", "woman, female", "heart", "heart", "heart", "hand", "hand", "sun, day", "moon, month", "tree", "water", "water", "water"], pinyin: ["rén", "rén", "kǒu", "tǔ", "nü", "xīn", "xīn", "xīn", "shǒu", "shǒu", "rì", "yùe", "mù", "shǔi", "shǔi", "shǔi"], colloquial: ["人字头", "单人旁", "口字旁", "提土旁", "女子旁", "心字底", "竖心旁", "竖心底", "手字旁", "提手旁", "日字旁", "月字旁", "木字旁", "三点水", "水字旁", "泰字底水"], colloquialPinyin: ["ren zi tou", "dan ren pang", "kou zi pang", "ti tu pang", "nu zi pang", "xin zi di", "shu xin pang", "shu xin di", "shou zi pang", "ti shou pang", "ri zi pang", "yue zi pang", "mu zi pang", "san dian shui", "shui zi pang", "tai zi di shui"]},
    { label: 'Lesson 2', value: '2', list: ["火", "灬", "纟", "糸", "艹", "讠", "辶", "钅", "刂", "刀", "宀", "贝", "一"], eng: ["fire", "fire", "silk", "silk", "grass", "speech", "walk", "gold, metal", "knife, sword", "knife, sword", "roof", "shell", "one"], pinyin: ["hǔo", "hǔo", "mì", "mì", "cǎo", "yán", "chùo", "jīn", "dāo", "dāo", "mían", "bèi", "yī"], colloquial: ["火字旁", "四点底", "绞丝旁", "独立绞丝", "草字头", "言字旁", "走之旁", "金字旁", "立刀旁", "刀字旁", "宝盖头", "贝字旁", "横"], colloquialPinyin: ["huo zi pang", "si dian di", "jiao si pang", "du li jiao si", "cao zi tou", "yan zi pang", "zou zi pang", "jin zi pang", "li dao pang", "dao zi pang", "bao gai tou", "bei zi pang", "heng"]},
    { label: 'Lesson 3', value: '3', list: ["力", "又", "犭", "犬", "禾", "⺮", "虫", "阝", "大", "广", "田"], eng: ["power, force", "right hand", "dog", "dog", "grain", "bamboo", "insect", "mound, dam", "big, very", "house on cliff", "field"], pinyin: ["lì", "yòu", "qǔan", "qǔan", "hé", "zhú", "chóng", "fù", "dà", "gǔang", "tían"], colloquial: ["力字旁", "又字旁", "反犬旁", "犬字头", "禾木旁", "竹子头 (竹字头)", "虫字旁", "双耳刀 (左耳刀)", "大字旁 (头)", "广字旁", "田字旁"], colloquialPinyin: ["li zi pang", "you zi pang", "fa quan pang", "quan zi pang", "he mu pang", "zhu zi tou", "chong zi pang", "shuang er dao", "da zi pang", "guang zi pang", "tian zi pang"]},
    { label: 'Lesson 4', value: '4', list: ["目", "罒", "石", "衤", "足", "马", "页", "巾", "米", "车", "八"], eng: ["eye", "eye", "stone", "clothes", "foot", "horse", "leaf", "turban, scarf", "rice", "cart, vehicle", "eight"], pinyin: ["mù", "mù", "shí", "yī", "zú", "mǎ", "yè", "jīn", "mǐ", "chē", "bā"], colloquial: ["目字旁", "四字头", "石字旁", "衣字旁", "足字旁", "马字旁", "页字旁", "巾字旁", "米字旁", "车字旁", "八字旁"], colloquialPinyin: ["mu zi pang", "si zi tou", "shi zi pang", "yi zi pang", "ma zi pang", "ye zi pang", "jin zi pang", "mi zi pang", "che zi pang", "ba zi pang"]},
    { label: 'Lesson 5', value: '5', list: ["尸", "寸", "山", "攵", "攴", "彳", "十", "工", "方", "门", "饣"], eng: ["corpse", "thumb, inch", "mountain", "knock, tap", "knock, tap", "(small) step", "ten", "work", "square, raft", "gate", "eat, food"], pinyin: ["shī", "cùn", "shān", "pū", "chí", "shí", "gōng", "fāng", "mén", "shí"], colloquial: ["尸字头", "寸字旁", "山字旁", "反文旁", "旧反文旁", "双人旁", "十字旁", "工字旁", "方字旁", "门字框", "食字旁"], colloquialPinyin:["shi zi tou", "cun zi pang", "shan zi pang", "fan wen pang", "jiu fan wen pang", "shuang ren pang", "shi zi pang", "gong zi pang", "fang zi pang", "men zi kuang", "shi zi pang"]},
    { label: 'Lesson 6', value: '6', list: ["欠", "儿", "冫", "子", "疒", "隹", "斤", "亠", "王", "白"], eng: ["lack, yawn", "human, legs", "ice", "child, seed", "sickness", "(short-tailed) bird", "axe, pound", "lid", "jade, king", "white"], pinyin: ["qian", "er", "bing", "zi", "ne", "zhui", jin", "tou", "wang", "bai"], colloquial: ["欠字旁", "儿座底", "两点水", "子字旁", "病字旁", "隹字旁", "斤字旁", "点横头", "王字旁", "白字旁"], colloquialPinyin:["qian zi pang", "er zuo di", lian dian shui"", "zi zi pang", "bing zi pang", "zhui zi pang", "jin zi pang", "dian heng tou", "wang zi pang", "bai zi pang"]},
    
    { label: 'Lesson 7', value: '7', list: ["立", "羊", "艮", "冖", "厂", "皿", "礻", "穴", "走", "雨"], eng: ["stand, erect", "sheep", "stopping", "cover", "cliff", "dish", "sign, spirit, show", "cave", "run, walk", "rain"], pinyin: ["li", "yang", "gen", "mi", "han", "min", "shi", "xue", "zou", "yu"], colloquial: ["立字旁", "羊字旁", "艮字旁", "秃宝盖", "厂字旁", "皿字底", "示字旁", "穴宝盖", "走字旁", "雨字旁"], colloquialPinyin:["li zi pang", "yang zi pang", "gen zi pang", "tu bao gai", "chang zi pang", "min zi pang", "shi zi pang", "xue bao gai", "zou zi pang", "yu zi pang"]},
    { label: 'Lesson 8', value: '8', list: ["口", "小", "戈", "几", "舌", "干", "殳", "夕", "止", "牜"], eng: ["enclosure", "small", "halberd, spear", "table", "tongue", "dry", "weapon", "evening, sunset", "stop", "cow"], pinyin: ["wei", "xiao", "ge", "ji", "she", "gan", "shu", "xi", "zhi", "niu"], colloquial: ["国字框", "小字旁", "戈字旁", "几字旁", "舌字旁", "千字旁", "殳字旁", "夕字旁", "止字旁", "牛字旁"], colloquialPinyin:["guo zi kuang", "xiao zi pang", "ge zi pang", "ji zi pang", "she zi pang", "qian zi pang", "shu zi pang", "xi zi pang", "zhi zi pang", "niu zi pang"]},
    { label: 'Lesson 9', value: '9', list: ["皮", "耳", "辛", "阝", "酉", "青", "鸟", "弓", "厶", "户"], eng: ["skin", "ear", "bitter", "city", "wine", "green/blue", "bird", "bow", "private", "door, house"], pinyin: ["pi", "er", "xin", "yi", "you", "qing", "niao", "gong", "si", "shu"], colloquial: ["皮字旁", "耳字旁", "辛字旁", "双耳刀 (右耳道)", "酉字旁", "青字旁", "鸟字旁", "弓字旁", "私字旁", "户字旁"], colloquialPinyin:["pi zi pang", "er zi pang", "xin zi pang", "shuang er dao", "you zi pang", "qing zi pang", "niao zi pang", "gong zi pang", "si zi pang", "hu zi pang"]},
    { label: 'Lesson 10', value: '10', list: ["羽", "舟", "里", "匕", "夊", "见", "卩", "𦉪", "士", "勹"], eng: ["feather", "boat", "village, mile", "spoon", "go (slowly)", "see", "seal", "net", "scholar", "embrace, wrap"], pinyin: ["yu", "chuan", "li", "bi", "sui", "jian", "jie", "wang", "shi", "bao"], colloquial: ["羽字旁", "舟字旁", "里字旁", "匕字旁", "折文旁", "见字旁", "单耳刀", "四字头", "士字旁", "包字头"], colloquialPinyin:["yu zi pang", "zhou zi pang", "li zi pang", "bi zi pang", "zhi wen pang", "jian zi pang", "dan er dao", "si zi tou", "shi zi pang", "bao zi tou"]},
];


export default function DropdownScreen({ navigation }: Props) {
    
    const [dropdown, setDropdown] = useState(null);
    void setDropdown;
    
    const [list, setList] = useState<string[]>();
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
        updateColloquial(item.colloquial);
        updateColloquialPinyin(item.colloquialPinyin);
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

