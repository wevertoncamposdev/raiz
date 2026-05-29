# Planejamento MVP — Plataforma Raiz

## 1. Visão do MVP
O MVP da plataforma Raiz será uma rede social privada para famílias, permitindo cadastro, autenticação, criação de árvore genealógica, convites familiares e um feed básico. O objetivo é validar o modelo de conexões familiares reais e a experiência de uso.

---

## 2. Funcionalidades Essenciais do MVP

### 2.1. Autenticação e Usuário
- Cadastro de usuário (e-mail, senha, nome, data de nascimento)
- Login/logout
- Recuperação de senha
- Perfil básico do usuário (nome, foto, configurações de privacidade)

### 2.2. Árvore Genealógica
- Cadastro manual de familiares (nome, relação, data de nascimento/falecimento)
- Visualização dinâmica da árvore familiar
- Convite de familiares por e-mail
- Confirmação de vínculos familiares
- Reivindicação de perfis existentes

### 2.3. Feed Familiar
- Postagem de mensagens, fotos e histórias
- Curtidas e comentários
- Visualização do feed privado da família

### 2.4. Notificações
- Alertas de convite
- Notificações de novos posts e comentários
- Lembretes de aniversários

### 2.5. Segurança e Auditoria
- JWT + Refresh Token
- Hash seguro de senhas
- Auditoria de ações críticas (login, convite, alteração de perfil)

---

## 3. Arquitetura Inicial
- Backend: NestJS (modular, providers, Prisma, PostgreSQL)
- Frontend: NextJS (App Router, mobile first, PWA)
- ORM: Prisma
- Banco: PostgreSQL
- Autenticação: JWT
- Validação: Zod/Class Validator
- Observabilidade: logs estruturados, métricas básicas

---

## 4. Etapas de Desenvolvimento

### 4.1. Setup Inicial
- [ ] Configuração do repositório e ambiente
- [ ] Setup do monorepo (backend/frontend)
- [ ] Configuração do banco e ORM
- [ ] Definição dos domínios principais (auth, user, family, feed)

### 4.2. Backend
- [ ] Implementar domínio de autenticação (cadastro, login, refresh, recuperação)
- [ ] Implementar domínio de usuário (perfil, privacidade)
- [ ] Implementar domínio de família (criação de árvore, convites, vínculos)
- [ ] Implementar domínio de feed (postagens, comentários)
- [ ] Implementar notificações básicas
- [ ] Implementar auditoria
- [ ] Documentação Swagger

### 4.3. Frontend
- [ ] Setup NextJS + TailwindCSS
- [ ] Autenticação e rotas protegidas
- [ ] Cadastro e login
- [ ] Visualização e edição de perfil
- [ ] Visualização da árvore familiar
- [ ] Feed familiar
- [ ] Notificações
- [ ] PWA básico

### 4.4. Testes e Qualidade
- [ ] Testes unitários e2e (NestJS, Jest)
- [ ] Testes de integração frontend
- [ ] Lint, Prettier, Husky

### 4.5. Deploy e Observabilidade
- [ ] Deploy inicial (Vercel/Render)
- [ ] Configuração de logs e métricas

---

## 5. Critérios de Aceite do MVP
- Usuário consegue se cadastrar, logar e criar sua família
- Árvore genealógica navegável e editável
- Feed funcional para postagens e comentários
- Notificações básicas funcionando
- Segurança mínima garantida (JWT, hash, rate limit)
- Auditoria de ações críticas

---

## 6. Próximos Passos Pós-MVP
- Integração com mobile nativo
- Sistema de permissões avançado
- Observabilidade avançada (OpenTelemetry, Sentry)
- Integração com serviços externos (fotos, documentos)
- Gamificação e engajamento

---

## 7. Anexos
- [ ] Diagrama de arquitetura
- [ ] Wireframes principais
- [ ] Modelagem inicial do banco

---

Este planejamento cobre o ciclo completo até um MVP funcional, pronto para testes reais e início de produção.