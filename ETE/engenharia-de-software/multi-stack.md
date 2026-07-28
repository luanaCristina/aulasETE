# 🏗️ Multi-Stack: Padrões de Projeto — Singleton + Factory + Observer

> **ETE Pernambuco — Profª Luana Cristina**
> Disciplina: Engenharia de Software

---

## 🎯 Objetivo Pedagógico

> *"A lógica é universal — a linguagem é apenas sintaxe."*

Neste material, implementamos os **mesmos 3 padrões de projeto (Design Patterns)** em 3 linguagens diferentes. O objetivo é provar que os padrões do GOF (Gang of Four) são **conceitos agnósticos de linguagem** — a estrutura e o propósito são idênticos, apenas a sintaxe muda.

---

## 📋 Problema

Implementar 3 padrões de projeto clássicos:

1. **Singleton** — Garantir que uma classe tenha apenas UMA instância global
2. **Factory Method** — Delegar a criação de objetos para subclasses/funções
3. **Observer** — Permitir que objetos "escutem" mudanças em outros objetos

Cenário prático: **Sistema de Notificações** onde:
- O `Logger` é Singleton (só existe um)
- As `Notificações` são criadas via Factory (Email, SMS, Push)
- Os `Usuários` observam eventos via Observer

---

## 📐 Diagrama UML (IGUAL para todas as linguagens)

```
┌─────────────────────────────────────────────────────────────┐
│                    DIAGRAMA UML                              │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────┐     SINGLETON                              │
│  │   Logger    │     (uma única instância)                  │
│  ├─────────────┤                                            │
│  │ -instance   │                                            │
│  │ -logs[]     │                                            │
│  ├─────────────┤                                            │
│  │ +getInstance│                                            │
│  │ +log()      │                                            │
│  │ +getLogs()  │                                            │
│  └─────────────┘                                            │
│                                                             │
│  ┌──────────────┐    FACTORY METHOD                         │
│  │ Notificacao  │◄──────────────────┐                       │
│  │  (abstrato)  │                   │                       │
│  ├──────────────┤    ┌──────────┐ ┌─┴──────────┐           │
│  │ +enviar()    │    │  Email   │ │    SMS     │           │
│  └──────────────┘    └──────────┘ └────────────┘           │
│        ▲                                                    │
│        │           ┌────────────────┐                       │
│        └───────────│NotificacaoFactory│                      │
│                    │ +criar(tipo)    │                       │
│                    └────────────────┘                       │
│                                                             │
│  ┌──────────────┐    OBSERVER                               │
│  │EventEmitter  │                                           │
│  ├──────────────┤    ┌───────────┐                          │
│  │ -listeners{} │───►│ Observer  │                          │
│  ├──────────────┤    ├───────────┤                          │
│  │ +on()        │    │ +atualizar│                          │
│  │ +emit()      │    └───────────┘                          │
│  │ +off()       │                                           │
│  └──────────────┘                                           │
└─────────────────────────────────────────────────────────────┘
```

---

## 🐍 Implementação 1: Python

> Classes, decorators, duck typing. Python é elegante e direto.

### `patterns.py`

