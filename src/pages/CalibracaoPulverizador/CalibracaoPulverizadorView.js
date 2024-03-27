import { TouchableOpacity, Text, View } from 'react-native';
import Input from '../../components/Input';

const CalibracaoPulverizadorView = ({
    onChangeVolCalda,
    volCalda,
    onChangeVelocidade,
    velocidade,
    onChangeTempoCinquenta,
    tempoCinquenta,
    onChangeQtBicos,
    qtBicos,
    onChangeLargBicos,
    largBicos,
    calculaColetaPBico,
    tempoColeta,
    coletarBico,
    limparCampos,
}) => {
    return (
        <>
            <View className="p-4 pt-5 ">
                <View className="py-2">
                    <Input
                        placeholder="Volume de Calda:"
                        id="volCalda"
                        onChangeText={onChangeVolCalda}
                        value={volCalda}
                        keyboardType="numeric"
                        unMed="L/Ha"
                    />
                </View>
                <View className="py-2">
                    <Input
                        placeholder="Velocidade:"
                        id="velocidade"
                        onChangeText={onChangeVelocidade}
                        value={velocidade}
                        keyboardType="numeric"
                        unMed="Km/h"
                    />
                </View>
                <View className="py-2">
                    <Input
                        placeholder="Tempo p/50m:"
                        id="tempoCinquenta"
                        onChangeText={onChangeTempoCinquenta}
                        value={tempoCinquenta}
                        keyboardType="numeric"
                        unMed="seg"
                    />
                </View>
                <View className="py-2">
                    <Input
                        placeholder="Qtd de bicos:"
                        id="qtBicos"
                        onChangeText={onChangeQtBicos}
                        value={qtBicos}
                        keyboardType="numeric"
                        unMed="Un"
                    />
                </View>
                <View className="py-2">
                    <Input
                        placeholder="Largura dos bicos:"
                        id="largBicos"
                        onChangeText={onChangeLargBicos}
                        value={largBicos}
                        keyboardType="numeric"
                        unMed="cm"
                    />
                </View>
                <View className="pt-4 pb-4">
                    <TouchableOpacity
                        onPress={calculaColetaPBico}
                        title="Calcular"
                        className="w-full h-12 bg-blue-800 rounded-md items-center justify-center "
                    >
                        <Text className="text-white font-bold ">Calcular</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={limparCampos}
                        title="Calcular"
                        className="w-full h-12 bg-gray-600 rounded-md items-center justify-center "
                    >
                        <Text className="text-white font-bold ">Limpar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View className="p-4 flex flex-row">
                <View className="flex-1 p-4">
                    <Text className="text-center pb-3">Tempo de coleta:</Text>
                    <Text className="text-3xl text-center">{tempoColeta}</Text>
                    <Text className="text-center pt-3">seg</Text>
                </View>
                <View className="p-4 flex-1 ">
                    <Text className="text-center pb-3">Coletar p/ bico:</Text>
                    <Text className="text-3xl text-center">{coletarBico}</Text>
                    <Text className="text-center pt-3">ml</Text>
                </View>
            </View>
        </>
    );
};

export default CalibracaoPulverizadorView;
