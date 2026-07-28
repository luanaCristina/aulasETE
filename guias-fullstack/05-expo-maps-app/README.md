# 05 - Expo Maps App

## Descrição

Aplicação React Native com Expo que implementa:
- Mapa interativo com `react-native-maps`
- Marcadores customizados com callouts
- Geolocalização do usuário em tempo real
- Controle de região e zoom
- UI sobreposta ao mapa com informações

## Pré-requisitos

- Node.js 18+ instalado
- Expo CLI: `npm install -g expo-cli` (ou use `npx`)
- App **Expo Go** no celular (iOS/Android) para testes
- Conta no Google Cloud (para chave da API Google Maps)

## Passo a Passo Completo

### 1. Instalar dependências do projeto

```bash
cd aula/guias-fullstack/05-expo-maps-app/
npm install
```

### 2. Configurar Chave de API do Google Maps

#### Para Android (obrigatório):

1. Acesse https://console.cloud.google.com/
2. Crie um projeto (ou selecione existente)
3. Vá em **APIs & Services → Library**
4. Ative **"Maps SDK for Android"**
5. Vá em **APIs & Services → Credentials**
6. Clique **"Create Credentials" → API Key**
7. Copie a chave gerada
8. Edite o arquivo `app.json` e substitua:
   ```
   "SUA_CHAVE_GOOGLE_MAPS_AQUI" → sua chave real
   ```

#### Para iOS:

- **Apple Maps** funciona automaticamente (sem chave)
- Se preferir Google Maps no iOS, adicione a mesma chave em `ios.config.googleMapsApiKey`

### 3. Executar no Expo Go

```bash
# Iniciar o servidor de desenvolvimento
npx expo start
```

Depois:
- **Celular:** Abra o app Expo Go e escaneie o QR Code
- **Emulador Android:** Pressione `a` no terminal
- **Simulador iOS:** Pressione `i` no terminal

### 4. Build de Desenvolvimento (opcional)

Para funcionalidades nativas completas (como Google Maps no Android):

```bash
# Android
npx expo run:android

# iOS (requer macOS)
npx expo run:ios
```

## Funcionalidades Implementadas

| Feature | Descrição |
|---------|-----------|
| Mapa interativo | Zoom, pan, rotação com gestos nativos |
| Marcadores | Pins customizados com título e descrição |
| Geolocalização | Posição do usuário em tempo real |
| Controles | Botão para centralizar no usuário |
| Info Box | Painel com coordenadas atuais |
| Responsivo | Adapta-se a qualquer tamanho de tela |

## Estrutura

```
05-expo-maps-app/
├── App.js          # Componente principal com MapView
├── app.json        # Configuração Expo (chaves de API, permissões)
├── package.json    # Dependências do projeto
└── README.md       # Este arquivo
```

## Solução de Problemas

| Problema | Solução |
|----------|---------|
| Mapa não aparece (Android) | Verifique se a chave Google Maps está em `app.json` |
| Localização não funciona | Verifique permissões no dispositivo |
| `expo-location` erro | Execute `npx expo install expo-location` |
| Mapa em branco | Verifique se a API Maps SDK está ativada no Google Cloud |

## Referências

- Expo MapView: https://docs.expo.dev/versions/latest/sdk/map-view/
- react-native-maps: https://github.com/react-native-maps/react-native-maps
- Expo Location: https://docs.expo.dev/versions/latest/sdk/location/
- Google Maps Platform: https://developers.google.com/maps
- Google Cloud Console: https://console.cloud.google.com/
