import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const data = [
{ label: 'Lesson 1', value: 'listRadicals1' },
{ label: 'Lesson 2', value: 'listRadicals2' },
{ label: 'Lesson 3', value: 'listRadicals3' },
{ label: 'Lesson 4', value: 'listRadicals4' },
{ label: 'Lesson 5', value: 'listRadicals5' },
{ label: 'Lesson 6', value: 'listRadicals6' },
{ label: 'Lesson 7', value: 'listRadicals7' },
{ label: 'Lesson 8', value: 'listRadicals8' },
{ label: 'Lesson 9', value: 'listRadicals9' },
{ label: 'Lesson 10', value: 'listRadicals10' },
];

const DropdownComponent = () => {
const [value, setValue] = useState(null);

return (
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
    value={value}
    onChange={item => {
        setValue(item.value);
    }}
    />
);
};

export default DropdownComponent;

const styles = StyleSheet.create({
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
});