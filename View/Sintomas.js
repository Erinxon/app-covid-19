import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native'

const Sintomas = () => {
    return(
        <ScrollView style={{ backgroundColor: '#fff' }}>
            <View style={styles.container}> 
                <Text style={{ padding: 10, color: '#FD425F', fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Síntomas</Text>
            </View>
            <View style={styles.container}> 
                <Text style={styles.styleText}>Los síntomas más habituales son los siguientes</Text>
                <View style={styles.styleTextList}>
                    <Text>Fiebre.{"\n"}</Text>
                    <Text>Tos seca.{"\n"}</Text>
                    <Text>Cansancio.{"\n"}</Text>
                </View>
                
            </View>
            <View style={styles.container}> 
                <Text style={styles.styleText}>Otros síntomas menos comunes son los siguientes</Text>
                <View style={styles.styleTextList}>
                    <Text>Molestias y dolores.{"\n"}</Text>
                    <Text>Dolor de garganta.{"\n"}</Text>
                    <Text>Diarrea.{"\n"}</Text>
                    <Text>Conjuntivitis.{"\n"}</Text>
                    <Text>Dolor de cabeza.{"\n"}</Text>
                    <Text>Pérdida del sentido del olfato o del gusto.{"\n"}</Text>
                    <Text>Erupciones cutáneas o pérdida del color en los dedos de las manos o de los pies.{"\n"}</Text>
                </View>
            </View>
            <View style={styles.container}> 
                <Text style={styles.styleText}>Los síntomas graves son los siguientes</Text>
                <View style={styles.styleTextList}>
                    <Text>Dificultad para respirar o sensación de falta de aire.{"\n"}</Text>
                    <Text>Dolor o presión en el pecho.{"\n"}</Text>
                    <Text>Incapacidad para hablar o moverse.{"\n"}</Text>
                </View>
            </View>
        </ScrollView>
        
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
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000',
        
    },
    styleTextList: {
        marginLeft: 5,
        marginTop:5,
        marginBottom:0,
        paddingLeft: 10,
        paddingTop: 5,
        backgroundColor: 'rgba(120, 120, 120, 0.1)',
        borderRadius: 10
    }
});