```python
"""
Padrões de Projeto em Python
ETE Pernambuco - Profª Luana Cristina
"""
from abc import ABC, abstractmethod
from typing import Dict, List, Callable
from datetime import datetime


# ============================================================
# PADRÃO 1: SINGLETON
# Garante que apenas UMA instância do Logger exista
# ============================================================

class Logger:
    """Logger Singleton - apenas uma instância no sistema inteiro."""
    
    _instancia = None  # Armazena a única instância
    
    def __new__(cls):
        """Controla a criação da instância."""
        if cls._instancia is None:
            cls._instancia = super().__new__(cls)
            cls._instancia._logs: List[str] = []
        return cls._instancia
    
    def log(self, mensagem: str) -> None:
        """Registra uma mensagem com timestamp."""
        timestamp = datetime.now().strftime("%H:%M:%S")
        entrada = f"[{timestamp}] {mensagem}"
        self._logs.append(entrada)
        print(entrada)
    
    def obter_logs(self) -> List[str]:
        """Retorna todos os logs registrados."""
        return self._logs.copy()
    
    @property
    def total_logs(self) -> int:
        return len(self._logs)


# ============================================================
# PADRÃO 2: FACTORY METHOD
# Delega a criação de notificações para a Factory
# ============================================================

class Notificacao(ABC):
    """Classe abstrata (interface) para notificações."""
    
    @abstractmethod
    def enviar(self, destinatario: str, mensagem: str) -> str:
        """Envia a notificação. Cada tipo implementa do seu jeito."""
        pass


class NotificacaoEmail(Notificacao):
    """Notificação via e-mail."""
    
    def enviar(self, destinatario: str, mensagem: str) -> str:
        return f"📧 EMAIL para {destinatario}: {mensagem}"


class NotificacaoSMS(Notificacao):
    """Notificação via SMS."""
    
    def enviar(self, destinatario: str, mensagem: str) -> str:
        return f"📱 SMS para {destinatario}: {mensagem}"


class NotificacaoPush(Notificacao):
    """Notificação via Push (app mobile)."""
    
    def enviar(self, destinatario: str, mensagem: str) -> str:
        return f"🔔 PUSH para {destinatario}: {mensagem}"


class NotificacaoFactory:
    """Factory que cria o tipo correto de notificação."""
    
    _tipos: Dict[str, type] = {
        "email": NotificacaoEmail,
        "sms": NotificacaoSMS,
        "push": NotificacaoPush,
    }
    
    @classmethod
    def criar(cls, tipo: str) -> Notificacao:
        """Cria uma notificação pelo tipo (string)."""
        classe = cls._tipos.get(tipo.lower())
        if classe is None:
            raise ValueError(f"Tipo de notificação desconhecido: '{tipo}'")
        return classe()
    
    @classmethod
    def tipos_disponiveis(cls) -> List[str]:
        return list(cls._tipos.keys())


# ============================================================
# PADRÃO 3: OBSERVER
# Permite que objetos "escutem" eventos de outros objetos
# ============================================================

class EventEmitter:
    """Sistema de eventos (Observer Pattern)."""
    
    def __init__(self):
        self._listeners: Dict[str, List[Callable]] = {}
    
    def on(self, evento: str, callback: Callable) -> None:
        """Registra um listener para um evento."""
        if evento not in self._listeners:
            self._listeners[evento] = []
        self._listeners[evento].append(callback)
    
    def emit(self, evento: str, *args, **kwargs) -> None:
        """Dispara um evento, notificando todos os listeners."""
        if evento in self._listeners:
            for callback in self._listeners[evento]:
                callback(*args, **kwargs)
    
    def off(self, evento: str, callback: Callable) -> None:
        """Remove um listener específico."""
        if evento in self._listeners:
            self._listeners[evento].remove(callback)
    
    @property
    def total_listeners(self) -> int:
        return sum(len(cbs) for cbs in self._listeners.values())


# ============================================================
# DEMONSTRAÇÃO: Integrando os 3 padrões
# ============================================================

if __name__ == "__main__":
    print("=" * 50)
    print("  PADRÕES DE PROJETO - Python")
    print("  ETE Pernambuco - Profª Luana Cristina")
    print("=" * 50)
    
    # 1. SINGLETON - Mesmo logger em todo o sistema
    logger = Logger()
    logger.log("Sistema iniciado")
    
    # Prova do Singleton: outra variável, mesma instância
    outro_logger = Logger()
    print(f"\nSingleton funciona? {logger is outro_logger}")  # True
    
    # 2. FACTORY - Criando notificações sem saber a classe
    print("\n--- Factory Method ---")
    factory = NotificacaoFactory()
    
    for tipo in ["email", "sms", "push"]:
        notificacao = factory.criar(tipo)
        resultado = notificacao.enviar("aluno@ete.pe.gov.br", "Bem-vindo ao curso!")
        print(resultado)
        logger.log(f"Notificação {tipo} enviada")
    
    # 3. OBSERVER - Sistema de eventos
    print("\n--- Observer Pattern ---")
    eventos = EventEmitter()
    
    # Registrar observers
    def on_login(usuario):
        print(f"  👤 Usuário logou: {usuario}")
        logger.log(f"Login: {usuario}")
    
    def on_login_seguranca(usuario):
        print(f"  🔒 Verificação de segurança para: {usuario}")
    
    eventos.on("login", on_login)
    eventos.on("login", on_login_seguranca)
    
    # Emitir evento
    eventos.emit("login", "Maria Silva")
    eventos.emit("login", "João Santos")
    
    # Resultado final
    print(f"\n--- Resumo ---")
    print(f"Total de logs: {logger.total_logs}")
    print(f"Total de listeners: {eventos.total_listeners}")
```

