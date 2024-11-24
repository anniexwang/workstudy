// import { Component } from 'react';
// import { Platform, StyleSheet, Text, View } from 'react-native';

export function HuiGrid() {

    // render() {
        return (
            <>
                {/* <View style={styles.container}> */}
                    {/* <View style={styles.rectangle} /> */}
                {/* </View> */}
                <line x1="0" y1="0" x2="1024" y2="0" stroke="black" strokeWidth={20} strokeDasharray="64, 64, 64" />
                <line x1="0" y1="0" x2="0" y2="1024" stroke="black" strokeWidth={20} strokeDasharray="64, 64, 64" />
                <line x1="1024" y1="0" x2="1024" y2="1024" stroke="black" strokeWidth={20} strokeDasharray="64, 64, 64" />
                <line x1="0" y1="1024" x2="1024" y2="1024" stroke="black" strokeWidth={20} strokeDasharray="64, 64, 64" /> 
                <line x1="256" y1="256" x2="768" y2="256" stroke="black" strokeWidth={10} strokeDasharray="64, 64, 64" />
                <line x1="256" y1="256" x2="256" y2="768" stroke="black" strokeWidth={10} strokeDasharray="64, 64, 64" />
                <line x1="768" y1="256" x2="786" y2="768" stroke="black" strokeWidth={10} strokeDasharray="64, 64, 64" />
                <line x1="256" y1="768" x2="768" y2="768" stroke="black" strokeWidth={10} strokeDasharray="64, 64, 64" /> 
            </>
        );
    // }
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: "#000000",
//     },
//     // header
//     rectangle: {
//         marginTop: 20,
//         width: 120 * 2,
//         height: 120,
//         backgroundColor: '#000000',
//     }
// })