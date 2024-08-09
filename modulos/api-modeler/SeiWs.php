<?php

class SeiWs{
    private $urlSei = 'https://unb-sei.cade.gov.br/sei/controlador_ws.php?servico=sei';
    private $sigla = '<Informe aqui a SIGLA do SEI>';
    private $identificacao = '<Informe aqui a Identificação do SEI>';

    private function getSeiSoapClient(){
        return new \SoapClient($this->urlSei, array('encoding'=>'ISO-8859-1'));
    }

    public function getConsultarDocumento($idDocumento){
        $objWS = $this->getSeiSoapClient();

        try{
            $dados = $objWS->consultarDocumento($this->sigla, $this->identificacao, null, $idDocumento);
        }catch(\Exception $e){
            var_dump($e);
        }

        $resultado = array();

        if($dados->IdProcedimento){
            $resultado['idProcedimento'] = $dados->IdProcedimento;
            $resultado['procedimentoFormatado'] = $dados->ProcedimentoFormatado;
            $resultado['idDocumento'] = $dados->IdDocumento;
            $resultado['serie'] = 
            [
                'idSerie' => $dados->Serie->IdSerie,
                'nome' => utf8_encode($dados->Serie->Nome),
            ];
        }

        
        return json_encode($resultado);
    }

    public function getConsultarProcedimento($procedimento){
        $objWS = $this->getSeiSoapClient();

        try{
            $dados = $objWS->consultarProcedimento($this->sigla, $this->identificacao, null, $procedimento);
        }catch(Exception $e){
            var_dump($e);
        }

        if($dados->IdProcedimento){
            $resultado['idProcedimento'] = $dados->IdProcedimento;
            $resultado['procedimentoFormatado'] = $dados->ProcedimentoFormatado;
            $resultado['tipoProcedimento'] = [
                'idTipoProcedimento' => $dados->TipoProcedimento->IdTipoProcedimento,
                'nome' => utf8_encode($dados->TipoProcedimento->Nome), 
            ];
        }

        return json_encode($resultado);
    }

    public function getListarTipoDocumento(){
        $objWS = $this->getSeiSoapClient();

        try{
            $dados = $objWS->listarSeries($this->sigla, $this->identificacao);
        }catch(Exception $e){
            var_dump($e);
        }
    
        $tipoDocumentos = array();
        foreach($dados as $dado){
            $tipoDocumentos[] = [
                'id' => $dado->IdSerie,
                'nome' => utf8_encode($dado->Nome),
            ];
        }

        return json_encode($tipoDocumentos);
    }

    public function listarTiposProcedimento(){
        $objWS = $this->getSeiSoapClient();
        try{
            $dados = $objWS->listarTiposProcedimento($this->sigla, $this->identificacao);
        }catch(Exception $e){
            var_dump($e);
        }
    
        $tipoProcedimentos = array();
        foreach($dados as $dado){
            $tipoProcedimentos[] = [
                'id' => $dado->IdTipoProcedimento,
                'nome' => utf8_encode($dado->Nome),
            ];
        }

        return json_encode($tipoProcedimentos);
    }

    public function getListarUnidades(){
        $objWS = $this->getSeiSoapClient();

        try{
            $dados = $objWS->listarUnidades($this->sigla, $this->identificacao);
        }catch(Exception $e){
            var_dump($e);
        }
    
        $unidades = array();
        foreach($dados as $dado){
            $unidades[] = [
                'id' => $dado->IdUnidade,
                'sigla' => utf8_encode($dado->Sigla),
                'descricao' => utf8_encode($dado->Descricao),
            ];
        }

        return json_encode($unidades);
    }

    public function getListarUsuarios($idUnidade){
        $objWS = $this->getSeiSoapClient();

        try{
            $dados = $objWS->listarUsuarios($this->sigla, $this->identificacao, $idUnidade);
        }catch(Exception $e){
            var_dump($e);
        }
    
        $usuarios = array();
        foreach($dados as $dado){
            $usuarios[] = [
                'id' => $dado->IdUsuario,
                'sigla' => utf8_encode($dado->Sigla),
                'nome' => utf8_encode($dado->Nome),
            ];
        }

        return json_encode($usuarios);
    }

    public function getListarCargos($idUnidade){
        $objWS = $this->getSeiSoapClient();

        try{
            $dados = $objWS->listarCargos($this->sigla, $this->identificacao, $idUnidade);
        }catch(Exception $e){
            echo '<pre>';
            var_dump($e);exit;
        }

        $cargos = array();
        foreach($dados as $dado){
            $cargos[] = [
                'id' => $dado->IdCargo,
                'cargo' => utf8_encode($dado->ExpressaoCargo),
            ];
        }

        return json_encode($cargos);
    }
}