---

## 🟨 Implementação 2: JavaScript (ES6+)

> Classes, closures, módulos. JS é flexível — padrões funcionam com classes ou funções.

### `patterns.js`

```javascript
/**
 * Padrões de Projeto em JavaScript (ES6+)
 * ETE Pernambuco - Profª Luana Cristina
 */

// ============================================================
// PADRÃO 1: SINGLETON
// Usando closure para garantir instância única
// ============================================================

class Logger {
  constructor() {
    // Se já existe uma instância, retorna ela
    if (Logger.instancia) {
      return Logger.instancia;
    }
    
    this.logs = [];
    Logger.instancia = this;
  }

  log(mensagem) {
    const timestamp = new Date().toLocaleTimeString('pt-BR');
    const entrada = `[${timestamp}] ${mensagem}`;
    this.logs.push(entrada);
    console.log(entrada);
  }

  obterLogs() {
    return [...this.logs]; // Cópia do array
  }

  get totalLogs() {
    return this.logs.length;
  }
}

// ============================================================
// PADRÃO 2: FACTORY METHOD
// Cria o objeto correto baseado no tipo (string)
// ============================================================

// "Interface" base (JS não tem interface real, usa classe abstrata)
class Notificacao {
  enviar(destinatario, mensagem) {
    throw new Error('Método enviar() deve ser implementado!');
  }
}

class NotificacaoEmail extends Notificacao {
  enviar(destinatario, mensagem) {
    return `📧 EMAIL para ${destinatario}: ${mensagem}`;
  }
}

class NotificacaoSMS extends Notificacao {
  enviar(destinatario, mensagem) {
    return `📱 SMS para ${destinatario}: ${mensagem}`;
  }
}

class NotificacaoPush extends Notificacao {
  enviar(destinatario, mensagem) {
    return `🔔 PUSH para ${destinatario}: ${mensagem}`;
  }
}

class NotificacaoFactory {
  // Mapa de tipos para classes
  static tipos = {
    email: NotificacaoEmail,
    sms: NotificacaoSMS,
    push: NotificacaoPush,
  };

  static criar(tipo) {
    const Classe = this.tipos[tipo.toLowerCase()];
    if (!Classe) {
      throw new Error(`Tipo de notificação desconhecido: '${tipo}'`);
    }
    return new Classe();
  }

  static tiposDisponiveis() {
    return Object.keys(this.tipos);
  }
}

// ============================================================
// PADRÃO 3: OBSERVER
// EventEmitter próprio (mesmo conceito do Node.js EventEmitter)
// ============================================================

class EventEmitter {
  constructor() {
    this.listeners = {}; // { evento: [callback1, callback2, ...] }
  }

  on(evento, callback) {
    if (!this.listeners[evento]) {
      this.listeners[evento] = [];
    }
    this.listeners[evento].push(callback);
    return this; // Permite encadeamento
  }

  emit(evento, ...args) {
    if (this.listeners[evento]) {
      this.listeners[evento].forEach(callback => {
        callback(...args);
      });
    }
    return this;
  }

  off(evento, callback) {
    if (this.listeners[evento]) {
      this.listeners[evento] = this.listeners[evento]
        .filter(cb => cb !== callback);
    }
    return this;
  }

  once(evento, callback) {
    const wrapper = (...args) => {
      callback(...args);
      this.off(evento, wrapper);
    };
    this.on(evento, wrapper);
    return this;
  }

  get totalListeners() {
    return Object.values(this.listeners)
      .reduce((total, cbs) => total + cbs.length, 0);
  }
}

// ============================================================
// DEMONSTRAÇÃO: Integrando os 3 padrões
// ============================================================

console.log('='.repeat(50));
console.log('  PADRÕES DE PROJETO - JavaScript');
console.log('  ETE Pernambuco - Profª Luana Cristina');
console.log('='.repeat(50));

// 1. SINGLETON
const logger = new Logger();
logger.log('Sistema iniciado');

// Prova do Singleton
const outroLogger = new Logger();
console.log(`\nSingleton funciona? ${logger === outroLogger}`); // true

// 2. FACTORY
console.log('\n--- Factory Method ---');
for (const tipo of ['email', 'sms', 'push']) {
  const notificacao = NotificacaoFactory.criar(tipo);
  const resultado = notificacao.enviar('aluno@ete.pe.gov.br', 'Bem-vindo ao curso!');
  console.log(resultado);
  logger.log(`Notificação ${tipo} enviada`);
}

// 3. OBSERVER
console.log('\n--- Observer Pattern ---');
const eventos = new EventEmitter();

// Registrar observers
const onLogin = (usuario) => {
  console.log(`  👤 Usuário logou: ${usuario}`);
  logger.log(`Login: ${usuario}`);
};

const onLoginSeguranca = (usuario) => {
  console.log(`  🔒 Verificação de segurança para: ${usuario}`);
};

eventos.on('login', onLogin);
eventos.on('login', onLoginSeguranca);

// Emitir eventos
eventos.emit('login', 'Maria Silva');
eventos.emit('login', 'João Santos');

// once: executa apenas uma vez
eventos.once('logout', (usuario) => {
  console.log(`  👋 ${usuario} saiu do sistema`);
});
eventos.emit('logout', 'Maria Silva');
eventos.emit('logout', 'Maria Silva'); // Não executa de novo

// Resumo
console.log(`\n--- Resumo ---`);
console.log(`Total de logs: ${logger.totalLogs}`);
console.log(`Total de listeners: ${eventos.totalListeners}`);
```

