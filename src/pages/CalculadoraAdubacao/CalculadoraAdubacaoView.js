import { TouchableOpacity, Text, View } from 'react-native';
import Input from '../../components/Input';
import FloatingModal from '../../components/FloatingModal';

const CalculadoraAdubacaoView = ({
    taxaAplicacao,
    larguraImplemento,
    velocidadeTrabalho,
    quantidadeSecoes,
    tempoColeta,
    distanciaProva,
    onChangeTaxaAplicacao,
    onChangeLarguraImplemento,
    onChangeVelocidadeTrabalho,
    onChangeQuantidadeSecoes,
    onChangeTempoColeta,
    onChangeDistanciaProva,
    calculaVolumeColeta,
    limparCampos,
    isModalVisible,
    setModalVisible,
    calculatedResults,
}) => {
    return (
        <>
            <View className="p-4 pt-5 bg-white">
                <View className="py-2">
                    <Input
                        placeholder="Taxa de Aplicação:"
                        id="taxaAplicacao"
                        onChangeText={onChangeTaxaAplicacao}
                        value={taxaAplicacao}
                        keyboardType="numeric"
                        unMed="kg/ha"
                    />
                </View>
                <View className="py-2">
                    <Input
                        placeholder="Largura do Implemento:"
                        id="larguraImplemento"
                        onChangeText={onChangeLarguraImplemento}
                        value={larguraImplemento}
                        keyboardType="numeric"
                        unMed="m"
                    />
                </View>
                <View className="py-2">
                    <Input
                        placeholder="Velocidade de Trabalho:"
                        id="velocidadeTrabalho"
                        onChangeText={onChangeVelocidadeTrabalho}
                        value={velocidadeTrabalho}
                        keyboardType="numeric"
                        unMed="km/h"
                    />
                </View>
                <View className="py-2">
                    <Input
                        placeholder="Seções:"
                        id="quantidadeSecoes"
                        onChangeText={onChangeQuantidadeSecoes}
                        value={quantidadeSecoes}
                        keyboardType="numeric"
                        unMed="un"
                    />
                </View>
                <View className="py-2">
                    <Input
                        placeholder="Tempo de Coleta:"
                        id="tempoColeta"
                        onChangeText={onChangeTempoColeta}
                        value={tempoColeta}
                        keyboardType="numeric"
                        unMed="seg"
                    />
                </View>
                <View className="py-2">
                    <Input
                        placeholder="Distância:"
                        id="distanciaProva"
                        onChangeText={onChangeDistanciaProva}
                        value={distanciaProva}
                        keyboardType="numeric"
                        unMed="m"
                    />
                </View>

                <View className="pt-4 pb-4">
                    <TouchableOpacity
                        onPress={calculaVolumeColeta}
                        title="Calcular"
                        className="w-full h-12 bg-blue-500 rounded-md items-center justify-center "
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
            <FloatingModal
                isVisible={isModalVisible}
                onClose={() => setModalVisible(false)}
                results={calculatedResults}
            />
        </>
    );
};

export default CalculadoraAdubacaoView;
