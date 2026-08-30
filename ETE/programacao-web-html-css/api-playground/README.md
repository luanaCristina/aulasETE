# ETE API Playground — Postman e Bruno

Este material acompanha o **ETE API Playground**, uma API pública para praticar o ciclo CRUD com um recurso chamado `recado`. Ele foi criado para demonstrar como uma aplicação frontend conversa com um backend usando requisições HTTP reais.

> **Use apenas informações fictícias.** O playground é público e não deve receber senha, token real, CPF, e-mail pessoal, foto, conteúdo privado ou qualquer dado sensível.

## URL do ambiente de aula

Use o domínio público permanente abaixo em toda a atividade. O mesmo endereço já está configurado no environment de Postman e no ambiente do Bruno.

```text
https://eteapiplay-akbqqgv2.manus.space
```

O recurso da API é:

```text
{{baseUrl}}/api/recados
```

| Operação | Método | Rota | Contexto ou corpo | Status de sucesso |
|---|---|---|---|---|
| Listar | `GET` | `/api/recados` | JSON no header `X-API-Context` | `200 OK` |
| Criar | `POST` | `/api/recados` | `context` e `recado` | `201 Created` |
| Substituir | `PUT` | `/api/recados/:id` | `context` e `recado` completo | `200 OK` |
| Atualizar parte | `PATCH` | `/api/recados/:id` | `context` e `alteracoes` | `200 OK` |
| Remover | `DELETE` | `/api/recados/:id` | `context` | `204 No Content` |

## Headers obrigatórios

Todos os cinco métodos exigem estes três headers. Eles existem para ensinar como uma requisição é composta; `X-API-Lab` não é uma senha ou autorização real.

```http
Content-Type: application/json
X-API-Lab: ETE-API-PLAYGROUND
X-Request-Id: postman-ana-001
```

## Contexto em GET e DELETE

GET continua consultando e DELETE continua removendo o recurso apontado por `:id`. No domínio permanente, envie o JSON de `context` do GET no header `X-API-Context`; ele é devolvido em `meta.context`, não filtra a lista e não altera a semântica da consulta. O DELETE usa um body JSON com `context`, mas o alvo removido permanece exclusivamente no `:id` da URL.

Corpos em GET não possuem semântica geralmente definida e podem ser recusados por clientes, bibliotecas, proxies e gateways. Por esse motivo, a collection do Postman e a collection do Bruno usam `X-API-Context` na consulta publicada. Em sistemas reais, use parâmetros de URL e headers para a consulta e o identificador no caminho para a remoção.[1]

## Postman — instalação e uso

Instale o aplicativo Desktop pela página oficial [Postman Downloads](https://www.postman.com/downloads/). Em seguida, abra o Postman, importe `ETE_API_Playground.postman_collection.json` e `ETE_API_Playground_public.postman_environment.json` por **Import**. Selecione o ambiente **ETE API Playground — Produção pública** no canto superior direito e abra as requests na ordem numérica.[2]

Em cada request, confira quatro áreas antes de usar **Send**. O seletor à esquerda da URL define o método; a própria URL usa `{{baseUrl}}`; a aba **Headers** contém os três headers; e a aba **Body** usa **raw → JSON** em POST, PUT, PATCH e DELETE. Na request GET, confira o JSON de contexto em `X-API-Context`. Depois do envio, leia status, headers de resposta e body. A request de criação grava automaticamente o id retornado na variável `recadoId`, que será usado em PUT, PATCH e DELETE.

## Bruno — instalação e uso

Baixe o Bruno na página oficial [Bruno Downloads](https://www.usebruno.com/downloads/). No aplicativo, use **Open Collection** e selecione a pasta `bruno/` deste material. Escolha o ambiente **public-preview** no canto superior direito; ele já aponta para o domínio permanente. Cada arquivo `.bru` representa uma request e pode ser lido, modificado e versionado com Git.[3]

Abra os arquivos em `bruno/requests` na ordem numérica. Em cada um, confira o método, URL, aba **Headers** e aba **Body → JSON** para POST, PUT, PATCH e DELETE. No GET, o contexto está no header `X-API-Context`. Use **Send** ou `Ctrl/Cmd + Enter`. O Bruno extrai o id do POST e o armazena no ambiente como `recadoId`; depois, PUT, PATCH e DELETE usam `{{recadoId}}` na URL.

## Roteiro de demonstração

1. Execute **01 — GET listar** e explique o status `200` e a lista de recados.
2. Execute **02 — POST criar**; copie o id retornado ou deixe a collection atualizar a variável.
3. Execute **03 — PUT substituir** e compare o objeto completo antes e depois.
4. Execute **04 — PATCH atualizar** e observe que somente uma propriedade foi alterada.
5. Execute **05 — DELETE remover** e explique `204 No Content`.
6. Execute GET mais uma vez para verificar que o item não aparece mais.

## Diagnóstico rápido

| Status | Interpretação | Ação de verificação |
|---|---|---|
| `200 OK` | Consulta ou atualização concluída. | Leia `data` e `meta` no body. |
| `201 Created` | Um recado foi criado. | Salve o `id` retornado. |
| `204 No Content` | A remoção foi concluída. | Não há body; execute GET para confirmar. |
| `400` | Header obrigatório ausente ou incorreto. | Confira `X-API-Lab` e `X-Request-Id`. |
| `415` | O conteúdo não foi identificado como JSON. | Use `Content-Type: application/json`. |
| `422` | O JSON não segue o contrato. | Confira nomes, aspas e campos obrigatórios. |
| `404` | A rota ou id não existe. | Execute POST, copie o `data.id` retornado e só então use PUT, PATCH ou DELETE. |
| `429` | Muitas alterações no curto período. | Aguarde um minuto e reduza os envios repetidos. |

## Referências

[1]: https://www.rfc-editor.org/rfc/rfc9110.html "RFC 9110 — HTTP Semantics"
[2]: https://learning.postman.com/docs/getting-started/quick-start "Postman — Quick start"
[3]: https://docs.usebruno.com/introduction/quick-start "Bruno — Quick Start"