---

## 🔷 Implementação 3: TypeScript

> Interfaces, generics, tipagem estrita. TypeScript torna os padrões mais SEGUROS.

### `patterns.ts`

```typescript
/**
 * Padrões de Projeto em TypeScript
 * ETE Pernambuco - Profª Luana Cristina
 * 
 * TypeScript adiciona SEGURANÇA DE TIPO aos padrões.
 * O compilador garante que você não cometa erros.
 */

// ============================================================
// PADRÃO 1: SINGLETON
// Tipagem garante que getInstance() retorna o tipo correto
// ============================================================

class Logger {
  private static instancia: Logger;
  private logs: string[] = [];

  // Construtor privado impede "new Logger()" externo
  private constructor() {}

  // Único ponto de acesso à instância
  static getInstance(): Logger {
    if (!Logger.instancia) {
      Logger.instancia = new Logger();
    }
    return Logger.instancia;
  }

  log(mensagem: string): void {
    const timestamp = new Date().toLocaleTimeString('pt-BR');
    const entrada = `[${timestamp}] ${mensagem}`;
    this.logs.push(entrada);
    console.log(entrada);
  }

  obterLogs(): readonly string[] {
    return Object.freeze([...this.logs]); // Array imutável
  }

  get totalLogs(): number {
    return this.logs.length;
  }
}

// ============================================================
// PADRÃO 2: FACTORY METHOD
// Interface garante o contrato. Generics dão flexibilidade.
// ============================================================

// Interface: contrato que TODA notificação deve seguir
interface INotificacao {
  readonly tipo: string;
  enviar(destinatario: string, mensagem: string): string;
}

// Tipo literal — só aceita esses valores
type TipoNotificacao = 'email' | 'sms' | 'push';

class NotificacaoEmail implements INotificacao {
  readonly tipo = 'email';

  enviar(destinatario: string, mensagem: string): string {
    return `📧 EMAIL para ${destinatario}: ${mensagem}`;
  }
}

class NotificacaoSMS implements INotificacao {
  readonly tipo = 'sms';

  enviar(destinatario: string, mensagem: string): string {
    return `📱 SMS para ${destinatario}: ${mensagem}`;
  }
}

class NotificacaoPush implements INotificacao {
  readonly tipo = 'push';

  enviar(destinatario: string, mensagem: string): string {
    return `🔔 PUSH para ${destinatario}: ${mensagem}`;
  }
}

class NotificacaoFactory {
  // Mapa tipado: chave é TipoNotificacao, valor é construtor
  private static readonly mapa: Record<TipoNotificacao, new () => INotificacao> = {
    email: NotificacaoEmail,
    sms: NotificacaoSMS,
    push: NotificacaoPush,
  };

  static criar(tipo: TipoNotificacao): INotificacao {
    const Classe = this.mapa[tipo];
    if (!Classe) {
      throw new Error(`Tipo desconhecido: ${tipo}`);
    }
    return new Classe();
  }

  static tiposDisponiveis(): TipoNotificacao[] {
    return Object.keys(this.mapa) as TipoNotificacao[];
  }
}

// ============================================================
// PADRÃO 3: OBSERVER
// Generics tornam o EventEmitter type-safe para qualquer evento
// ============================================================

// Mapa de eventos: cada evento tem um tipo de payload específico
interface EventMap {
  login: { usuario: string; timestamp: Date };
  logout: { usuario: string };
  erro: { codigo: number; mensagem: string };
  notificacao: { tipo: TipoNotificacao; destino: string };
}

// Observer tipado com generics
type Listener<T> = (dados: T) => void;

class EventEmitter<TEvents extends Record<string, any>> {
  private listeners: {
    [K in keyof TEvents]?: Listener<TEvents[K]>[];
  } = {};

  on<K extends keyof TEvents>(evento: K, callback: Listener<TEvents[K]>): this {
    if (!this.listeners[evento]) {
      this.listeners[evento] = [];
    }
    this.listeners[evento]!.push(callback);
    return this;
  }

  emit<K extends keyof TEvents>(evento: K, dados: TEvents[K]): this {
    const callbacks = this.listeners[evento];
    if (callbacks) {
      callbacks.forEach(cb => cb(dados));
    }
    return this;
  }

  off<K extends keyof TEvents>(evento: K, callback: Listener<TEvents[K]>): this {
    const callbacks = this.listeners[evento];
    if (callbacks) {
      this.listeners[evento] = callbacks.filter(cb => cb !== callback);
    }
    return this;
  }

  once<K extends keyof TEvents>(evento: K, callback: Listener<TEvents[K]>): this {
    const wrapper: Listener<TEvents[K]> = (dados) => {
      callback(dados);
      this.off(evento, wrapper);
    };
    this.on(evento, wrapper);
    return this;
  }

  get totalListeners(): number {
    return Object.values(this.listeners)
      .reduce((total, cbs) => total + (cbs?.length ?? 0), 0);
  }
}

// ============================================================
// DEMONSTRAÇÃO: Integrando os 3 padrões com type safety
// ============================================================

console.log('='.repeat(50));
console.log('  PADRÕES DE PROJETO - TypeScript');
console.log('  ETE Pernambuco - Profª Luana Cristina');
console.log('='.repeat(50));

// 1. SINGLETON (construtor privado impede instanciação direta)
const logger = Logger.getInstance();
logger.log('Sistema iniciado');

const outroLogger = Logger.getInstance();
console.log(`\nSingleton funciona? ${logger === outroLogger}`); // true

// ERRO EM TEMPO DE COMPILAÇÃO (descomente para ver):
// const errado = new Logger(); // ❌ Constructor of class 'Logger' is private

// 2. FACTORY com tipagem estrita
console.log('\n--- Factory Method ---');
const tipos: TipoNotificacao[] = ['email', 'sms', 'push'];

for (const tipo of tipos) {
  const notificacao: INotificacao = NotificacaoFactory.criar(tipo);
  const resultado = notificacao.enviar('aluno@ete.pe.gov.br', 'Bem-vindo!');
  console.log(resultado);
  logger.log(`Notificação ${tipo} enviada`);
}

// ERRO EM TEMPO DE COMPILAÇÃO (descomente para ver):
// NotificacaoFactory.criar('whatsapp'); // ❌ Argument not assignable to 'TipoNotificacao'

// 3. OBSERVER com generics tipados
console.log('\n--- Observer Pattern (Type-Safe) ---');
const eventos = new EventEmitter<EventMap>();

// O TypeScript SABE que 'login' recebe { usuario, timestamp }
eventos.on('login', (dados) => {
  // dados é automaticamente tipado como { usuario: string; timestamp: Date }
  console.log(`  👤 Usuário logou: ${dados.usuario}`);
  logger.log(`Login: ${dados.usuario}`);
});

eventos.on('login', (dados) => {
  console.log(`  🔒 Segurança verificada: ${dados.usuario} em ${dados.timestamp.toLocaleString()}`);
});

eventos.on('erro', (dados) => {
  // dados é automaticamente { codigo: number; mensagem: string }
  console.log(`  ❌ Erro ${dados.codigo}: ${dados.mensagem}`);
});

// Emitir com type safety
eventos.emit('login', { usuario: 'Maria Silva', timestamp: new Date() });
eventos.emit('login', { usuario: 'João Santos', timestamp: new Date() });
eventos.emit('erro', { codigo: 404, mensagem: 'Página não encontrada' });

// ERROS EM TEMPO DE COMPILAÇÃO (descomente para ver):
// eventos.emit('login', { nome: 'x' });    // ❌ Propriedade 'usuario' faltando
// eventos.emit('inexistente', {});          // ❌ Evento não existe no EventMap

// Resumo
console.log(`\n--- Resumo ---`);
console.log(`Total de logs: ${logger.totalLogs}`);
console.log(`Total de listeners: ${eventos.totalListeners}`);
console.log(`Tipos de notificação: ${NotificacaoFactory.tiposDisponiveis().join(', ')}`);
```

