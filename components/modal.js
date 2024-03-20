import { View, StyleSheet, Text, Pressable, TouchableOpacity } from "react-native";

export function ModalTokens({ fechar }) {
    return (
        <View style={ESTILO.container}>
            <View style={ESTILO.content}>
                <Text style={ESTILO.title}>
                    CUPOM GERADO
                </Text>
                <Pressable style={ESTILO.innerToken} >
                    <Text style={ESTILO.text}>
                        SERENITY30
                    </Text>
                </Pressable>
                <View style={ESTILO.buttonArea}>
                    <TouchableOpacity style={ESTILO.button} onPress={fechar}>
                        <Text style={ESTILO.buttonText}>
                            Voltar
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[ESTILO.button, ESTILO.buttonSave]} >
                        <Text style={ESTILO.buttonSaveText}>
                            Salvar cupom
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

const ESTILO = StyleSheet.create({
    container: {
        backgroundColor: "rgba(25,25,25,0.6)",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        backgroundColor: "#FFF",
        width: "85%",
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    title: {
        fontSize: 20,
        fontFamily: 'Poppins-Regular',
        color: "#37728f",
        fontWeight: '600',
        marginBottom: 25,
    },
    innerToken: {
        backgroundColor: "#7fadc4",
        width: "85%",
        padding: 14,
        borderRadius: 8
    },
    text: {
        color: "#FFF",
        textAlign: "center"
    },
    buttonArea: {
        flexDirection: "row",
        width: "90%",
        marginTop: 8,
        alignItems: "center",
        justifyContent: "space-between"
    },
    button: {
        flex: 1,
        alignItems: "center",
        marginBottom: 14,
        marginTop: 14,
        margin: 9,
        padding: 8,
        backgroundColor: "#3e4e57",
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff'
    },
    buttonSave: {
        backgroundColor: "#37728f"
    },
    buttonSaveText: {
        color: "#FFF"
    }

})