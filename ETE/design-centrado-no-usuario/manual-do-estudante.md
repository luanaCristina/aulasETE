# 📘 Manual de Apoio ao Estudante — Design Centrado no Usuário (40h)

**Escola Técnica Estadual de Pernambuco**
**Professora:** Luana Cristina
**Curso:** Desenvolvimento de Sistemas

---

## Capítulo 1 — Resumo Teórico Essencial

### 1.1 UX vs UI

**UX (User Experience)** é como o usuário **se sente** ao usar um produto. Pense assim: UX é a experiência de entrar num restaurante — o atendimento, o tempo de espera, o sabor da comida, a facilidade de estacionar.

**UI (User Interface)** é a parte **visual** — as cores, botões, tipografia. Voltando ao restaurante: UI é a decoração, o cardápio bonito, a iluminação.

> 🍕 **Analogia:** Pedir uma pizza por aplicativo. UX = quão fácil e rápido é fazer o pedido. UI = se os botões são bonitos e o app é agradável visualmente.

### 1.2 Princípios da Gestalt

A Gestalt explica como nosso cérebro **agrupa** elementos visuais automaticamente:

| Princípio | Explicação | Exemplo no Design |
|-----------|-----------|-------------------|
| Proximidade | Elementos próximos parecem um grupo | Menu de navegação |
| Similaridade | Elementos parecidos parecem relacionados | Ícones do mesmo estilo |
| Continuidade | O olho segue linhas e curvas | Linhas de formulário |
| Fechamento | O cérebro completa formas incompletas | Logo do WWF (panda) |
| Figura/Fundo | Separamos objeto principal do fundo | Cards sobre background |

> 🧠 **Analogia:** Seu cérebro é um detetive preguiçoso — ele quer entender rápido, então agrupa as coisas que parecem "estar juntas".

### 1.3 Double Diamond (Diamante Duplo)

É um modelo de processo de design com 4 fases:

```
    Descobrir    Definir    Desenvolver    Entregar
      ◇            ◇           ◇            ◇
   Abrir        Fechar      Abrir        Fechar
```

1. **Descobrir** — Pesquisa ampla (abrir possibilidades)
2. **Definir** — Afunilar para o problema certo
3. **Desenvolver** — Gerar muitas soluções
4. **Entregar** — Escolher e implementar a melhor

> 🔍 **Analogia:** É como escolher um presente. Primeiro você pesquisa (Descobrir), depois decide o que a pessoa precisa (Definir), depois vê várias opções na loja (Desenvolver), e finalmente compra o melhor (Entregar).

### 1.4 Personas

Persona é um **personagem fictício** que representa seu usuário real. Baseada em pesquisa, não em achismo.

> 👤 **Analogia:** É como criar um personagem de novela, mas baseado em entrevistas reais. Você dá nome, idade, profissão, dores e objetivos.

**Componentes de uma Persona:**
- Nome e foto (fictícios)
- Dados demográficos (idade, profissão, localização)
- Objetivos e motivações
- Frustrações e dores (pain points)
- Comportamentos e hábitos digitais
- Uma frase que resume a persona

### 1.5 Jornada do Usuário (User Journey Map)

É o **mapa completo** da experiência do usuário — desde antes de usar o produto até depois.

> 🗺️ **Analogia:** É como o mapa de uma viagem: você documenta cada etapa (aeroporto, avião, hotel, passeio) com as emoções (ansiedade, alegria, cansaço) em cada ponto.

**Etapas típicas:**
1. Consciência — O usuário descobre que o produto existe
2. Consideração — Avalia se resolve seu problema
3. Ação — Usa o produto pela primeira vez
4. Retenção — Continua usando (ou não)
5. Recomendação — Indica para outras pessoas

### 1.6 Wireframes

Wireframe é o **esqueleto** de uma tela — sem cores, sem imagens reais, sem detalhes visuais.

> 🏗️ **Analogia:** É a planta baixa de uma casa. Antes de escolher a cor da parede ou o piso, você precisa definir onde ficam os cômodos, portas e janelas.

