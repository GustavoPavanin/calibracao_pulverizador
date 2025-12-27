import { useRef, useState } from 'react';
import * as MediaLibrary from 'expo-media-library';
import CalculadoraCaldaView from './CalculadoraCaldaView';

export default function CalculadoraCalda() {
    const viewShotRef = useRef(null);

    const [tituloImpressao, setTituloImpressao] = useState('');
    const [volume, setVolume] = useState('0');
    const [taxa, setTaxa] = useState('0');
    const [produtos, setProdutos] = useState([
        { id: 1, produto: '', doseHa: '', unidade: 'L', resultado: 0 },
    ]);
    const [modalExportarVisivel, setModalExportarVisivel] = useState(false);

    var area = Number(volume) / Number(taxa) || 0;

    function calcular() {
        const atualizados = produtos.map((produto) => {
            const dose = Number(produto.doseHa) || 0;
            return {
                ...produto,
                resultado: dose * area,
            };
        });
        setProdutos(atualizados);
    }

    function adicionarLinha() {
        setProdutos([
            ...produtos,
            {
                id: Date.now(),
                produto: '',
                doseHa: '',
                unidade: 'L',
                resultado: 0,
            },
        ]);
    }

    function atualizarProduto(id, campo, valor) {
        setProdutos(produtos.map((p) => (p.id === id ? { ...p, [campo]: valor } : p)));
    }

    async function exportarImagem() {
        try {
            const uri = await viewShotRef.current.capture();
            await MediaLibrary.requestPermissionsAsync();
            const asset = await MediaLibrary.createAssetAsync(uri);
            const albumName = 'Formulas';
            let album = await MediaLibrary.getAlbumAsync(albumName);

            if (!album) {
                album = await MediaLibrary.createAlbumAsync(albumName, asset, false);
            } else {
                await MediaLibrary.addAssetsToAlbumAsync([asset], album, false);
            }
            setModalExportarVisivel(true);
        } catch (e) {
            Alert.alert('Erro', 'Não foi possível exportar a imagem');
        }
    }

    function limparCampos() {
        setVolume('');
        setTaxa('');
        setProdutos([{ id: 1, produto: '', doseHa: '', unidade: 'L', resultado: 0 }]);
        area = 0;
        //sum(valor ref: decodeURI)
    }

    return (
        <CalculadoraCaldaView
            volume={volume}
            taxa={taxa}
            produtos={produtos}
            area={area}
            calcular={calcular}
            adicionarLinha={adicionarLinha}
            atualizarProduto={atualizarProduto}
            exportarImagem={exportarImagem}
            setTaxa={setTaxa}
            setVolume={setVolume}
            viewShotRef={viewShotRef}
            limparCampos={limparCampos}
            tituloImpressao={tituloImpressao}
            setTituloImpressao={setTituloImpressao}
            modalExportarVisivel={modalExportarVisivel}
            setModalExportarVisivel={setModalExportarVisivel}
        />
    );
}
