# RAIZ — Documento Inicial de Arquitetura e Engenharia

## Visão Geral do Projeto

O **Raiz** é uma plataforma social focada exclusivamente em conexões familiares reais, permitindo que usuários construam e compartilhem uma árvore genealógica viva, colaborativa e interativa.

Diferente de redes sociais tradicionais, o Raiz utiliza vínculos de parentesco como estrutura central da plataforma, criando uma experiência baseada em ancestralidade, memória, pertencimento e conexão entre gerações.

A aplicação permitirá:

* Construção colaborativa de árvores genealógicas
* Cadastro de familiares vivos e falecidos
* Feed privado familiar
* Sistema de conexões por grau de parentesco
* Linha do tempo da família
* Alertas de aniversários e eventos
* Compartilhamento de memórias, fotos e histórias
* Visualização dinâmica da estrutura familiar

---

# Objetivos do Produto

## Objetivo Principal

Criar uma rede social familiar privada baseada em vínculos genealógicos reais.

## Objetivos Secundários

* Preservar histórias familiares
* Incentivar conexão entre gerações
* Criar memória digital familiar
* Facilitar descoberta de parentescos
* Oferecer experiência social segura e privada

---

# Stack Tecnológica

## Frontend

### Framework

* NextJS (App Router)

### Estratégia de Interface

* Mobile First
* Estilo visual inspirado em redes sociais modernas
* Componentização desacoplada
* PWA (Progressive Web App)

### Tecnologias Complementares

* TypeScript
* TailwindCSS
* React Query / TanStack Query
* Zustand ou Context API para estados globais
* Framer Motion para animações
* PWA Service Workers

---

## Backend

### Framework

* NestJS

### Arquitetura

* Modular
* Orientada a domínio
* Providers desacoplados
* Camada de serviços isolada

### Tecnologias Complementares

* TypeScript
* JWT Authentication
* Refresh Tokens
* Swagger/OpenAPI
* Zod/Class Validator
* Queue System (BullMQ futuramente)

---

## Persistência de Dados

### ORM

* PrismaORM

### Banco Inicial

* PostgreSQL

### Estratégia

* Migrations versionadas
* Soft Delete
* Auditoria completa
* Versionamento de entidades críticas

---

# Engenharia da Aplicação

## Estratégia Arquitetural

A aplicação será construída utilizando engenharia baseada em **Data Providers**.

Cada domínio possuirá:

* Provider de acesso a dados
* Provider de autenticação
* Provider de observabilidade
* Provider de cache
* Provider de integrações externas

Objetivos:

* Facilitar desacoplamento
* Permitir substituição de serviços
* Melhorar testabilidade
* Reduzir dependência direta de implementações

---

# Domínios Principais da Aplicação

## Auth Domain

Responsável por:

* Login
* Registro
* Sessões
* Recuperação de senha
* MFA futuramente

---

## User Domain

Responsável por:

* Perfil do usuário
* Configurações
* Foto de perfil
* Privacidade

---

## Family Domain

Responsável por:

* Estrutura genealógica
* Relações familiares
* Grau de parentesco
* Convites familiares
* Validação de vínculos

---

## Feed Domain

Responsável por:

* Postagens familiares
* Curtidas
* Comentários
* Compartilhamentos internos

---

## Memory Domain

Responsável por:

* Perfis memorializados
* Datas importantes
* Histórias familiares
* Arquivos históricos

---

## Notification Domain

Responsável por:

* Alertas
* Aniversários
* Convites
* Eventos familiares

---

# Modelo Social da Plataforma

## Estrutura de Conexão

As conexões não ocorrem por “amizade”.

Toda conexão é baseada em:

* Pai
* Mãe
* Filho
* Irmão
* Primo
* Avô
* Tio
* Cônjuge
* Etc.

A árvore familiar é construída dinamicamente conforme novos usuários entram na plataforma.

---

# Regras Estruturais

## Regras de Relacionamento

* Um usuário pode cadastrar familiares manualmente
* Usuários reais podem reivindicar perfis existentes
* Relações precisam ser confirmadas
* A plataforma deve evitar relações duplicadas
* O sistema deve calcular automaticamente graus de parentesco

---

# Segurança

## Estratégia de Segurança

A plataforma trabalhará com:

* JWT Access Token
* Refresh Token
* Rotação de sessões
* Rate Limiting
* Criptografia de dados sensíveis
* Hash seguro de senhas
* Política de permissões por domínio

---

## Política de Auditoria

Toda ação crítica deve gerar auditoria:

* Login
* Alterações familiares
* Exclusões
* Convites
* Atualizações de perfil
* Mudanças de privacidade

### Estrutura de Auditoria

Cada registro deve conter:

* Usuário
* Ação
* Entidade afetada
* Antes/depois
* Timestamp
* IP
* Device/User-Agent

---

# Observabilidade

## Estratégia

A aplicação deve nascer observável.

### Logs

* Logs estruturados
* Contextualização por request
* Correlação de eventos

### Métricas

* Tempo de resposta
* Erros
* Sessões ativas
* Crescimento de árvore familiar

### Monitoramento Futuro

* OpenTelemetry
* Grafana
* Prometheus
* Sentry

---

# Estratégia Mobile

## Primeira Versão

A aplicação inicialmente será distribuída como:

* PWA (Progressive Web App)

Objetivos:

* Reduzir custo inicial
* Permitir experiência mobile
* Instalação no dispositivo
* Push Notifications
* Cache offline parcial

---

# Diretrizes de UI/UX

## Experiência Visual

Toda interface deve:

* Priorizar mobile
* Utilizar padrões de redes sociais
* Ser extremamente simples
* Minimizar fricção de cadastro
* Valorizar visualização da família

---

## Componentes Principais

* Feed social
* Cards familiares
* Timeline
* Visualização de árvore
* Perfil familiar
* Sistema de conexões

---

# Visualização da Árvore

## Objetivos Técnicos

A árvore genealógica deve:

* Ser dinâmica
* Escalável
* Navegável
* Interativa
* Responsiva

Tecnologias futuras possíveis:

* React Flow
* D3.js
* Cytoscape

---

# Estratégia de Crescimento

## Crescimento Orgânico

O modelo do Raiz favorece crescimento viral natural:

1. Usuário cria perfil
2. Adiciona familiares
3. Convida parentes
4. Novos parentes expandem a árvore
5. Rede cresce organicamente

---

# Possíveis Funcionalidades Futuras

* IA para descoberta de conexões familiares
* OCR para documentos antigos
* Linha do tempo histórica familiar
* Árvore geográfica
* Teste de DNA integrado futuramente
* Memorial digital familiar
* Cápsula do tempo
* Eventos familiares privados

---

# MVP Inicial

## Funcionalidades do MVP

### Autenticação

* Registro
* Login
* Recuperação de senha

### Perfil

* Foto
* Nome
* Dados básicos

### Família

* Adicionar parentes
* Convidar parentes
* Visualizar árvore

### Feed

* Postagens simples
* Curtidas
* Comentários

### Notificações

* Aniversários
* Convites

---

# Objetivo da Primeira Versão

Validar:

* Interesse no conceito
* Engajamento familiar
* Crescimento orgânico
* Retenção social
* Potencial emocional da plataforma

---

# Conceito Central do Produto

“Uma rede social privada baseada em vínculos familiares reais.”

---

# Nome Oficial

## RAIZ

### Slogan

“Conectando gerações.”
