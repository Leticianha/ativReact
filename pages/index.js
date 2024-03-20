import { View, StyleSheet, Text, Image, Modal, TouchableOpacity } from "react-native";
import { useFonts } from 'expo-font';
import { ModalTokens } from '../components/modal';
import { useState } from "react";

export function Home() {
    const [telaModal, configTelaModal] = useState(false);

    function gerarToken() {
        configTelaModal(true);
    }

    return (
        <View style={ESTILO.container}>
            <View style={ESTILO.header}>
                <View style={ESTILO.textosHeader}>
                    <Text style={ESTILO.titulo}>
                        SereniYoga
                    </Text>
                    <Text style={ESTILO.subtitulo}>
                        Harmonize corpo e mente
                    </Text>
                </View>
                <Image source={require("../assets/logo.png")} style={ESTILO.logo} />
            </View>
            <View style={ESTILO.conteudo}>
                <Image source={require("../assets/bola.png")} style={ESTILO.bola} />
                <View style={ESTILO.aula}>
                    <Text style={ESTILO.aulaTexto}>
                        GANHE UM CUPOM DE <span style={ESTILO.span}>DESCONTO</span>
                    </Text>
                    <Text style={ESTILO.aulaTextoDois}>
                        Comece o primeiro mês com <span style={ESTILO.span}>aulas grátis</span>, para usufruir de tudo aquilo que temos de melhor!
                    </Text>
                    <View style={ESTILO.popup}>
                        <TouchableOpacity style={ESTILO.button} onPress={gerarToken}>
                            <Text style={ESTILO.buttonText}>
                                CUPOM 
                            </Text>
                        </TouchableOpacity>
                        <Modal visible={telaModal} animationType="fade" transparent={true}>
                            <ModalTokens fechar={() => configTelaModal(false)} />
                        </Modal>
                    </View>
                </View>
            </View>
        </View>
    )
}

const ESTILO = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#dbebfd8f",
        padding: 30
    },
    header: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center"
    },
    titulo: {
        fontSize: 25,
        fontFamily: "Poppins-Regular"
    },
    subtitulo: {
        fontSize: 15
    },
    logo: {
        width: 80,
        height: 80
    },
    conteudo: {
        alignItems: 'center',
        marginTop: 40
    },
    bola: {
        height: 180,
        width: '100%'
    },
    aula: {
        backgroundColor: '#fff',
        height: 200,
        marginTop: 40,
        borderRadius: 30,
        padding: 30,
        justifyContent: 'center'
    },
    aulaTexto: {
        textAlign: 'center',
        fontSize: 20,
        fontFamily: "Poppins-Regular",
        marginBottom: 10
    },
    span: {
        color: '#7fadc4',
        fontWeight: '600',
    },
    aulaTextoDois: {
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 15
    },
    button: {
        backgroundColor: '#7fadc4',
        height: 35,
        borderRadius: 13,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontFamily: 'Poppins-Regular',
        color: '#fff'
    }
})