import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button, Linking  } from 'react-native'

const Ayuda = () => {

    const URLFUENTEDATOS = 'https://covid19.mathdro.id/api/countries/do/'
   
    return (
        <ScrollView style={{ backgroundColor: '#fff' }}>
            <View style={styles.container}>
                <Text style={{ padding: 10, color: '#FD425F', fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Preguntas frecuentes</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.styleText}>¿De dónde provienen los datos?</Text>
                <Button color="#841584" borderRadius={10} title="Api publica del covid 19" onPress={ ()=>{ Linking.openURL(URLFUENTEDATOS)}} />
            </View>
            <View style={styles.container}>
                <Text style={styles.styleText}>¿Quién dice como prevenir el Virus?</Text>
                <Text style={{textAlign:'center'}}>Organización Mundial de la Salud</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.styleText}>¿Quién dice cuales son los sintomas del virus?</Text>
                <Text style={{textAlign:'center'}}>Organización Mundial de la Salud</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.styleText}>¿Quién dice como debemos tratar el virur?</Text>
                <Text style={{textAlign:'center'}}>Organización Mundial de la Salud</Text>
            </View>
            
        </ScrollView>
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
        padding: 4, color: '#000', fontSize: 15, fontWeight: 'bold', textAlign: 'center'
    }
});
