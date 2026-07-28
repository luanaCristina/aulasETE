# 📱 Guia Complementar — Multiplataforma, Emuladores & Publicação nas Stores

> **Continuação do:** Guia Fullstack Mobile (guia-fullstack-mobile.md)  
> **Foco:** Rodar no celular, ajustes Android/iOS e publicar nas lojas

---

## 1. ✅ Validação Multiplataforma — Android & iOS

### O projeto funciona nos dois?

**Sim!** React Native com Expo é **cross-platform por natureza**. O mesmo código
roda em Android e iOS. Porém, existem detalhes que precisam de atenção:

---

### Diferenças Importantes entre Android e iOS

| Aspecto | Android | iOS |
|---------|---------|-----|
| **Safe Area** | Barra de status transparente | Notch (recorte) + barra home |
| **Sombras** | `elevation: 3` | `shadowColor/Offset/Opacity/Radius` |
| **Botão Voltar** | Botão físico/virtual nativo | Gesture (swipe da esquerda) |
| **Fontes** | Roboto (padrão) | San Francisco (padrão) |
| **StatusBar** | Cor personalizável | Estilo light/dark |
| **Permissões** | `AndroidManifest.xml` (via app.json) | `Info.plist` (via app.json) |

---

### Ajuste 1: SafeAreaView (evitar conteúdo atrás do notch)

```jsx
// ❌ ERRADO — conteúdo pode ficar escondido atrás do notch no iPhone
import { View } from 'react-native';
export default function App() {
  return <View style={{ flex: 1 }}>...</View>;
}

// ✅ CERTO — SafeAreaView respeita notch e barra de status
import { SafeAreaView, StatusBar, Platform } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8F9FA" />
      {/* Conteúdo aqui */}
    </SafeAreaView>
  );
}
```

---

### Ajuste 2: Sombras cross-platform

```javascript
// ✅ Sombra que funciona nos DOIS sistemas
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    // Android
    elevation: 4,
    // iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
});
```

---

### Ajuste 3: app.json completo (permissões e configs)

```json
{
  "expo": {
    "name": "ComUnidade",
    "slug": "comunidade-app",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#6C5CE7"
    },
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.seutime.comunidade",
      "infoPlist": {
        "NSLocationWhenInUseUsageDescription": "Precisamos da localização para mostrar tarefas perto de você."
      }
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#6C5CE7"
      },
      "package": "com.seutime.comunidade",
      "permissions": ["ACCESS_FINE_LOCATION"]
    },
    "plugins": ["expo-location"]
  }
}
```

---

### Ajuste 4: Botão com feedback visual cross-platform

```jsx
import { Platform, TouchableOpacity, TouchableNativeFeedback, View, Text } from 'react-native';

// Android tem ripple effect nativo; iOS usa opacity
function CrossButton({ title, onPress, color = '#6C5CE7' }) {
  if (Platform.OS === 'android') {
    return (
      <TouchableNativeFeedback onPress={onPress} background={TouchableNativeFeedback.Ripple('#fff', false)}>
        <View style={[styles.button, { backgroundColor: color }]}>
          <Text style={styles.buttonText}>{title}</Text>
        </View>
      </TouchableNativeFeedback>
    );
  }

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={[styles.button, { backgroundColor: color }]}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}
```

---

## 2. 💻📱 Como Rodar no Computador e Visualizar no Celular

### Opção A: Emulador Android (Android Studio — Windows/Mac/Linux)

#### Passo a Passo:

1. **Baixar Android Studio:** https://developer.android.com/studio
2. **Instalar** (aceitar SDK, NDK e AVD durante setup — ~8 GB de espaço)
3. **Criar emulador:**
   - Abrir Android Studio → "More Actions" → "Virtual Device Manager"
   - "Create Device" → Escolher "Pixel 7" (ou qualquer modelo)
   - System Image: Selecionar **API 34** (mais recente) → "Download" → "Next" → "Finish"
4. **Iniciar emulador:** Clicar no ▶️ do dispositivo criado
5. **Rodar o Expo no emulador:**

```bash
# No terminal do projeto:
npx expo start

# Pressione "a" para abrir no Android
# Expo detecta o emulador e instala o app automaticamente!
```

---

### Opção B: Simulador iOS (Xcode — APENAS macOS)

> ⚠️ Xcode só funciona no macOS. Alunos com Windows/Linux usam o Android.

1. **Instalar Xcode** via App Store (gratuito, ~12 GB)
2. **Abrir Xcode** → Menu "Xcode" → "Settings" → "Platforms" → instalar iOS Simulator
3. **Rodar:**

