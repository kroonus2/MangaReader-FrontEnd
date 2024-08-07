# Manga Reader Frontend

Este projeto é o frontend de um leitor de mangás, desenvolvido utilizando React e estilizado com Tailwind CSS. Ele permite aos usuários visualizar mangás e navegar através dos capítulos de forma amigável.

## Estrutura do Projeto

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Tailwind CSS**: Framework de CSS utilitário para estilização rápida e customizável.
- **React Router DOM**: Biblioteca para roteamento em aplicações React.

## Requisitos

- Node.js
- npm (ou yarn)

## Instalação

1. Clone este repositório:
    ```bash
    git clone https://github.com/seu-usuario/manga-reader.git
    cd manga-reader
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

## Scripts Disponíveis

No diretório do projeto, você pode executar:

### `npm start`

Inicia o aplicativo em modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para visualizá-lo no navegador.

A página recarrega automaticamente quando você faz alterações no código.\
Você também verá quaisquer erros de lint no console.

### `npm run build`

Compila o aplicativo para produção na pasta `build`.\
Ele corretamente agrupa o React no modo de produção e otimiza a compilação para o melhor desempenho.

### `npm test`

Inicia o executor de testes no modo de observação interativo.\
Veja a seção sobre [executando testes](https://facebook.github.io/create-react-app/docs/running-tests) para mais informações.

### `npm run eject`

**Nota: esta é uma operação unilateral. Uma vez que você `eject`, você não pode voltar!**

Se você não estiver satisfeito com a ferramenta de build e as opções de configuração, você pode `eject` a qualquer momento. Este comando removerá a dependência de construção única do seu projeto.

## Configuração do Tailwind CSS

Tailwind CSS já está configurado como uma dependência de desenvolvimento. Para começar a usá-lo, você pode adicionar classes utilitárias do Tailwind diretamente nos seus componentes React.

### Exemplo de uso do Tailwind CSS em um componente:

```jsx
import React from 'react';

function ExampleComponent() {
  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-blue-500">
        Bem-vindo ao Manga Reader!
      </h1>
    </div>
  );
}

export default ExampleComponent;
