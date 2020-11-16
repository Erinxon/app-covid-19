import React from 'react';
import { StyleSheet, Text, View } from 'react-native'

const Ayuda = () => {

    return(
        <View style={styles.container}>
            <Text style={styles.styleText}>Ayuda</Text>
        </View>
    )
}

export default Ayuda


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
