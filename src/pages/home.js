import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import Input from "../components/Input";

const Home = () => {
    const [volCalda, setVolCalda] = useState('');
    const [velocidade, setVelocidade] = useState('');
    const [tempoCinquenta, setTempoCinquenta] = useState('');
    const [qtBicos, setQtBicos] = useState('');
    const [largBicos, setLargBicos] = useState('');
    const [tempoColeta, setTempoColeta] = useState('');
    const [coletarBico, setColetarBico] = useState('');
    const [loading, setLoading] = useState(false);
    const HA = 10000;

    const  calculaColetaPBico = () =>{
        var coletarBico = '0';
        if(volCalda != '' && velocidade != '' && tempoCinquenta != '' && qtBicos != '' && largBicos != ''){
            coletarBico = (litrosBarra()/qtBicos)*1000;
        }
        setColetarBico(coletarBico.toString());
        setTempoColeta(Math.round(tempoCinquenta).toString())
    }

    const areaCoberta = () => {
        return ((qtBicos * largBicos)/100)*50;
    }

    const litrosBarra = () => {
        return (areaCoberta()*volCalda)/HA;
    }

    const kmhParaSegundos50Metros = (kmh) => {
        return isValidCalc(50/(kmh/3.6));
    }

    const SegundosParaKm50Metros = (seg) => {
        return isValidCalc((50/seg)*3.6);
    }

    const isValidCalc = (value) => {
        return value > 0 && isFinite(value) ? value.toFixed(2) : '0';
    }

    const onChangeVolCalda = (value) =>{
        setVolCalda(value);
    }
    const onChangeQtBicos = (value) =>{
        setQtBicos(value);
    }
    const onChangeLargBicos = (value) =>{
        setLargBicos(value);
    }

    const onChangeVelocidade = (value) => {
        setVelocidade(replaceVirgula(value));
        setTempoCinquenta(kmhParaSegundos50Metros(value));
    }

    const onChangeTempoCinquenta = (value) => {
        setTempoCinquenta(replaceVirgula(value));
        setVelocidade(SegundosParaKm50Metros(value));
    }

    const replaceVirgula = (value) => {
        var retorno  = value; //=  value.replace(/[^0-9]/g, '.');
        if (/^\d*\.?\d*/.test(value)) {
            retorno = value;
        }
        if(value == ""){
            returno = '0';
        }
        return retorno;
    }


    return(
		<>
        <View> 
            <View className="p-4 pt-10">
                <View className="py-2">
                    <Text>Calibração de pulverizador</Text>
                </View>
                <View className="py-2">
                    <Text >Volume de Calda:</Text>
                    <Input 
                        id="volCalda" 
                        onChangeText={onChangeVolCalda} 
                        value={volCalda} 
                        keyboardType="numeric"
                        unMed="L/Ha"
                    />
                </View>
                <View className="py-2">
                    <Text>Velocidade:</Text>
                    <Input 
                        id="velocidade"
                        onChangeText={onChangeVelocidade}
                        value={velocidade}
                        keyboardType="numeric"
                        unMed="Km/h"
                    />
                </View>
                <View className="py-2">
                    <Text>Tempo p/50m:</Text>
                    <Input 
                        id="tempoCinquenta" 
                        onChangeText={onChangeTempoCinquenta} 
                        value={tempoCinquenta} 
                        keyboardType="numeric"
                        unMed="seg"
                    />
                </View>
                <View className="py-2">
                    <Text>Qtd de bicos:</Text>
                    <Input 
                        id="qtBicos" 
                        onChangeText={onChangeQtBicos} 
                        value={qtBicos} 
                        keyboardType="numeric"
                        unMed="Un"
                    />
                </View>
                <View className="py-2">
                    <Text>Largura dos bicos:</Text>
                    <Input 
                        id="largBicos" 
                        onChangeText={onChangeLargBicos} 
                        value={largBicos} 
                        keyboardType="numeric"
                        unMed="cm"
                    />
                </View>
                <View className="py-2">
                    <Text>Tempo de coleta:</Text>
                    <Input 
                        id="tmpColeta" 
                        value={tempoColeta} 
                        editable={false}
                        unMed="seg"
                    />
                </View>
                <View className="py-2">
                    <Text>Coletar p/ bico:</Text>
                    <Input 
                        id="coletarBico" 
                        value={coletarBico} 
                        editable={false}
                        unMed="ml"
                    />
                </View>
            </View> 
            <View className="w-full p-4 inline-block align-baseline">
                <Button onPress={calculaColetaPBico} title="Calcular"/>
            </View>
            </View> 
		</>
    );
}

export default Home;