**Níveis de fidelidade:**
- **Baixa fidelidade** — Rabiscos à mão (papel e caneta)
- **Média fidelidade** — Formas geométricas básicas (Figma/Balsamiq)
- **Alta fidelidade** — Próximo do visual final (com tipografia e espaçamentos reais)

### 1.7 Protótipos

Protótipo é um **modelo interativo** do produto. Simula a experiência real sem precisar programar.

> 🎭 **Analogia:** É como o trailer de um filme — mostra como vai ser a experiência, mas ainda não é o filme final.

**Tipos:**
- **Protótipo em papel** — Desenhos com interações simuladas manualmente
- **Protótipo clicável** — Telas no Figma com links entre elas
- **Protótipo funcional** — HTML/CSS simulando o produto real

### 1.8 Testes de Usabilidade

Teste de usabilidade é colocar **pessoas reais** para usar seu protótipo e observar onde elas travam, erram ou ficam confusas.

> 🧪 **Analogia:** É como pedir para alguém montar um móvel usando só o manual que você escreveu. Se a pessoa não conseguir, o problema está no manual (seu design), não na pessoa.

**Regra de ouro:** 5 usuários encontram 85% dos problemas de usabilidade (Jakob Nielsen).

---

## Capítulo 2 — Exemplos de Processo Comentados

### 2.1 Template de Persona Preenchido

```
╔══════════════════════════════════════════════════════════════╗
║                    PERSONA                                    ║
╠══════════════════════════════════════════════════════════════╣
║ Nome: Marina Santos                                          ║
║ Idade: 22 anos                                               ║
║ Profissão: Estudante de Administração / Estagiária           ║
║ Localização: Recife - PE                                     ║
╠══════════════════════════════════════════════════════════════╣
║ FRASE:                                                       ║
║ "Preciso resolver tudo pelo celular porque não tenho tempo   ║
║  de sentar no computador."                                   ║
╠══════════════════════════════════════════════════════════════╣
║ OBJETIVOS:                                                   ║
║ • Agendar consultas médicas de forma rápida                  ║
║ • Receber lembretes para não esquecer compromissos           ║
║ • Comparar preços de consultas                               ║
╠══════════════════════════════════════════════════════════════╣
║ FRUSTRAÇÕES:                                                 ║
║ • Apps lentos que travam no ônibus (internet ruim)           ║
║ • Ter que ligar para marcar consulta (fica em espera)        ║
║ • Não saber quanto vai custar antes de agendar               ║
╠══════════════════════════════════════════════════════════════╣
║ COMPORTAMENTO DIGITAL:                                       ║
║ • Usa celular Android (modelo intermediário)                 ║
║ • Redes sociais: Instagram e WhatsApp (diariamente)          ║
║ • Prefere resolver tudo por mensagem, não por ligação        ║
║ • Nível tech: intermediário                                  ║
╚══════════════════════════════════════════════════════════════╝
```

### 2.2 Roteiro de Entrevista com Usuários

**Objetivo:** Entender como estudantes agendam consultas médicas.

**Aquecimento (2 min):**
1. Me conta um pouco sobre você — o que faz, idade, rotina.
2. Qual celular você usa? Tem computador em casa?

**Exploração do problema (10 min):**
3. Quando foi a última vez que você precisou marcar uma consulta? Me conta como foi.
4. O que foi mais difícil nesse processo?
5. Você já desistiu de marcar uma consulta por algum motivo? Qual?
6. Como você gostaria que fosse o processo ideal?

**Comportamento digital (5 min):**
7. Quais aplicativos você mais usa no dia a dia?
8. Tem algum app que você acha muito fácil de usar? Por quê?
9. E algum que você acha confuso? O que te irrita nele?

**Fechamento (3 min):**
10. Se você pudesse mudar UMA coisa na forma como agenda consultas, o que seria?
11. Tem algo mais que gostaria de compartilhar?

> 💡 **Dicas para entrevista:**
> - Nunca pergunte "Você usaria X?" (as pessoas mentem sobre o futuro)
> - Pergunte sobre comportamentos passados reais
> - Fique em silêncio após a resposta — a pessoa pode complementar
> - Grave (com permissão) para não perder detalhes

