import { useState } from 'react';
import RegraDeTresView from './RegraDeTresView';

const RegraDeTres = () => {
    const [a, setA] = useState('');
    const [b, setB] = useState('');
    const [c, setC] = useState('');
    const [resultado, setResultado] = useState(null);
    const [inversamente, setInversamente] = useState(false);

    function calcular() {
        const nA = parseFloat(a.replace(',', '.'));
        const nB = parseFloat(b.replace(',', '.'));
        const nC = parseFloat(c.replace(',', '.'));

        if (isNaN(nA) || isNaN(nB) || isNaN(nC)) {
            setResultado(null);
            return;
        }

        let x;
        if (inversamente) {
            // Regra de 3 inversa: A * B = C * X
            x = (nA * nB) / nC;
        } else {
            // Regra de 3 simples: A / B = C / X
            x = (nB * nC) / nA;
        }

        setResultado(x.toFixed(2));
    }
    const limparCampos = () => {
        setA('');
        setB('');
        setC('');
        setResultado(null);
        setInversamente(false);
    };

    const setValorInversamente = () => {
        setInversamente(!inversamente);
    };
    return (
        <RegraDeTresView
            a={a}
            b={b}
            c={c}
            resultado={resultado}
            inversamente={inversamente}
            calcular={calcular}
            limparCampos={limparCampos}
            setInversamente={setValorInversamente}
            setA={setA}
            setB={setB}
            setC={setC}
            setResultado={setResultado}
        />
    );
};

export default RegraDeTres;
