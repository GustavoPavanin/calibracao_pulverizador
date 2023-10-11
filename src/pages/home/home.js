import { useState } from "react";
import { Button, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from "react-native";

const Home = () => {
    const [volCalda, setVolCalda] = useState(0);
    const [velocidade, setVelocidade] = useState(0);
    const [tempoCinquenta, setTempoCinquenta] = useState(0);
    const [qtBicos, setQtBicos] = useState(0);
    const [largBicos, setLargBicos] = useState(0);
    const [coletarBico, setColetarBico] = useState(0);
    const HA = 1000;

    const calculaColetaPBico = () =>{
        if(volCalda != 0 && velocidade != 0 &&tempoCinquenta != 0 && qtBicos != 0 && largBicos != 0){
            setColetarBico(litrosBarra/qtBicos);
        }
    }

    const areaCoberta = () => {
        return ((qtBicos * largBicos)/100)*50;
    }

    const litrosBarra = () => {
        return (areaCoberta*volCalda)/HA;
    }

    const kmhParaSegundos50Metros = (kmh) => {
        return isValidCalc(50/(kmh/3.6));
    }

    const SegundosParaKm50Metros = (seg) => {
        return isValidCalc((50/seg)*3.6);
    }

    const isValidCalc = (value) => {
        return value > 0 && isFinite(value) ? value.toFixed(2) : 0;
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
        return value.replace(/[^0-9]/g, '.');
    }
    return(
		<>
                <SafeAreaView>
                    <View style={styles.row}>
                        <Text>Volume de Calda:</Text>
                        <TextInput id="volCalda" style={styles.input} onChangeText={setVolCalda} value={volCalda} inputMode="numeric" required/>
                        <Text>L/Ha</Text>
                    </View>
                    <View style={styles.row}>
                        <Text>Velocidade:</Text>
                        <TextInput id="velocidade" style={styles.input} onChangeText={onChangeVelocidade} value={velocidade} inputMode="numeric" maxLength='3' />
                        <Text>Km/h</Text>
                    </View>
                    <View style={styles.row}>
                        <Text>Tempo p/50m:</Text>
                        <TextInput id="tempoCinquenta" style={styles.input} onChangeText={onChangeTempoCinquenta} value={tempoCinquenta} inputMode="numeric" maxLength='3'/>
                        <Text>seg</Text>
                    </View>
                    <View style={styles.row}>
                        <Text>Qtd de bicos:</Text>
                        <TextInput id="qtBicos" style={styles.input} onChangeText={setQtBicos} value={qtBicos} inputMode="numeric"/>
                        <Text>Un</Text>
                    </View>
                    <View style={styles.row}>
                        <Text>Largura dos bicos:</Text>
                        <TextInput id="largBicos" style={styles.input} onChangeText={setLargBicos} value={largBicos} inputMode="numeric" onFocu/>
                        <Text>cm</Text>
                    </View>
                    <View style={styles.row}>
                        <Text>Tempo de coleta:</Text>
                        <TextInput id="tmpColeta" style={styles.input}  value={tempoCinquenta} inputMode="numeric" disabled/>
                        <Text>seg</Text>
                    </View>
                    <View style={styles.row}>
                        <Text>Coletar p/ bico:</Text>
                        <TextInput id="coletarBico" style={styles.input} onChangeText={setVoletarBico} value={coletarBico} inputMode="numeric" disabled/>
                        <Text>ml</Text>
                    </View>
                </SafeAreaView>
            <StatusBar style="auto" />
            <Button /*onPress={}*/ title="Calcular" color="#841584" />
		</>
    );
}

const styles = StyleSheet.create({
    row: {
      alignItems: 'center',
      flexDirection: 'row',
      fontFamily: 'Helvetica, Arial, sans-serif',
      color: '#fff',
    },
  
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      backgroundColor: '#fff',
      borderRadius: 6,
      fontFamily: 'Helvetica, Arial, sans-serif',
    },
  });
export default Home;