### 2.3 Jornada do Usuário — Exemplo Completo

**Persona:** Marina Santos | **Cenário:** Agendar consulta dermatológica pelo app

| Etapa | Ação | Pensamento | Emoção | Oportunidade |
|-------|------|-----------|--------|-------------|
| 1. Descoberta | Vê anúncio no Instagram | "Será que funciona mesmo?" | 😐 Curiosidade | Depoimentos reais no anúncio |
| 2. Download | Baixa o app na Play Store | "Espero que não seja pesado" | 😟 Apreensão | App leve (<30MB) |
| 3. Cadastro | Preenche dados pessoais | "Por que pedem tanta coisa?" | 😤 Irritação | Cadastro mínimo (só nome e tel) |
| 4. Busca | Procura dermatologista | "Tem perto de mim?" | 🤔 Dúvida | Filtro por localização e preço |
| 5. Agendamento | Escolhe data e horário | "Ótimo, tem horário à noite!" | 😊 Alívio | Mostrar horários disponíveis claramente |
| 6. Confirmação | Recebe confirmação por WhatsApp | "Pronto, não vou esquecer" | 😄 Satisfação | Lembrete 24h antes |
| 7. Pós-consulta | Avalia o médico no app | "Vou indicar pra minha amiga" | 😊 Confiança | Botão de compartilhar fácil |

### 2.4 Teste de Usabilidade — Passo a Passo

**Preparação:**
1. Defina o **objetivo** do teste (ex: "Verificar se o usuário consegue agendar uma consulta em menos de 2 minutos")
2. Crie **3-5 tarefas** específicas para o usuário executar
3. Prepare o **protótipo** (Figma com links funcionais)
4. Recrute **5 participantes** que representem sua persona
5. Prepare o **ambiente** (computador/celular, gravação de tela)

**Durante o teste (por participante):**
1. Explique que está testando o **produto**, não a pessoa
2. Peça para o participante **pensar em voz alta**
3. Leia a tarefa e observe **sem ajudar**
4. Anote: onde travou, onde clicou errado, expressões faciais
5. Ao final, pergunte: "O que achou? O que mudaria?"

**Tarefas exemplo:**
- "Imagine que você quer agendar uma consulta com dermatologista para semana que vem. Faça isso usando o app."
- "Agora cancele a consulta que acabou de agendar."
- "Encontre o telefone da clínica."

**Métricas para coletar:**
- ⏱️ Tempo para completar cada tarefa
- ❌ Número de erros/cliques errados
- ✅ Taxa de sucesso (completou ou não)
- 😊😐😤 Satisfação (escala 1-5)

**Após o teste:**
1. Reúna todas as anotações
2. Identifique **padrões** (problemas que apareceram 3+ vezes)
3. Priorize: grave → médio → leve
4. Proponha soluções para cada problema
5. Itere o protótipo e teste novamente

---

## Capítulo 3 — Glossário Técnico

