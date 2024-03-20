import { View, StyleSheet, Text, Image } from "react-native";
import Slider from "@react-native-community/slider";
import { useState } from "react";


export function Exercicios() {
    const [qtde, defineQtde] = useState(5);

    return (
        <View style={ESTILO.container}>
            <View style={ESTILO.content}>
                <Text style={ESTILO.titulo}>
                    Meditação
                </Text>
                <Text style={ESTILO.texto}>
                    Define o tempo que deseja praticar yoga diaramente
                </Text>
            </View>
            <View style={ESTILO.areaTotal}>
                <Text style={ESTILO.caracteres}>
                    {qtde} Minutos por dia
                </Text>
                <View style={ESTILO.area}>
                    <Slider style={{ height: 30 }}
                        minimumValue={5}
                        maximumValue={60}
                        minimumTrackTintColor="#7fadc4"
                        maximumTrackTintColor="#3e4e57"
                        thumbTintColor="#37728f"
                        value={qtde}
                        onValueChange={(value) => defineQtde(value.toFixed(0))}
                    />
                </View>
                <Image source={require("../assets/meditacao.png")} style={ESTILO.meditacao} />
            </View>
        </View>
    )
}

const ESTILO = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#dbebfd8f",
        padding: 30,
        paddingTop: 50
    },
    titulo: {
        fontSize: 25,
        fontFamily: "Poppins-Regular"
    },
    texto: {
        fontSize: 15
    },
    area: {
        marginBottom: 14,
        marginTop: 20,
        width: "95%",
        backgroundColor: "#FFF",
        borderRadius: 15,
        padding: 20,
        paddingBottom: 10,
        paddingTop: 10
    },
    areaTotal: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
    },
    caracteres: {
        fontSize: 20,
        color: '#37728f'
    }
})