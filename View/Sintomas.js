import React from 'react';
import { StyleSheet, Text, View } from 'react-native'

const Sintomas = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.styleText}>Síntomas</Text>
        </View>
    )
}

export default Sintomas


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8',
        padding: 15,
        margin: 10,
        borderRadius: 10,
        justifyContent: 'center',
    },
    styleText: {
        color: '#000',
        textAlign: 'center'
    }
});
