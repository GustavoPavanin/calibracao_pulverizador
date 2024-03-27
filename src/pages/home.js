import { useState } from 'react';
import { TouchableOpacity, Text, View, Keyboard } from 'react-native';
import Input from '../components/Input';

const Home = () => {
    const [volCalda, setVolCalda] = useState('');
    const [velocidade, setVelocidade] = useState('');
    const [tempoCinquenta, setTempoCinquenta] = useState('');
    const [qtBicos, setQtBicos] = useState('');
    const [largBicos, setLargBicos] = useState('');
    const [tempoColeta, setTempoColeta] = useState('');
    const [coletarBico, setColetarBico] = useState('');
    const HA = 10000;

    const calculaColetaPBico = () => {
        Keyboard.dismiss();
        var coletarBico = '0';
        if (
            volCalda != '' &&
            velocidade != '' &&
            tempoCinquenta != '' &&
            qtBicos != '' &&
            largBicos != ''
        ) {
            coletarBico = (litrosBarra() / qtBicos) * 1000;
        }
        setColetarBico(coletarBico.toString());
        setTempoColeta(Math.round(tempoCinquenta).toString());
    };

    const areaCoberta = () => {
        return ((qtBicos * largBicos) / 100) * 50;
    };

    const litrosBarra = () => {
        return (areaCoberta() * volCalda) / HA;
    };

    const kmhParaSegundos50Metros = (kmh) => {
        return isValidCalc(50 / (kmh / 3.6));
    };

    const SegundosParaKm50Metros = (seg) => {
        return isValidCalc((50 / seg) * 3.6);
    };

    const isValidCalc = (value) => {
        return value > 0 && isFinite(value) ? value.toFixed(2) : '0';
    };

    const onChangeVolCalda = (value) => {
        setVolCalda(value);
    };
    const onChangeQtBicos = (value) => {
        setQtBicos(value);
    };
    const onChangeLargBicos = (value) => {
        setLargBicos(value);
    };

    const onChangeVelocidade = (value) => {
        setVelocidade(replaceVirgula(value));
        setTempoCinquenta(kmhParaSegundos50Metros(value));
    };

    const onChangeTempoCinquenta = (value) => {
        setTempoCinquenta(replaceVirgula(value));
        setVelocidade(SegundosParaKm50Metros(value));
    };

    const replaceVirgula = (value) => {
        var retorno = value; //=  value.replace(/[^0-9]/g, '.');
        if (/^\d*\.?\d*/.test(value)) {
            retorno = value;
        }
        if (value == '') {
            returno = '0';
        }
        return retorno;
    };

    return (
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
            <View className="pt-4 pb-6">
                <TouchableOpacity
                    onPress={calculaColetaPBico}
                    title="Calcular"
                    className="w-full h-12 bg-blue-800 rounded-md items-center justify-center "
                >
                    <Text className="text-white font-bold ">Calcular</Text>
                </TouchableOpacity>
            </View>
            <View className="py-2">
                <Input
                    id="tmpColeta"
                    value={tempoColeta}
                    editable={false}
                    unMed="seg"
                    placeholder="Tempo de coleta:"
                />
            </View>
            <View className="py-2">
                <Text>{coletarBico}</Text>
                <Input
                    id="coletarBico"
                    value={coletarBico}
                    editable={false}
                    unMed="ml"
                    placeholder="Coletar p/ bico:"
                />
            </View>
        </View>
    );
};

export default Home;
