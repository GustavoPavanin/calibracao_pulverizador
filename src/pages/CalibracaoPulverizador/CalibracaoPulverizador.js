import { useState } from 'react';
import { Keyboard } from 'react-native';
import CalibracaoPulverizadorView from './CalibracaoPulverizadorView';

const CalibracaoPulverizador = () => {
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

    const limparCampos = () => {
        setVolCalda('');
        setVelocidade('');
        setTempoCinquenta('');
        setQtBicos('');
        setLargBicos('');
        setTempoColeta('0');
        setColetarBico('0');
    };

    return (
        <CalibracaoPulverizadorView
            onChangeVolCalda={onChangeVolCalda}
            volCalda={volCalda}
            onChangeVelocidade={onChangeVelocidade}
            velocidade={velocidade}
            onChangeTempoCinquenta={onChangeTempoCinquenta}
            tempoCinquenta={tempoCinquenta}
            onChangeQtBicos={onChangeQtBicos}
            qtBicos={qtBicos}
            onChangeLargBicos={onChangeLargBicos}
            largBicos={largBicos}
            calculaColetaPBico={calculaColetaPBico}
            tempoColeta={tempoColeta}
            coletarBico={coletarBico}
            limparCampos={limparCampos}
        />
    );
};

export default CalibracaoPulverizador;