---

## 📊 Tabela Comparativa

| Padrão | Conceito | Python | JavaScript | TypeScript |
|--------|----------|--------|-----------|-----------|
| **Singleton - Controle** | Impedir múltiplas instâncias | `__new__()` override | Verificar `static instancia` no constructor | `private constructor` + `static getInstance()` |
| **Singleton - Acesso** | Obter a instância | `Logger()` (retorna mesma) | `new Logger()` (retorna mesma) | `Logger.getInstance()` |
| **Singleton - Garantia** | Segurança em tempo de código | Nenhuma (convenção) | Nenhuma (convenção) | `private` impede `new` ❌ |
| **Factory - Interface** | Contrato dos produtos | `ABC` + `@abstractmethod` | Classe com `throw Error` | `interface INotificacao` |
| **Factory - Criação** | Mapa tipo → classe | `Dict[str, type]` | `static tipos = {}` | `Record<TipoNotificacao, ...>` |
| **Factory - Segurança** | Tipos válidos | RuntimeError se inválido | Error se inválido | **Compilador rejeita tipo inválido** ✅ |
| **Observer - Registro** | Adicionar listener | `self._listeners[evt].append()` | `this.listeners[evt].push()` | `this.listeners[evento]!.push()` |
| **Observer - Emissão** | Notificar todos | `for cb in callbacks: cb()` | `callbacks.forEach(cb => cb())` | `callbacks.forEach(cb => cb(dados))` |
| **Observer - Tipagem** | Payload do evento | `*args, **kwargs` (qualquer coisa) | `...args` (qualquer coisa) | **Generic `<TEvents>` com tipos exatos** ✅ |
| **Type Safety** | Erros detectados em... | Runtime (execução) | Runtime (execução) | **Compile-time (antes de rodar)** ✅ |