```bash
npx expo start

# Pressione "i" para abrir no iOS Simulator
# Abre um iPhone virtual com o app!
```

---

### Opção C: Celular Físico com Expo Go (RECOMENDADO para sala de aula!)

> 🏆 **Melhor opção para a escola:** zero instalação pesada, funciona em qualquer celular.

#### Requisitos:
- 📱 Celular Android 6+ ou iPhone com iOS 13+
- 📶 Celular e computador na **MESMA rede Wi-Fi**
- 📲 App **Expo Go** instalado

#### Passo a Passo:

**1. Instalar Expo Go no celular:**
- **Android:** Play Store → buscar "Expo Go" → Instalar
- **iPhone:** App Store → buscar "Expo Go" → Instalar

**2. Iniciar o projeto no computador:**
```bash
cd comunidade-app
npx expo start
```

**3. Conectar o celular:**
- No terminal aparece um **QR Code** gigante
- **Android:** Abrir Expo Go → "Scan QR Code" → apontar câmera
- **iPhone:** Abrir câmera nativa → escanear QR → toca no link do Expo

**4. Pronto!** O app aparece no celular em ~10 segundos.
- Toda alteração no código atualiza no celular automaticamente (Hot Reload!)
- Shake do celular = menu de debug

---

### ⚠️ Erros Comuns de Conexão e Soluções

| Problema | Causa | Solução |
|----------|-------|---------|
| QR Code escaneado mas app não carrega | Celular e PC em redes Wi-Fi diferentes | Conectar AMBOS na mesma rede (mesmo SSID) |
| "Network response timed out" | Firewall bloqueando porta 8081 | **Windows:** Permitir Node.js no Firewall do Windows. **Mac:** System Settings → Firewall → desativar ou permitir Node |
| Expo Go não encontra o servidor | IP local errado | No terminal do Expo, pressione `w` (web) pra verificar o IP. Ou use `npx expo start --tunnel` |
| "Unable to resolve host" | DNS/rede corporativa bloqueando | Usar **tunnel mode:** `npx expo start --tunnel` (usa internet, mais lento) |
| App abre mas API retorna erro | URL da API com localhost | Trocar `localhost` pelo IP real: `http://192.168.1.X:3000` (ver IP com `ipconfig`/`ifconfig`) |

#### Como descobrir seu IP local:
```bash
# Windows (PowerShell)
ipconfig    # Procurar "IPv4 Address" da rede Wi-Fi

# macOS / Linux
ifconfig | grep "inet "    # Ou: ip addr show wlan0
```

Usar esse IP no `api.js`:
```javascript
// src/services/api.js
const api = axios.create({
  baseURL: 'http://192.168.1.105:3000/api',  // ← seu IP real aqui
});
```

---

### Modo Tunnel (quando nada funciona)

Se a rede da escola bloqueia conexões locais:

```bash
# Instalar ngrok (já vem integrado ao Expo)
npx expo start --tunnel

# Gera URL pública tipo: exp://xxxxx.exp.direct:443
# Funciona mesmo em redes diferentes ou com firewall!
# (mais lento que LAN, mas resolve 100% dos problemas de rede)
```

---

## 3. 🏪 Publicação no Google Play Console (Android)

> 💰 **Custo:** Taxa ÚNICA de US$ 25 (~R$ 130). Paga uma vez, publica apps para sempre.

---

### Etapa 1: Criar Conta de Desenvolvedor Google

1. Acesse: https://play.google.com/console/signup
2. Faça login com sua conta Google (Gmail)
3. Aceite os termos de desenvolvedor
4. Pague a taxa de **US$ 25** (cartão de crédito/débito internacional)
5. Preencha:
   - Nome do desenvolvedor (aparece na loja)
   - E-mail de contato
   - Telefone (para verificação)
6. **Verificação de identidade** (pode levar 2-5 dias):
   - Upload de documento (RG ou Passaporte)
   - Selfie segurando o documento

---

### Etapa 2: Configurar EAS Build (Expo Application Services)

```bash
# Instalar EAS CLI (se não tiver)
npm install -g eas-cli

# Fazer login na conta Expo
eas login

# Configurar o projeto para build
eas build:configure
# Selecione: "All" (gera configs para Android e iOS)
```

Isso cria o arquivo `eas.json` na raiz do projeto:

```json
{
  "build": {
    "preview": {
      "android": { "buildType": "apk" }
    },
    "production": {
      "android": { "buildType": "app-bundle" }
    }
  }
}
```

---

### Etapa 3: Gerar o .aab (Android App Bundle)

```bash
# Build de produção (gera .aab na nuvem do Expo)
eas build --platform android --profile production

# Aguardar ~10-15 minutos (build na nuvem, não precisa de nada local!)
# Ao finalizar, o terminal mostra o link para download do .aab
```

