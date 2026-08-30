# ETE API Playground — Postman e Bruno

Este material acompanha o **ETE API Playground**, uma API pública para praticar o ciclo CRUD com um recurso chamado `recado`. Ele foi criado para demonstrar como uma aplicação frontend conversa com um backend usando requisições HTTP reais.

> **Use apenas informações fictícias.** O playground é público e não deve receber senha, token real, CPF, e-mail pessoal, foto, conteúdo privado ou qualquer dado sensível.

## URL do ambiente de aula

No momento, a collection usa a URL pública de pré-visualização abaixo. Ela é adequada para a demonstração enquanto o projeto está em desenvolvimento. Após a publicação definitiva do playground, importe novamente o environment atualizado com a URL permanente.

```text
https://3000-iqayw4dw5yg3wa5kewmw4-4ebbbc96.us2.manus.computer
```

O recurso da API é:

```text
{{baseUrl}}/api/recados
```

| Operação | Método | Rota | Corpo JSON | Status de sucesso |
|---|---|---|---|---|
| Listar | `GET` | `/api/recados` | `context` | `200 OK` |
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

GET continua consultando e DELETE continua removendo o recurso apontado por `:id`. O body obrigatório destas duas operações contém somente um `context` didático, devolvido na resposta quando houver body. Ele não filtra a lista, não escolhe o recurso nem altera a semântica da operação.

Alguns clientes HTTP, bibliotecas, proxies e servidores podem não aceitar body em GET ou DELETE. A RFC 9110 alerta que estes conteúdos não possuem semântica geralmente definida. Este playground os aceita somente para a observação orientada em clientes de API; em sistemas reais, use parâmetros de URL e headers para a consulta e o identificador no caminho para a remoção.[1]

## Postman — instalação e uso

Instale o aplicativo Desktop pela página oficial [Postman Downloads](https://www.postman.com/downloads/). Em seguida, abra o Postman, importe `ETE_API_Playground.postman_collection.json` e `ETE_API_Playground_public.postman_environment.json` por **Import**. Selecione o ambiente **ETE API Playground — Preview público** no canto superior direito e abra as requests na ordem numérica.[2]

Em cada request, confira quatro áreas antes de usar **Send**. O seletor à esquerda da URL define o método; a própria URL usa `{{baseUrl}}`; a aba **Headers** contém os três headers; e a aba **Body** usa **raw → JSON** com o objeto apresentado. Depois do envio, leia status, headers de resposta e body. A request de criação grava automaticamente o id retornado na variável `recadoId`, que será usado em PUT, PATCH e DELETE.

## Bruno — instalação e uso

Baixe o Bruno na página oficial [Bruno Downloads](https://www.usebruno.com/downloads/). No aplicativo, use **Open Collection** e selecione a pasta `bruno/` deste material. Escolha o ambiente **public-preview** no canto superior direito. Cada arquivo `.bru` representa uma request e pode ser lido, modificado e versionado com Git.[3]

Abra os arquivos em `bruno/requests` na ordem numérica. Em cada um, confira o método, URL, aba **Headers** e aba **Body → JSON**. Use **Send** ou `Ctrl/Cmd + Enter`. O Bruno extrai o id do POST e o armazena no ambiente como `recadoId`; depois, PUT, PATCH e DELETE usam `{{recadoId}}` na URL.

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
| `404` | A rota ou id não existe. | Confira URL, método e `recadoId`. |
| `429` | Muitas alterações no curto período. | Aguarde um minuto e reduza os envios repetidos. |

## Referências

[1]: https://www.rfc-editor.org/rfc/rfc9110.html "RFC 9110 — HTTP Semantics"
[2]: https://learning.postman.com/docs/getting-started/quick-start "Postman — Quick start"
[3]: https://docs.usebruno.com/introduction/quick-start "Bruno — Quick Start"