---

## 💡 Destaque Pedagógico

### Design Patterns são AGNÓSTICOS de linguagem!

```
┌──────────────────────────────────────────────────────────────┐
│              O PADRÃO É O MESMO — A SINTAXE MUDA             │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│   SINGLETON:                                                 │
│   ┌─────────────────────────────────────────────────────┐    │
│   │ Conceito: "Só pode existir UMA instância"           │    │
│   │                                                     │    │
│   │ Python:     __new__() retorna mesma referência      │    │
│   │ JavaScript: constructor verifica static campo       │    │
│   │ TypeScript: private constructor + getInstance()     │    │
│   │                                                     │    │
│   │ ✅ MESMO OBJETIVO — implementação diferente         │    │
│   └─────────────────────────────────────────────────────┘    │
│                                                              │
│   FACTORY:                                                   │
│   ┌─────────────────────────────────────────────────────┐    │
│   │ Conceito: "Quem CRIA o objeto não é quem USA"       │    │
│   │                                                     │    │
│   │ Todas: mapa de string → classe + método criar()     │    │
│   │                                                     │    │
│   │ ✅ MESMO MAPA, MESMA LÓGICA                        │    │
│   └─────────────────────────────────────────────────────┘    │
│                                                              │
│   OBSERVER:                                                  │
│   ┌─────────────────────────────────────────────────────┐    │
│   │ Conceito: "Notificar interessados quando algo muda" │    │
│   │                                                     │    │
│   │ Todas: listeners = { evento: [callbacks] }          │
│   │        on() = registrar | emit() = notificar       │    │
│   │                                                     │    │
│   │ ✅ MESMA ESTRUTURA DE DADOS                        │    │
│   └─────────────────────────────────────────────────────┘    │
└──────────────────────────────────────────────────────────────┘
```

