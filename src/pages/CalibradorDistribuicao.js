import { useState } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import Input from '../components/Input';
import '../constants/fatorMotoraMovida';
import fatorMotoraMovida from '../constants/fatorMotoraMovida';
const CalibradorDistribuicao = () => {
    const [motora, setMotora] = useState('');
    const [movida, setMovida] = useState('');
    const [fator, setFator] = useState('');
    const [coletado, setColetado] = useState('');
    const [desejado, setDesejado] = useState('');
    const [dose, setDose] = useState('');
    const [espassamento, setEspassamento] = useState('');
    const [fatorColetado, setFatorColetado] = useState('');

    const onChangeMotora = (value) => {
        setMotora(value);
        if (value != '' && movida != '' && movida != '0' && movida != 0) {
            setFator(calcFator(value, movida));
        } else {
            setFator('');
        }
    };
    const onChangeColetado = (value) => {
        setColetado(value);
    };
    const onChangeDesejado = (value) => {
        setDesejado(value);
    };
    const onChangeDose = (value) => {
        setDose(value);
    };
    const onChangeEspassamento = (value) => {
        setEspassamento(value);
    };
    const onChangeFatorColetado = (value) => {
        setFatorColetado(value);
    };

    const onChangeMovida = (value) => {
        setMovida(value);
        if (motora != '' && value != '' && value != '0' && value != 0) {
            setFator(calcFator(motora, value));
        } else {
            setFator('');
        }
    };

    const calcFator = (motora, movida) => {
        return (motora / movida).toFixed(3).toString();
    };

    return (
        <View className="px-4 pt-1">
            <View className="py-2">
                <Text>Dose (kg/ha): </Text>
                <Input id="dose" onChangeText={onChangeDose} value={dose} keyboardType="numeric" />
            </View>
            <View className="py-2">
                <Text>Espassamento entre linha: </Text>
                <Input
                    id="dose"
                    onChangeText={onChangeEspassamento}
                    value={espassamento}
                    keyboardType="numeric"
                />
            </View>
            <View className="py-2">
                <Text>Engrenagem Motora:</Text>
                <Input
                    id="motora"
                    onChangeText={onChangeMotora}
                    value={motora}
                    keyboardType="numeric"
                />
            </View>
            <View className="py-2">
                <Text>Engrenagem Movida:</Text>
                <Input
                    id="movida"
                    onChangeText={onChangeMovida}
                    value={movida}
                    keyboardType="numeric"
                />
            </View>
            <View className="py-2">
                <Text>Fator:</Text>
                <Input id="fator" value={fator} editable={false} />
            </View>
            <View className="py-2">
                <Text>Quantidade de sólidos coletado:</Text>
                <Input
                    id="coletado"
                    onChangeText={onChangeColetado}
                    value={coletado}
                    keyboardType="numeric"
                />
            </View>
            <View className="py-2">
                <Text>Quantidade de sólidos desejado:</Text>
                <Input
                    id="desejado"
                    onChangeText={onChangeDesejado}
                    value={desejado}
                    keyboardType="numeric"
                />
            </View>
            <View className="py-2">
                <Text>Fator Coletado:</Text>
                <Input
                    id="fatorColetado"
                    value={fatorColetado}
                    keyboardType="numeric"
                    editable={false}
                />
            </View>
            <View className="pt-4 pb-6">
                <TouchableOpacity
                    title="Calcular"
                    className="w-full h-12 bg-blue-800 rounded-md items-center justify-center "
                >
                    <Text className="text-white font-bold ">Calcular</Text>
                </TouchableOpacity>
            </View>
            <View className="py-2">
                <Text>Sugestão:</Text>
                <Input id="tmpColeta" value={tempoColeta} editable={false} />
            </View>
        </View>
    );
};

export default CalibradorDistribuicao;
