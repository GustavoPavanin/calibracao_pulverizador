import { useState } from 'react';
import { Keyboard } from 'react-native';
import RegraDeTresView from './RegraDeTresView';

const RegraDeTres = () => {
    const [valorUm, setValorUm] = useState('');
    const [estaPara, setEstaPara] = useState('');
    const [valorDois, setValorDois] = useState('');
    const [valorX, setValorX] = useState('');

    const onChangeValorUm = (value) => {
        setValorUm(value);
    };
    const onChangeEstaPara = (value) => {
        setEstaPara(value);
    };
    const onChangeValorDois = (value) => {
        setValorDois(value);
    };
    const calcularX = () => {
        if (
            isNotNullOrEmpty(valorUm) &&
            isNotNullOrEmpty(valorDois) &&
            isNotNullOrEmpty(estaPara)
        ) {
            const x = (estaPara * valorDois) / valorUm;
            setValorX(x);
        } else {
            setValorX('');
        }
        return;
    };

    const isNotNullOrEmpty = (value) => {
        if (value == null || value == '') return false;
        return true;
    };
    const limparCampos = () => {
        setValorUm('');
        setEstaPara('');
        setValorDois('');
        setValorX('');
    };

    return (
        <RegraDeTresView
            valorUm={valorUm}
            onChangeValorUm={onChangeValorUm}
            estaPara={estaPara}
            onChangeEstaPara={onChangeEstaPara}
            valorDois={valorDois}
            onChangeValorDois={onChangeValorDois}
            valorX={valorX}
            calcularX={calcularX}
            limparCampos={limparCampos}
        />
    );
};

export default RegraDeTres;