> 💡 **APK vs AAB:** A Play Store exige **.aab** (App Bundle). APK é apenas para teste direto no celular.

Para gerar APK de teste (instalar no celular sem loja):
```bash
eas build --platform android --profile preview
# Gera .apk → pode instalar diretamente em qualquer Android
```

---

### Etapa 4: Publicar na Google Play Store

1. Acesse: https://play.google.com/console
2. "Criar App" → Preencher:
   - Nome do app: "ComUnidade"
   - Idioma: Português (Brasil)
   - Tipo: App (não jogo)
   - Gratuito ou Pago: Gratuito
3. **Ficha da loja** (obrigatório para publicar):

| Campo | O que preencher |
|-------|-----------------|
| Título | ComUnidade — Tarefas Comunitárias |
| Descrição curta | Organize tarefas da sua comunidade de forma colaborativa |
| Descrição completa | Texto de até 4000 chars descrevendo funcionalidades |
| Ícone | PNG 512x512px (fundo colorido, ícone simples) |
| Feature Graphic | PNG 1024x500px (banner da loja) |
| Screenshots | Mínimo 2 prints do app (celular) |
| Categoria | Social / Produtividade |
| Política de Privacidade | URL de página com sua política (obrigatório!) |

4. **Enviar o build:**
   - Menu lateral → "Produção" → "Criar nova versão"
   - Upload do arquivo `.aab` (baixado do EAS Build)
   - Preencher "Notas da versão" (ex: "Versão inicial 1.0.0")
   - "Revisar versão" → "Iniciar lançamento"

5. **Aguardar revisão:** Google revisa em 1-7 dias (primeira vez demora mais)

---

### ⚠️ Alertas Importantes (Google Play)

| Alerta | Detalhe |
|--------|---------|
| 🔐 Política de Privacidade | OBRIGATÓRIA. Crie em sites gratuitos como privacypolicygenerator.info |
| 📋 Formulário de segurança | Google pergunta quais dados o app coleta (preencher com honestidade) |
| 🎯 Target API Level | Google exige targetSdkVersion recente (Expo já cuida disso) |
| ⏰ Primeira revisão | Pode levar até 7 dias. Subsequentes: 1-3 dias |
| 🚫 Motivos de rejeição comuns | App crashes, conteúdo incompleto, falta de política de privacidade |

---

## 4. 🍎 Publicação na App Store / Apple Developer (iOS)

> 💰 **Custo:** Anuidade de **US$ 99/ano** (~R$ 520/ano). Renovação obrigatória.  
> ⚠️ Mais caro e burocrático que o Google. Mas alcança o público iPhone.

---

### Etapa 1: Criar Conta no Apple Developer Program

**Pré-requisitos:**
- Apple ID (criar em appleid.apple.com se não tiver)
- Documento de identidade para verificação
- Cartão de crédito internacional (para pagar US$ 99/ano)
- ⚠️ Para conta de **organização**: precisa de DUNS Number (cadastro empresarial)

**Passo a passo:**
1. Acesse: https://developer.apple.com/programs/enroll/
2. Login com Apple ID
3. Aceitar termos
4. Escolher tipo: **Individual** (pessoa física) ou **Organization** (empresa)
5. Pagar US$ 99 (cobrado anualmente — app sai da loja se não renovar!)
6. Verificação: 1-2 dias úteis para Apple aprovar

---

### Etapa 2: Gerar Build iOS com EAS (na nuvem!)

> 🏆 **Grande vantagem do Expo:** Você NÃO precisa de um Mac para gerar o build iOS.
> O EAS Build compila na nuvem da Expo usando servidores macOS remotos.

```bash
# Garantir que app.json tem o bundleIdentifier correto
# "ios": { "bundleIdentifier": "com.seutime.comunidade" }

# Gerar build de produção para iOS
eas build --platform ios --profile production

# O EAS vai perguntar:
# "Do you have an Apple Developer account?" → Yes
# Login com Apple ID (autenticação 2FA)
# Certificados e provisioning profiles são gerados AUTOMATICAMENTE! 🎉

# Aguardar ~15-20 minutos
# Resultado: link para download do arquivo .ipa
```

> 💡 **Sem Mac?** Sem problema! O build roda na nuvem. Você só precisa da conta Apple Developer.

---

### Etapa 3: Enviar para TestFlight (Teste Beta)

TestFlight é o app da Apple para distribuir versões beta para testadores internos.

