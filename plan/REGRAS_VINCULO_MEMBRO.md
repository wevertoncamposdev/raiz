# Regras de Vínculo Familiar — Plataforma Raiz

## Regra Essencial de Vínculo

- Todo membro familiar cadastrado deve obrigatoriamente possuir um vínculo direto com um usuário real já existente na plataforma.
- Ao criar um novo membro familiar, o usuário deve informar se o membro está "vivo" ou "falecido".

### 1. Membro Vivo
- Se o membro for marcado como "vivo":
  - O vínculo só será efetivado após a pessoa receber um convite, realizar o cadastro na plataforma e confirmar o vínculo.
  - O membro aparecerá como "pendente de confirmação" até que o cadastro e a confirmação sejam realizados.
  - Não é permitido criar múltiplos membros vivos com os mesmos dados (nome, data de nascimento, etc.) para evitar duplicidade.

### 2. Membro Falecido
- Se o membro for marcado como "falecido":
  - O vínculo é criado imediatamente, sem necessidade de confirmação.
  - O perfil é memorializado e não permite login ou acesso.

### 3. Fluxo de Cadastro de Membro
1. Usuário informa dados do novo membro e se está "vivo" ou "falecido".
2. Se "vivo":
   - Sistema envia convite por e-mail ou link de acesso.
   - Membro deve se cadastrar e confirmar o vínculo.
   - Após confirmação, vínculo é ativado e a árvore é atualizada.
3. Se "falecido":
   - Vínculo é criado imediatamente.
   - Perfil memorializado é exibido na árvore.

### 4. Restrições
- Não é permitido criar membros vivos sem confirmação do próprio membro.
- Relações familiares só são consideradas válidas após confirmação mútua (exceto para falecidos).
- O sistema deve evitar relações duplicadas e validar dados para garantir unicidade.

---

Essas regras garantem a integridade da árvore genealógica, evitando perfis falsos e promovendo conexões reais entre familiares.