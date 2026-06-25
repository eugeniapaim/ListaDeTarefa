# ✅ Lista de Tarefas

Aplicação de gerenciamento de tarefas desenvolvida com **Angular**, permitindo adicionar, visualizar, concluir e organizar atividades de forma simples e intuitiva.

## 📋 Sobre o Projeto

Este projeto foi desenvolvido com o objetivo de praticar conceitos fundamentais do Angular, incluindo:

- Criação de componentes
- Data Binding
- Diretivas estruturais
- Manipulação de eventos
- Organização da aplicação em módulos e componentes
- Gerenciamento de estado local
- Boas práticas de desenvolvimento Front-End

O projeto foi criado utilizando **Angular CLI 22.0.0**. [1](https://github.com/eugeniapaim/ListaDeTarefa)

---

## 🚀 Tecnologias Utilizadas

### Angular

Framework desenvolvido pelo Google para construção de aplicações web modernas baseadas em componentes. O Angular fornece uma arquitetura robusta para aplicações escaláveis e de fácil manutenção. [1](https://github.com/eugeniapaim/ListaDeTarefa)

### TypeScript

Superset do JavaScript que adiciona tipagem estática, tornando o código mais seguro, legível e escalável.

### HTML5

Responsável pela estrutura e organização do conteúdo da interface.

### SCSS

Pré-processador CSS utilizado para facilitar a manutenção e reutilização de estilos.

### Angular CLI

Ferramenta oficial do Angular utilizada para:

- Criação do projeto
- Geração de componentes
- Build da aplicação
- Execução do servidor local
- Testes automatizados

[1](https://github.com/eugeniapaim/ListaDeTarefa)

---

## 🏗️ Arquitetura do Projeto

A aplicação segue a arquitetura baseada em componentes do Angular.

```text
src/
│
├── app/
│   ├── components/
│   ├── models/
│   ├── services/
│   └── app.component
│
├── assets/
├── styles/
└── main.ts
```

### Componentes

Os componentes são responsáveis por:

- Exibir a interface
- Receber interações do usuário
- Atualizar os dados exibidos

### Serviços

Os serviços centralizam regras de negócio e manipulação de dados, promovendo reutilização e desacoplamento.

### Models

Representam a estrutura dos dados utilizados pela aplicação.

---

## ⚙️ Funcionalidades

- ✅ Adicionar tarefas
- ✅ Visualizar tarefas cadastradas
- ✅ Marcar tarefas como concluídas
- ✅ Remover tarefas
- ✅ Atualização dinâmica da interface
- ✅ Organização das atividades em uma única tela

---

## 💡 Conceitos do Angular Aplicados

### Interpolação

Exibição dinâmica de dados na interface.

```html
{{ tarefa.nome }}
```

### Property Binding

Vinculação de propriedades entre componente e template.

```html
[disabled]="campoVazio"
```

### Event Binding

Captura de eventos do usuário.

```html
(click)="adicionarTarefa()"
```

### Two-Way Data Binding

Sincronização entre interface e componente.

```html
[(ngModel)]="novaTarefa"
```

### Diretivas

Utilização de diretivas Angular para renderização dinâmica.

```html
*ngFor
*ngIf
```

---

## ▶️ Como Executar

### 1. Clonar o Repositório

```bash
git clone https://github.com/eugeniapaim/ListaDeTarefa.git
```

### 2. Acessar a Pasta

```bash
cd ListaDeTarefa
```

### 3. Instalar as Dependências

```bash
npm install
```

### 4. Executar o Projeto

```bash
ng serve
```

O projeto ficará disponível em:

```text
http://localhost:4200
```

[1](https://github.com/eugeniapaim/ListaDeTarefa)

---

## 🧪 Testes

Para executar os testes da aplicação:

```bash
ng test
```

O projeto utiliza o **Vitest** para execução dos testes. [1](https://github.com/eugeniapaim/ListaDeTarefa)

---

## 📦 Build de Produção

```bash
ng build
```

Os arquivos gerados serão armazenados na pasta:

```text
dist/
```

[1](https://github.com/eugeniapaim/ListaDeTarefa)

---

## 🎯 Objetivos de Aprendizagem

Este projeto foi desenvolvido para consolidar conhecimentos em:

- Angular
- TypeScript
- Componentização
- Boas práticas de Front-End
- Organização e manutenção de código
- Manipulação de eventos e estados

---

## 👩‍💻 Autora

**Eugênia Silva Paim**

GitHub: https://github.com/eugeniapaim

---

⭐ Se este projeto foi útil para você, deixe uma estrela no repositório!