| Termo em Inglês | Pronúncia Aproximada | Significado |
|----------------|---------------------|-------------|
| **UX (User Experience)** | iú-écs | Experiência do usuário — como a pessoa se sente ao usar um produto |
| **UI (User Interface)** | iú-ái | Interface do usuário — parte visual (botões, cores, tipografia) |
| **Wireframe** | uáir-frêim | Esqueleto/rascunho de uma tela sem detalhes visuais |
| **Mockup** | mók-âp | Representação visual estática de alta fidelidade |
| **Prototype** | próto-taip | Modelo interativo que simula o produto final |
| **User Flow** | iúzer flôu | Diagrama dos caminhos que o usuário percorre no produto |
| **Persona** | persôna | Personagem fictício baseado em dados reais do público-alvo |
| **Journey Map** | djôrni mép | Mapa da jornada — visualização da experiência completa do usuário |
| **Empathy Map** | émpati mép | Ferramenta para entender o que o usuário pensa, sente, faz e diz |
| **Usability** | iuzabíliti | Facilidade de uso — quão simples é completar tarefas |
| **Accessibility** | acessibíliti | Design inclusivo para pessoas com deficiências |
| **Affordance** | afôrdans | Pista visual que indica como usar um elemento (ex: botão parece "clicável") |
| **Heuristic** | riurístic | Regra prática para avaliar usabilidade (ex: 10 heurísticas de Nielsen) |
| **Iteration** | iterêixon | Ciclo de melhoria — fazer, testar, ajustar, repetir |
| **MVP** | ême-vi-pi | Produto Mínimo Viável — versão mais simples que entrega valor |
| **Stakeholder** | stêik-rôulder | Parte interessada — quem tem interesse no projeto (cliente, gestor) |
| **Pain Point** | pêin point | Ponto de dor — problema/frustração do usuário |
| **Insight** | ín-sait | Descoberta relevante obtida na pesquisa com usuários |
| **CTA (Call to Action)** | si-ti-êi | Chamada para ação — botão/texto que pede uma ação (ex: "Comprar agora") |
| **Responsive** | rispônsiv | Design que se adapta a diferentes tamanhos de tela |
| **Breakpoint** | brêik-point | Ponto onde o layout muda para se adaptar (ex: 768px = tablet) |
| **Design System** | dezáin sístem | Conjunto padronizado de componentes e regras visuais reutilizáveis |
| **Component** | compônent | Elemento de interface reutilizável (ex: botão, card, modal) |
| **Token** | tôuken | Variável de design (ex: cor primária = #1A73E8, espaçamento = 8px) |
| **Handoff** | rénd-óf | Momento em que o designer entrega os arquivos para o desenvolvedor |

---

## Capítulo 4 — Links e Recursos Gratuitos Recomendados

### 🛠️ Ferramentas

| Ferramenta | Para quê | Link |
|-----------|---------|------|
| **Figma** | Wireframes, protótipos e design colaborativo | [figma.com](https://www.figma.com) |
| **Miro** | Mapas mentais, jornadas, brainstorming | [miro.com](https://miro.com) |
| **Maze** | Testes de usabilidade remotos | [maze.co](https://maze.co) |
| **Whimsical** | Wireframes rápidos e fluxogramas | [whimsical.com](https://whimsical.com) |
| **FigJam** | Quadro branco colaborativo (dentro do Figma) | [figma.com/figjam](https://www.figma.com/figjam) |

### 📚 Referências e Guias

| Recurso | Descrição | Link |
|---------|----------|------|
| **Laws of UX** | Leis psicológicas aplicadas ao design | [lawsofux.com](https://lawsofux.com) |
| **NN/g (Nielsen Norman Group)** | Artigos e pesquisas sobre UX (referência mundial) | [nngroup.com](https://www.nngroup.com) |
| **Material Design (Google)** | Sistema de design com guidelines completos | [m3.material.io](https://m3.material.io) |
| **Human Interface Guidelines (Apple)** | Diretrizes de design da Apple | [developer.apple.com/design](https://developer.apple.com/design/human-interface-guidelines) |
| **UX Collective (Medium)** | Blog com artigos de UX em português | [brasil.uxdesign.cc](https://brasil.uxdesign.cc) |

### 🎓 Cursos Gratuitos

| Curso | Plataforma | Link |
|-------|-----------|------|
| Design de Interface | Curso em Vídeo | [cursoemvideo.com](https://www.cursoemvideo.com) |
| Fundamentos de UX | Google (Coursera) | [coursera.org/google-ux](https://www.coursera.org/professional-certificates/google-ux-design) |
| Introdução ao Figma | Figma (oficial) | [help.figma.com](https://help.figma.com/hc/en-us/categories/360002051613) |
| UX/UI Design | Origamid | [origamid.com](https://www.origamid.com) |

### 📖 Livros Recomendados

- **"Não Me Faça Pensar"** — Steve Krug (usabilidade web)
- **"Design do Dia a Dia"** — Don Norman (fundamentos de design)
- **"Sprint"** — Jake Knapp (processo de design em 5 dias)
- **"Lean UX"** — Jeff Gothelf (UX em times ágeis)

---

> 📝 **Nota da Professora:** Este manual é um material de apoio vivo. Use-o como referência durante todo o módulo. Boa jornada de aprendizado! 🚀
>
> — Profª Luana Cristina
