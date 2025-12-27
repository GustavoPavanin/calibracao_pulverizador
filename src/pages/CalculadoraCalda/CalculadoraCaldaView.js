import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert, Modal } from 'react-native';
import ViewShot from 'react-native-view-shot';

const CalculadoraCaldaView = ({
    volume,
    taxa,
    produtos,
    area,
    calcular,
    adicionarLinha,
    atualizarProduto,
    exportarImagem,
    setTaxa,
    setVolume,
    viewShotRef,
    limparCampos,
    tituloImpressao,
    setTituloImpressao,
    modalExportarVisivel,
    setModalExportarVisivel,
}) => {
    return (
        <>
            <ScrollView className="flex-1 bg-white px-4 pt-6">
                <Text className="text-xl font-bold text-center mb-6">Calculadora de Calda</Text>

                {/* Inputs principais */}
                <View className="flex-row justify-between mb-4">
                    <View className="w-[48%]">
                        <Text className="text-gray-600 mb-1">Volume de Calda (L)</Text>
                        <TextInput
                            className="border rounded px-3 py-2"
                            keyboardType="numeric"
                            value={volume}
                            onChangeText={setVolume}
                        />
                    </View>

                    <View className="w-[48%]">
                        <Text className="text-gray-600 mb-1">Taxa (L/ha)</Text>
                        <TextInput
                            className="border rounded px-3 py-2"
                            keyboardType="numeric"
                            value={taxa}
                            onChangeText={setTaxa}
                        />
                    </View>
                </View>

                <Text className="text-center text-gray-700 mb-4">
                    Área calculada: <Text className="font-bold">{area.toFixed(2)} ha</Text>
                </Text>

                {/* Tabela exportável */}
                <ViewShot ref={viewShotRef} options={{ format: 'png', quality: 1 }}>
                    <View className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden mb-6">
                        <TextInput
                            className="w-[100%] text-xs font-bold bg-blue-400 rounded-md px-3 py-2 text-center"
                            placeholder="Título da receita"
                            value={tituloImpressao}
                            onChangeText={(v) => setTituloImpressao(v)}
                        />
                        {/* Cabeçalho */}
                        <View className="flex-row bg-cyan-500 px-3 py-2">
                            <Text className="w-[30%] text-white text-xs font-semibold">
                                Produto
                            </Text>
                            <Text className="w-[20%] text-white text-xs font-semibold text-center">
                                Dose/ha
                            </Text>
                            <Text className="w-[20%] text-white text-xs font-semibold text-center">
                                Unid.
                            </Text>
                            <Text className="w-[30%] text-white text-xs font-semibold text-right">
                                Na calda
                            </Text>
                        </View>

                        {/* Linhas */}
                        {produtos.map((p, index) => (
                            <View
                                key={p.id}
                                className={`flex-row px-3 py-2 items-center ${
                                    index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                                }`}
                            >
                                {/* Produto */}
                                <TextInput
                                    className="w-[30%] text-xs bg-white border border-gray-300 rounded-md px-2 py-1"
                                    placeholder="Produto"
                                    value={p.produto}
                                    onChangeText={(v) => atualizarProduto(p.id, 'produto', v)}
                                />

                                {/* Dose/ha */}
                                <TextInput
                                    className="w-[20%] text-xs bg-white border border-gray-300 rounded-md px-2 py-1 mx-1 text-center"
                                    placeholder="0"
                                    keyboardType="numeric"
                                    value={p.doseHa}
                                    onChangeText={(v) => atualizarProduto(p.id, 'doseHa', v)}
                                />

                                {/* Unidade */}
                                <TextInput
                                    className="w-[20%] text-xs bg-white border border-gray-300 rounded-md px-2 py-1 text-center"
                                    placeholder="L"
                                    value={p.unidade}
                                    onChangeText={(v) => atualizarProduto(p.id, 'unidade', v)}
                                />

                                {/* Resultado */}
                                <View className="w-[30%] items-end">
                                    <View className="bg-green-100 px-2 py-1 rounded-full">
                                        <Text className="text-green-700 text-xs font-bold">
                                            {p.resultado.toFixed(2)} {p.unidade}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        ))}
                    </View>
                </ViewShot>
                <TouchableOpacity
                    className="bg-blue-400 py-3 rounded mb-3"
                    onPress={adicionarLinha}
                >
                    <Text className="text-white text-center font-bold">+ Adicionar Produto</Text>
                </TouchableOpacity>

                <TouchableOpacity className="bg-blue-500 py-3 rounded mb-3" onPress={calcular}>
                    <Text className="text-white text-center font-bold">CALCULAR</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    className="bg-gray-800 py-3 rounded mb-10"
                    onPress={exportarImagem}
                >
                    <Text className="text-white text-center font-bold">
                        Exportar Resultado (Imagem)
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={limparCampos}
                    title="Limpar"
                    className="w-full h-12 bg-gray-600 rounded-md items-center justify-center mb-20"
                >
                    <Text className="text-white font-bold ">Limpar</Text>
                </TouchableOpacity>
            </ScrollView>

            <Modal transparent visible={modalExportarVisivel} animationType="fade">
                <View className="flex-1 bg-black/40 items-center justify-center">
                    <View className="bg-white w-[80%] rounded-2xl p-6 items-center">
                        <Text className="text-lg font-bold text-gray-800 mb-2">Receita salva</Text>

                        <Text className="text-gray-600 text-center mb-6">
                            A imagem da receita foi salva com sucesso na galeria do seu dispositivo.
                        </Text>

                        <TouchableOpacity
                            className="bg-lime-500 px-6 py-3 rounded-full"
                            onPress={() => setModalExportarVisivel(false)}
                        >
                            <Text className="text-white font-bold">OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </>
    );
};

export default CalculadoraCaldaView;
