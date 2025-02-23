import { useState } from 'react';
import { Keyboard } from 'react-native';
import CalculadoraAdubacaoView from './CalculadoraAdubacaoView';

const CalculadoraAdubacao = () => {
    const [taxaAplicacao, setTaxaAplicacao] = useState('');
    const [larguraImplemento, setLarguraImplemento] = useState('');
    const [velocidadeTrabalho, setVelocidadeTrabalho] = useState('');
    const [quantidadeSecoes, setQuantidadeSecoes] = useState('');
    const [tempoColeta, setTempoColeta] = useState('');
    const [distanciaProva, setDistanciaProva] = useState('');
    const [isModalVisible, setModalVisible] = useState(false);
    const [calculatedResults, setCalculatedResults] = useState({});
    const fatorConversao = 3.6;
    const HA = 10000;

    const calculaVolumeColeta = () => {
        Keyboard.dismiss();
        var volumeDaColeta = '0';
        if (
            taxaAplicacao != '' &&
            larguraImplemento != '' &&
            velocidadeTrabalho != '' &&
            quantidadeSecoes != '' &&
            tempoColeta != ''
        ) {
            volumeDaColeta = formulaTaxaDeAplicacao().toFixed(3);
        }
        var results = {};
        results['Volume de Coleta'] = volumeDaColeta.toString() + ' kg';
        if (distanciaProva > 0) {
            const velocidadeMS = velocidadeTrabalho / fatorConversao;
            var tempoProva = distanciaProva / velocidadeMS;
            results[distanciaProva.toString() + ' metros em'] =
                tempoProva.toFixed(3).toString() + ' segundos';
        }
        setCalculatedResults(results);
        setModalVisible(true);
    };

    const formulaTaxaDeAplicacao = () => {
        return (
            (tempoColeta * taxaAplicacao) /
            (HA / larguraImplemento / (velocidadeTrabalho / fatorConversao)) /
            quantidadeSecoes
        );
    };
    const onChangeTaxaAplicacao = (value) => {
        setTaxaAplicacao(value);
    };
    const onChangeLarguraImplemento = (value) => {
        setLarguraImplemento(value);
    };
    const onChangeVelocidadeTrabalho = (value) => {
        setVelocidadeTrabalho(value);
    };
    const onChangeQuantidadeSecoes = (value) => {
        setQuantidadeSecoes(value);
    };
    const onChangeTempoColeta = (value) => {
        setTempoColeta(value);
    };
    const onChangeDistanciaProva = (value) => {
        setDistanciaProva(value);
    };

    const limparCampos = () => {
        setTaxaAplicacao('');
        setLarguraImplemento('');
        setVelocidadeTrabalho('');
        setQuantidadeSecoes('');
        setTempoColeta('');
        setDistanciaProva('');
    };

    return (
        <CalculadoraAdubacaoView
            taxaAplicacao={taxaAplicacao}
            larguraImplemento={larguraImplemento}
            velocidadeTrabalho={velocidadeTrabalho}
            quantidadeSecoes={quantidadeSecoes}
            tempoColeta={tempoColeta}
            distanciaProva={distanciaProva}
            onChangeTaxaAplicacao={onChangeTaxaAplicacao}
            onChangeLarguraImplemento={onChangeLarguraImplemento}
            onChangeVelocidadeTrabalho={onChangeVelocidadeTrabalho}
            onChangeQuantidadeSecoes={onChangeQuantidadeSecoes}
            onChangeTempoColeta={onChangeTempoColeta}
            calculaVolumeColeta={calculaVolumeColeta}
            onChangeDistanciaProva={onChangeDistanciaProva}
            limparCampos={limparCampos}
            isModalVisible={isModalVisible}
            setModalVisible={setModalVisible}
            calculatedResults={calculatedResults}
        />
    );
};

export default CalculadoraAdubacao;
