<?php

require('SeiWs.php');
$seiWs = new SeiWs();

preg_match('([a-z\-]+)', $_GET['rota'], $rota);
preg_match('([0-9]{7}+)', $_GET['documento'], $documento);
preg_match('([0-9]{5}\.[0-9]{6}\/[0-9]{4}\-[0-9]{2}+|[0-9]{17}+)', $_GET['processo'], $processo);
preg_match('([0-9]+)', $_GET['unidade'], $unidade);

$rota = $rota[0];
$documento = $documento[0];
$processo = $processo[0];
$unidade = $unidade[0];

switch($rota){    
    case 'consultar-documento':
        // echo $seiWs->getConsultarDocumento('0008968');
        echo $seiWs->getConsultarDocumento($documento);
    break;
    case 'consultar-processo':
        // echo $seiWs->getConsultarProcedimento('08700.000690/2021-54');
        echo $seiWs->getConsultarProcedimento($processo);
    break;
    case 'listar-tipo-documentos':
        echo $seiWs->getListarTipoDocumento();
    break;
    case 'listar-tipo-processos':
        echo $seiWs->listarTiposProcedimento();
    break;
    case 'listar-unidades':
        echo $seiWs->getListarUnidades();
    break;
    case 'listar-usuarios':
        // 110000931
        echo $seiWs->getListarUsuarios($unidade);
    break;
    case 'listar-cargos':
        echo $seiWs->getListarCargos($unidade);
    break;
    case 'token_gettoken':
         echo ""
}


// $seiWs->getListarUnidades();
// $seiWs->getListarUsuarios('110000931');
// $seiWs->getListarCargos('110000931');





//     echo json_encode($arrayList);