```bash
# Enviar build diretamente para App Store Connect
eas submit --platform ios

# OU: fazer upload manual:
# 1. Baixar o .ipa do link do EAS Build
# 2. Usar "Transporter" app (Mac) para fazer upload
# 3. Ou usar eas submit (recomendado — faz tudo automaticamente)
```

**No App Store Connect (navegador):**
1. Acesse: https://appstoreconnect.apple.com
2. "Meus Apps" → "+ Novo App"
3. Preencher:
   - Nome: "ComUnidade"
   - Bundle ID: selecionar o que foi criado
   - SKU: "comunidade-v1" (identificador interno)
4. Após o build processar (~30 min):
   - Ir em "TestFlight" → selecionar build → "Adicionar testadores"
   - Testadores internos (até 25 pessoas) recebem por e-mail
   - Eles instalam o TestFlight e baixam o app

---

### Etapa 4: Submeter para a App Store

1. **Ficha da loja** (App Store Connect → "Informações do App"):

| Campo | Requisito |
|-------|-----------|
| Nome | Até 30 caracteres |
| Subtítulo | Até 30 caracteres |
| Descrição | Até 4000 caracteres |
| Palavras-chave | Até 100 caracteres (separadas por vírgula) |
| Screenshots | Mínimo 3 por tamanho de tela (iPhone 6.7", 6.5", 5.5") |
| Ícone | 1024x1024px PNG (sem transparência, sem cantos arredondados) |
| Classificação etária | Preencher questionário (violência, linguagem, etc.) |
| Política de Privacidade | URL obrigatória |
| Suporte | URL ou e-mail de contato |

2. **Pricing:** Selecionar "Gratuito" (ou definir preço)
3. **Review:**
   - Selecionar build do TestFlight → "Adicionar para Revisão"
   - Preencher notas para o revisor (ex: "App de gestão comunitária")
   - Se tiver login: fornecer credenciais de teste
   - "Enviar para Revisão"

4. **Aguardar:** Apple revisa em 1-3 dias (pode ser rejeitado com feedback)

---

### ⚠️ Alertas Importantes (Apple)

| Alerta | Detalhe |
|--------|---------|
| 💸 Custo anual | US$ 99/ano — se não pagar, apps são REMOVIDOS da loja |
| 🔒 Revisão rigorosa | Apple é mais exigente que Google. Rejeições são comuns na 1ª vez |
| 📸 Screenshots obrigatórias | Precisam ser de dispositivos REAIS (ou simulador com moldura) |
| 🕐 Tempo de revisão | 24-48h geralmente, mas pode chegar a 7 dias |
| 📋 Motivos comuns de rejeição | Bugs, links quebrados, metadata incompleta, crash no launch |
| 🍏 Sem Mac para build? | EAS Build resolve! Compila na nuvem sem Mac local |
| 🧪 TestFlight | Use SEMPRE antes de submeter. Teste com 5+ pessoas |

---

### Comparativo: Google Play vs App Store

| Aspecto | Google Play | App Store |
|---------|-------------|-----------|
| **Taxa** | US$ 25 (única) | US$ 99/ano |
| **Revisão** | 1-7 dias | 1-3 dias (mas mais rigorosa) |
| **Build** | .aab (App Bundle) | .ipa |
| **Teste beta** | Google Play Internal Testing | TestFlight |
| **Rejeição** | Rara (conteúdo/crash) | Mais frequente (UX/guidelines) |
| **Precisa de Mac?** | Não | Não (com EAS Build na nuvem!) |
| **Atualização** | Quase imediata após revisão | 24-48h após revisão |

---

## 🎯 Resumo do Fluxo Completo de Publicação

```
DESENVOLVIMENTO                    PUBLICAÇÃO
─────────────────                  ──────────────────────────
1. Criar app no Expo              5. eas build --platform android
2. Testar no Expo Go (celular)    6. Upload .aab → Google Play Console
3. Testar no emulador             7. Preencher ficha da loja
4. Corrigir bugs + polir UI       8. Enviar para revisão

                                   9. eas build --platform ios
                                  10. eas submit → App Store Connect
                                  11. TestFlight (beta testers)
                                  12. Submeter para App Store Review
```

---

## 💡 Dica Final para Alunos

> Vocês NÃO precisam publicar nas lojas durante o curso (custa dinheiro).
> O importante é **saber o processo** e ter o app funcionando no Expo Go.
>
> Para o portfólio e entrevistas de emprego:
> - Coloque o código no GitHub (público)
> - Grave um vídeo de 30s mostrando o app rodando no celular
> - No currículo: "App mobile publicável desenvolvido com React Native/Expo"
>
> Quando tiver grana, publique! A experiência de passar pela revisão da loja
> é valiosa e diferencia seu currículo de 90% dos candidatos júnior.
