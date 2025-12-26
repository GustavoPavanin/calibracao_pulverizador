import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Switch,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';

export default function RegraDeTresView({
    a,
    b,
    c,
    resultado,
    inversamente,
    calcular,
    limparCampos,
    setInversamente,
    setA,
    setB,
    setC,
}) {
    return (
        <KeyboardAvoidingView
            className="flex-1 bg-white px-6 pt-10"
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <Text className="text-xl font-bold text-gray-800 mb-6">Regra de 3</Text>

            {/* Switch inversamente proporcional */}
            <View className="flex-row items-center mb-6">
                <Switch value={inversamente} onChange={setInversamente} />
                <Text className="ml-3 text-gray-700">É inversamente proporcional</Text>
            </View>

            <View className="flex-row justify-between mb-6">
                <TextInput
                    className="border-b border-gray-400 text-center text-lg w-24"
                    keyboardType="numeric"
                    value={a}
                    onChangeText={setA}
                    placeholder="A"
                    id="a"
                />

                <Text className="text-lg text-gray-600 self-end">é igual a</Text>

                <TextInput
                    className="border-b border-gray-400 text-center text-lg w-24"
                    keyboardType="numeric"
                    value={b}
                    onChangeText={setB}
                    placeholder="B"
                    id="b"
                />
            </View>

            <View className="flex-row justify-center mt-5 mb-2">
                <Text className="text-lg text-gray-600">Então</Text>
            </View>

            <View className="flex-row justify-between items-end mb-10">
                <TextInput
                    className="border-b border-gray-400 text-center text-lg w-24"
                    keyboardType="numeric"
                    value={c}
                    onChangeText={setC}
                    placeholder="C"
                    id="c"
                />
                <Text className="text-lg text-gray-600 self-end">é igual a</Text>

                {resultado && (
                    <View className="mt-8 items-center">
                        <Text className="text-3xl font-bold text-lime-600 mt-2">{resultado}</Text>
                    </View>
                )}
                {!resultado && <Text className="text-3xl font-bold text-blue-500 mt-2">X</Text>}
            </View>

            <TouchableOpacity
                className=" bg-blue-500 py-4 rounded-lg items-center mb-3"
                title="Calcular"
                onPress={calcular}
            >
                <Text className="text-white font-bold text-lg">CALCULAR</Text>
            </TouchableOpacity>

            <View>
                <TouchableOpacity
                    onPress={limparCampos}
                    title="Limpar"
                    className="w-full h-12 bg-gray-600 rounded-md items-center justify-center "
                >
                    <Text className="text-white font-bold ">Limpar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}
