## Api de integração com SEI

Este modulo foi desenvolvido para fornecer uma resposta de API baseada em JSON REST FULL. O Mesmo é uma tradução de APIs SOAP/XML do SEI para JSON.

### Endpoints

##### Consultar Documento  
`get` {url}/index.php?rota=consultar-documento&documento=0000000

Retorno
```
{
    "idProcedimento":"00000",
    "procedimentoFormatado":"00000.000000\/0000-00",
    "idDocumento":"00000",
    "serie":{
        "idSerie":"000",
        "nome":"String"
    }
}
```
##### Consultar Processo  
`get` {url}/index.php?rota=consultar-processo&processo=00000.000000/0000-00

Retorno
```
{
    "idProcedimento":"00000",
    "procedimentoFormatado":"00000.000000\/0000-00",
    "tipoProcedimento":{
        "idTipoProcedimento":"000000000",
        "nome":"String"
    }
}
```
##### Listar Tipo de Documentos  
`get` {url}/index.php?rota=listar-tipo-documentos

Retorno
```
[
    {
        "id":"0",
        "nome":"String"
    },
    {
        "id":"0",
        "nome":"String"
    }
    ...
]
```
##### Listar Tipo de Processos  
`get` {url}/index.php?rota=listar-tipo-processos

Retorno
```
[
    {
        "id":"0",
        "nome":"String"
    },
    {
        "id":"0",
        "nome":"String"
    }
    ...
]
```
##### Listar Unidades  
`get` {url}/index.php?rota=listar-unidades

Retorno
```
[
    {
        "id":"0",
        "sigla":"String",
        "descricao":"String",
    },
    {
        "id":"0",
        "sigla":"String",
        "descricao":"String",
    }
    ...
]
```
##### Listar Usuários por unidade  
`get` {url}/index.php?rota=listar-usuarios&unidade=000000

Retorno
```
[
    {
        "id":"0",
        "sigla":"String",
        "nome":"String",
    },
    {
        "id":"0",
        "sigla":"String",
        "nome":"String",
    }
    ...
]
```

##### Listar Cargos por unidade  
`get` {url}/index.php?rota=listar-cargos&unidade=000000

Retorno
```
[
    {
        "id":"0",
        "cargo":"String"
    },
    {
        "id":"0",
        "sigla":"String"
    }
    ...
]
```