### Por que TypeScript é mais seguro?

| Situação | Python / JS | TypeScript |
|----------|------------|-----------|
| Chamar Factory com tipo inválido | Erro em **runtime** (app quebra) | Erro em **compilação** (antes de rodar) |
| Emitir evento com dados errados | Silenciosamente aceita | Compilador **rejeita** |
| Tentar `new Logger()` diretamente | Funciona (sem proteção real) | `private constructor` — **impossível** |
| Esquecer de implementar `enviar()` | `TypeError` em runtime | **Interface obriga** implementação |

### Onde cada padrão é usado no mundo real:

| Padrão | Exemplos no dia a dia |
|--------|----------------------|
| **Singleton** | Conexão com banco de dados, Logger, Cache, Configuração global |
| **Factory** | Criar componentes UI, parsers de arquivo, handlers de requisição |
| **Observer** | React (useState/useEffect), EventEmitter do Node.js, RxJS, DOM Events |

---

## 🚀 Guia de Execução

### Python

```bash
# Executar diretamente
python patterns.py

# Ou com Python 3 explícito
python3 patterns.py

# Saída esperada: logs com timestamp, notificações criadas, eventos emitidos
```

### JavaScript (Node.js)

```bash
# Executar com Node.js
node patterns.js

# Saída esperada: mesma lógica que Python, sintaxe JS
```

### TypeScript

```bash
# Opção 1: Usar ts-node (executa direto sem compilar)
npx ts-node patterns.ts

# Opção 2: Compilar primeiro, depois executar
npx tsc patterns.ts --strict --target ES2020
node patterns.js

# Opção 3: Usar tsx (mais rápido que ts-node)
npx tsx patterns.ts

# Para ver os ERROS de tipo, descomente as linhas marcadas no código!
```

### Instalação de ferramentas

```bash
# TypeScript global
npm install -g typescript ts-node

# Ou local no projeto
npm init -y
npm install -D typescript ts-node @types/node
npx tsc --init  # Gera tsconfig.json
```

---

## 🏁 Conclusão

Os **3 padrões de projeto** (Singleton, Factory, Observer) foram implementados em **3 linguagens**, provando que:

1. **O diagrama UML é o MESMO** — independe da linguagem
2. **A estrutura de dados é a MESMA** — dicts/maps para Factory e Observer
3. **A lógica de controle é a MESMA** — verificar instância, mapear tipo, notificar callbacks

O que **DIFERENCIA** as implementações:

| Linguagem | Vantagem | Desvantagem |
|-----------|----------|-------------|
| **Python** | Código mais curto e legível | Erros só aparecem ao executar |
| **JavaScript** | Flexível, roda em qualquer lugar | Sem garantias de tipo |
| **TypeScript** | **Erros antes de rodar**, autocompletar | Verbosidade extra (interfaces, generics) |

### Pergunta para reflexão:

> *Se os padrões são iguais em todas as linguagens, o que um engenheiro de software realmente precisa aprender?*
>
> **Resposta:** Os CONCEITOS. A linguagem é ferramenta — o padrão é conhecimento.

> *"Design Patterns são a linguagem universal dos engenheiros de software."*
> — Profª Luana Cristina, ETE Pernambuco
