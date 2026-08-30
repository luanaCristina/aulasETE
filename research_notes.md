# Pesquisa e organização curricular

## Estrutura atual identificada

O portal possui os quadros **Guias de Instalação** e **Guias Full-Stack & DevTools**, ambos hoje ligados a apresentações genéricas de 15 slides. A disciplina de Administração de Bancos de Dados já apresenta PostgreSQL, DER, chaves, normalização, CRUD e JOINs; o novo material deve complementar esse conteúdo com uma trilha explícita e prática de **MySQL + MySQL Workbench**, sem substituir a disciplina existente.

## Decisão de arquitetura de conteúdo

Serão criadas quatro apresentações autônomas, vinculadas por novos cartões no portal: **MySQL na prática**, **JavaScript Backend**, **Python para Backend e APIs** e **Expo: do CRUD à publicação Android**. Os guias de instalação receberão complementos específicos de Windows e macOS e links para essas apresentações.

## Fontes técnicas consultadas

| Tema | Fonte oficial | Uso planejado |
|---|---|---|
| MySQL Installer no Windows | https://dev.mysql.com/downloads/installer/ | Explicar o instalador, os pacotes e a configuração inicial. |
| MySQL Workbench no Windows | https://dev.mysql.com/doc/workbench/en/wb-installing-windows.html | Orientar a instalação via MySQL Installer ou MSI e os requisitos. |
| MySQL Workbench no macOS | https://dev.mysql.com/doc/workbench/en/wb-installing-mac.html | Demonstrar o arquivo DMG, o arrastar para Applications e a abertura do Workbench. |
| JavaScript Backend | https://github.com/reprograma/On9-Accenture-S1-Intro até https://github.com/reprograma/On9-Accenture-S16-Carreira | Organizar uma progressão de Git, Node, HTTP, REST, CRUD, banco de dados, autenticação e projeto. |
| Ambiente Expo | https://docs.expo.dev/get-started/set-up-your-environment/ | Explicar Expo Go, Android Studio, JDK, ADB e as diferenças entre Windows, macOS e dispositivo físico. |
| Primeiro app Expo | https://docs.expo.dev/tutorial/create-your-first-app/ | Basear a criação do projeto, `npx create-expo-app@latest` e `npx expo start`. |
| APK de teste | https://docs.expo.dev/build-reference/apk/ | Distinguir APK de teste e AAB de distribuição, com o perfil `preview` no EAS Build. |
| Envio ao Google Play | https://docs.expo.dev/submit/android/ | Explicar conta Play Developer, package name, chave de serviço, AAB e o fluxo `eas submit`. |
| Ambiente virtual Python | https://docs.python.org/3/tutorial/venv.html | Explicar o isolamento de dependências com `venv`, ativação e instalação com `pip`. |
| API com Flask | https://flask.palletsprojects.com/en/stable/quickstart/ | Fundamentar rota, retorno JSON, request e execução de API Python introdutória. |
| API com FastAPI | https://fastapi.tiangolo.com/tutorial/first-steps/ | Apresentar uma alternativa tipada, documentação automática e execução com Uvicorn. |

## Observação sobre imagens instrucionais

Serão priorizadas imagens oficiais ou diagramas próprios que representem com fidelidade o processo. A imagem de instalação do Workbench no macOS deve ilustrar a ação de arrastar o aplicativo para a pasta Applications; no Windows, o material mostrará o MySQL Installer e a seleção dos componentes Server e Workbench.

## Pontos atuais para o módulo Expo

O Expo recomenda teste inicial com **Expo Go** em aparelho físico; o projeto pode ser criado com `npx create-expo-app@latest` e iniciado com `npx expo start`. Para Android, um **APK** serve a testes e instalação direta, enquanto uma publicação nova no Google Play exige um **AAB**. A submissão pelo EAS exige conta Google Play Developer, app criado no Play Console, package name Android e chave de conta de serviço configurada no EAS.

O guia oficial atual do Expo recomenda dispositivo físico como ponto de partida e confirma o fluxo `npm install --global eas-cli`, `eas login`, `eas build:configure` e `eas build --platform android --profile development` para development builds. A configuração completa com Android Studio requer JDK, Android SDK, platform-tools/ADB e emulador; essa é uma rota opcional, mais adequada quando a turma precisa depurar recursos nativos. Para build de teste, o perfil `preview` pode definir `android.buildType` como `apk`; já o perfil de produção gera AAB por padrão para envio à Play Store.

## Conta Google Play Developer

A documentação oficial informa uma **taxa única de registro de US$ 25** para a conta de desenvolvedor. O registro requer aceitar o contrato de distribuição, escolher conta pessoal ou de organização e verificar a identidade; o pagamento ocorre por GPay com cartão de crédito ou débito compatível, e cartões pré-pagos não são aceitos. Antes de submeter um app, é necessário configurar os dados e metadados, a política de privacidade e a seção Segurança dos dados. Para contas novas, o material deverá orientar a consultar os requisitos de teste e verificação de dispositivos vigentes no Play Console, pois essas regras podem mudar.

## Pontos atuais para o módulo Python

O módulo deverá comparar a mesma ideia em duas sintaxes: variável, condicional, lista/array, dicionário/objeto, função, requisição HTTP e resposta JSON. A prática de backend começará com Flask por ser direta e prosseguirá mostrando que FastAPI adiciona tipagem e documentação interativa. Todo projeto deverá usar ambiente virtual para evitar instalar dependências de uma atividade no ambiente global da máquina.
