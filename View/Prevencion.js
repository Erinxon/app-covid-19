import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { Svg } from 'react-native-svg'
import Image from 'react-native-remote-svg'

const Prevencion = () => {

    return (
        <ScrollView style={{ backgroundColor: '#fff' }}>
            <View style={styles.container}>
                <Text style={{ color: '#995444', textAlign: 'center', fontSize: 15, fontWeight: 'bold' }}>¿Cómo puedo prevenir el COVID-19?</Text>
            </View>
            <View style={styles.container}>
                <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                    <Image source={require('../assets/mask_icon.svg')} />
                </View>
                <View>
                    <Text style={styles.styleText}>Cubra su rostro con un paño de tela en público.</Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                    <Image source={require('../assets/manos.svg')} />
                </View>
                <View>
                    <Text style={styles.styleText}>Evitar tocarse los ojos, la nariz y la boca.</Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                    <Image source={require('../assets/cubrirse.svg')} />
                </View>
                <View>
                    <Text style={styles.styleText}>Cubrirse al toser y estornudar.</Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                    <Image source={require('../assets/limpiarsemanos.svg')} />
                </View>
                <View>
                    <Text style={styles.styleText}>Limpiar y desinfectar las superficies de “alto contacto”</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default Prevencion


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
        color: '#995444',
        textAlign: 'center'
    }
});
