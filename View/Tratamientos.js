import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import Image from 'react-native-remote-svg'

const tratamientos = () => {

    return (
        <ScrollView style={{ backgroundColor: '#fff' }}>
            <View style={styles.container}>
                <Text style={{ padding: 10, color: '#FD425F', fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>¿Cómo tratar el Covid 19?</Text>
            </View>
            <View style={styles.container}>
                <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                    <Image source={require('../assets/resting.svg')} />
                </View>
                <View>
                    <Text style={styles.styleText}>Descansar</Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                    <Image source={require('../assets/beberAgua.svg')} />
                </View>
                <View>
                    <Text style={styles.styleText}>Beber mucho líquido</Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                    <Image source={require('../assets/cena.svg')} />
                </View>
                <View>
                    <Text style={styles.styleText}>Comer alimentos nutritivos</Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                    <Image source={require('../assets/cama.svg')} />
                </View>
                <View>
                    <Text style={styles.styleText}>Permanezca en una habitación separada de los demás miembros de la familia.</Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                    <Image source={require('../assets/nadador.svg')} />
                </View>
                <View>
                    <Text style={styles.styleText}>Utilice un baño exclusivamente para usted si es posible</Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                    <Image source={require('../assets/limpiar2.svg')} />
                </View>
                <View>
                    <Text style={styles.styleText}>Limpie y desinfecte frecuentemente las superficies que toque</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default tratamientos


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

