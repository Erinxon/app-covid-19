import React from 'react';
import { StyleSheet, Text, View, ScrollView, ActivityIndicator, RefreshControl } from 'react-native'
import { useEffect, useState } from 'react'
import { Svg } from 'react-native-svg'
import Image from 'react-native-remote-svg'
import axios from 'axios'

export default function Inicio() {
    const [ultimaActualizacion, setUltimaActualizacion] = useState('')
    const [casosConfirmados, setCasosConfirmados] = useState(0)
    const [muertes, setMuertes] = useState(0)
    const [recuperados, setRecuperados] = useState(0)
    const [casosActivos, setCasosActivos] = useState(0)
    const [loading, setLoading] = useState(true)
    const [networkError, setNetworkError] = useState(false)

    useEffect(() => {
        obtenerDatos()
        obtenerUltimaActualizacion()
        setTimeout(function(){ setLoading(false) }, 1000);

    }, []);

    const wait = (timeout) => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    }

    const onRefresh = React.useCallback(() => {
        obtenerDatos()
        obtenerUltimaActualizacion()
        wait(500).then(() => setLoading(false));
    }, []);

    const obtenerDatos = () => {
        const apiUrl = `https://covid19.mathdro.id/api/countries/do/confirmed`
        axios.get(apiUrl).then(repuesta => {
            setCasosConfirmados(repuesta.data[0].confirmed)
            setMuertes(repuesta.data[0].deaths)
            setRecuperados(repuesta.data[0].recovered)
            setCasosActivos(repuesta.data[0].active)
            setNetworkError(false)
        }).catch((error) => {
            setNetworkError(true)
        })
    }
    const obtenerUltimaActualizacion = () => {
        const apiUrl = `https://covid19.mathdro.id/api/countries/do`
        axios.get(apiUrl).then(repuesta => {
            setUltimaActualizacion(repuesta.data.lastUpdate.substr(0, 10))
            setNetworkError(false)
        }).catch((error) => {
            setNetworkError(true)

        })
    }

    if (networkError) {
        return (
            <View style={styles.loader} refreshControl={
                <RefreshControl refreshing={loading} onRefresh={onRefresh} />
            }>
                <Text>No hay conexión de internet</Text>
            </View>
        )
    }

    if (loading) {
        return (
            <View style={styles.loader}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        )
    }


    return (
        <ScrollView style={{ backgroundColor: '#fff' }} refreshControl={
            <RefreshControl refreshing={loading} onRefresh={onRefresh} />
        }>
            <View style={styles.container}>
                <View>
                    <Text style={{ padding: 10, color: '#FD425F', fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>ESTADÍSTICAS COVID-19 RD</Text>
                </View>
            </View>
            <View style={styles.container}>
                <Text style={styles.styleTextTituloConfirmar}>Casos Confirmados</Text>
                <View style={{ flexDirection: 'row' }}>
                    <View>
                        <Svg width="55" height="55">
                            <Image source={require('../assets/confirmados.svg')} />
                        </Svg>
                    </View>
                    <View>
                        <Text style={styles.styleText}>{casosConfirmados}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.container}>
                <Text style={styles.styleTextTituloMuertes}>Defunciones</Text>
                <View style={{ flexDirection: 'row' }}>
                    <View>
                        <Svg width="55" height="55">
                            <Image source={require('../assets/fallecidos.svg')} />
                        </Svg>
                    </View>
                    <View>
                        <Text style={styles.styleText}>{muertes}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.container}>
                <Text style={styles.styleTextTituloRecuperados}>Recuperados</Text>
                <View style={{ flexDirection: 'row' }}>
                    <View>
                        <Svg width="55" height="55">
                            <Image source={require('../assets/recuperados.svg')} />
                        </Svg>
                    </View>
                    <View>
                        <Text style={styles.styleText}>{recuperados}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.container}>
                <Text style={styles.styleTextTituloActivos}>Casos activos</Text>
                <View style={{ flexDirection: 'row' }}>
                    <View>
                        <Svg width="55" height="55">
                            <Image source={require('../assets/coronavirus.svg')} />
                        </Svg>
                    </View>
                    <View>
                        <Text style={styles.styleText}>{casosActivos}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.container}>
                <Text >Última actualización: {ultimaActualizacion}</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8',
        padding: 15,
        margin: 10,
        borderRadius: 10,
        justifyContent: 'center',
    },
    styleTextTituloConfirmar: {
        paddingLeft: 2,
        paddingBottom: 10,
        color: '#003876',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left'
    },
    styleTextTituloMuertes: {
        paddingLeft: 2,
        paddingBottom: 10,
        color: '#ed232a',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left'
    },
    styleTextTituloRecuperados: {
        paddingLeft: 2,
        paddingBottom: 10,
        color: '#0eb140',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left'
    },
    styleTextTituloActivos: {
        paddingLeft: 2,
        paddingBottom: 10,
        color: 'rgb(244, 195, 99)',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left'
    },
    styleText: {
        padding: 10,
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left',

    },
    contentSvg: {
        flex: 1,
        flexDirection: 'column',
    },
    loader: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
    },
    botonError: {
        fontSize: 23,
        color: '#000',
        padding: 30,
        marginLeft: 9,
        marginTop: 15,
        marginRight: 9,
        marginBottom: 5,
        textAlign: "center",
        backgroundColor: '#fff',
        borderRadius: 8
    }

});
