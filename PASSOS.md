# 🚀 Guia de Configuração — MV Solar CRM

## Índice
1. [Criar Conta no Firebase](#1-criar-conta-no-firebase)
2. [Criar Projeto Firebase](#2-criar-projeto-firebase)
3. [Configurar Autenticação](#3-configurar-autenticação)
4. [Criar Banco Firestore](#4-criar-banco-firestore)
5. [Pegar Credenciais do App](#5-pegar-credenciais-do-app)
6. [Inserir no Site](#6-inserir-credenciais-no-site)
7. [Criar Usuário Admin](#7-criar-usuário-admin)
8. [Testar o CRM](#8-testar-o-crm)
9. [Fazer Deploy](#9-fazer-deploy)

---

## 1. Criar Conta no Firebase

1. Acesse https://console.firebase.google.com
2. Clique em **"Criar conta"** (use uma conta Google)
3. Aceite os termos de uso

## 2. Criar Projeto Firebase

1. Clique em **"Criar um projeto"**
2. Nome do projeto: `mv-solar-crm` (ou qualquer nome)
3. **Desative** o Google Analytics (não é necessário)
4. Clique em **"Criar projeto"** e aguarde

## 3. Configurar Autenticação

1. No menu lateral esquerdo, clique em **"Authentication"** (Autenticação)
2. Clique na aba **"Sign-in method"** (Método de login)
3. Clique em **"Adicionar novo provedor"**
4. Escolha **"E-mail/senha"**
5. Habilite a opção **"Ativar"**
6. Clique em **"Salvar"**

## 4. Criar Banco Firestore

1. No menu lateral, clique em **"Firestore Database"**
2. Clique em **"Criar banco de dados"**
3. Escolha **"Modo de teste"** (importante para começar)
4. Clique em **"Avançar"**
5. Escolha a localização mais próxima (ex: `southamerica-east1`)
6. Clique em **"Ativar"**

Após criar, o Firebase vai criar automaticamente as coleções `leads` e `proposals` quando os primeiros dados chegarem. Mas já podemos criar as regras de segurança depois.

## 5. Pegar Credenciais do App

1. No menu lateral, clique em **"Visão geral do projeto"** (engrenagem ao lado de "Visão geral do projeto")
2. Clique em **"Configurações do projeto"**
3. Na seção **"Seus apps"**, clique no ícone **"</> (Web)"**
4. Registre o apelido do app: `mv-solar-site`
5. **Não marque** "Hosting"
6. Clique em **"Registrar app"**
7. Copie o objeto `firebaseConfig` exibido na tela. É algo como:

```js
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "mv-solar-crm.firebaseapp.com",
  projectId: "mv-solar-crm",
  storageBucket: "mv-solar-crm.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123..."
};
```

8. Clique em **"Continuar no console"**

## 6. Inserir Credenciais no Site

Agora você precisa colar as credenciais em **2 arquivos**:

### Arquivo 1: `admin/js/firebase-config.js`

Abra o arquivo `admin/js/firebase-config.js` e substitua os valores:

```js
const firebaseConfig = {
  apiKey: "AIzaSy...",      // <-- cole aqui
  authDomain: "...",          // <-- cole aqui
  projectId: "...",           // <-- cole aqui
  storageBucket: "...",       // <-- cole aqui
  messagingSenderId: "...",   // <-- cole aqui
  appId: "..."                // <-- cole aqui
};
```

### Arquivo 2: `index.html`

Abra o `index.html`, procure por `const firebaseConfig = {` (perto do final do arquivo) e substitua pelos mesmos valores.

## 7. Criar Usuário Admin

1. No Firebase Console, vá em **"Authentication"** > aba **"Usuários"**
2. Clique em **"Adicionar usuário"**
3. Digite o **e-mail** que você usará para acessar o CRM (ex: `admin@mvsolar.com.br`)
4. Digite uma **senha** forte (ex: `MvSolar@2026`)
5. Clique em **"Adicionar usuário"**

⚠️ **Guarde esse e-mail e senha!** Você usará para fazer login no CRM.

## 8. Testar o CRM

1. Abra o arquivo `admin/login.html` no navegador
2. Faça login com o e-mail e senha que você criou
3. Você será redirecionado para o **Dashboard**
4. Navegue até **Leads** para ver a lista e o Kanban

Teste também o formulário no `index.html`:
1. Preencha o formulário de contato no site
2. Abra o CRM e veja o lead aparecer automaticamente na lista

## 9. Fazer Deploy

A estrutura de pastas já está pronta para subir no mesmo lugar do site:

```
📁 seu-site/
├── index.html
├── logo.png
├── admin/           ← CRM vai junto
│   ├── login.html
│   ├── dashboard.html
│   └── ...
```

- **Cloudflare Pages** ou **Vercel**: Basta enviar todos os arquivos. O CRM ficará acessível em `https://seusite.com.br/admin/login.html`
- **GitHub Pages**: Mesmo processo, commit tudo no repositório

---

## 💡 Dicas Importantes

| Item | Detalhe |
|------|---------|
| **Firebase grátis** | O Spark Plan (gratuito) é suficiente para começar |
| **Firestore** | 1 GB de armazenamento, 50 mil leituras/dia no plano grátis |
| **Authentication** | 10 mil usuários/mês no plano grátis |
| **Segurança** | Depois de testar, atualize as regras do Firestore no console |

### Regras de segurança sugeridas (Firestore > Regras):

```js
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

Isso garante que apenas usuários logados no CRM possam ler/escrever dados.

---

**Pronto!** Qualquer dúvida é só me chamar. 🚀
