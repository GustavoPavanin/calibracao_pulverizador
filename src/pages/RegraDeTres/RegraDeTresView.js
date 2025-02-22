import { TouchableOpacity, Text, View } from 'react-native';
import Input from '../../components/Input';

const RegraDeTresView = ({
    valorUm,
    onChangeValorUm,
    estaPara,
    onChangeEstaPara,
    valorDois,
    onChangeValorDois,
    valorX,
    calcularX,
    limparCampos,
}) => {
    return (
        <>
            <View className="p-4 pt-5 bg-white">
                <View className="py-2">
                    <Input
                        placeholder=""
                        id="valorUm"
                        onChangeText={onChangeValorUm}
                        value={valorUm}
                        keyboardType="numeric"
                        unMed="A"
                    />
                </View>
            </View>
            <View className="p-2">
                <Text className="text-center">ESTÁ PARA</Text>
            </View>
            <View className="p-4 pt-5 bg-white">
                <View className="py-2">
                    <Input
                        placeholder=""
                        id="estaPara"
                        onChangeText={onChangeEstaPara}
                        value={estaPara}
                        keyboardType="numeric"
                        unMed="B"
                    />
                </View>
            </View>

            <View className="p-2">
                <Text className="text-center">ASSIM COMO</Text>
            </View>
            <View className="p-4 pt-5 bg-white">
                <View className="py-2">
                    <Input
                        placeholder=""
                        id="valorDois"
                        onChangeText={onChangeValorDois}
                        value={valorDois}
                        keyboardType="numeric"
                        unMed="C"
                    />
                </View>
            </View>
            <View className="py-2">
                <Text className="text-center ">ESTÁ PARA</Text>
            </View>
            <View className="p-4 pt-5 bg-white">
                <View className="py-2">
                    <Text className="text-3xl text-center bg-blue-500 rounded-md text-white font-bold">
                        {valorX}
                    </Text>
                </View>
            </View>

            <View className="p-4 pt-5 bg-white">
                <View className="pt-10 pb-4">
                    <TouchableOpacity
                        onPress={calcularX}
                        title="Calcular"
                        className="w-full h-12 bg-blue-500 rounded-md items-center justify-center "
                    >
                        <Text className="text-white font-bold ">Calcular</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={limparCampos}
                        title="Limpar"
                        className="w-full h-12 bg-gray-600 rounded-md items-center justify-center "
                    >
                        <Text className="text-white font-bold ">Limpar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
};

export default RegraDeTresView;
