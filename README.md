# editor-markdown

### Estudo de TypeScript

### Projeto

Editor que converte texto simples em HTML utilizando [Markdown](https://pt.wikipedia.org/wiki/Markdown).

### Tópicos abordados

- Criação de página HTML utilizando o [Semantic-UI](https://semantic-ui.com/)
- Mapeandor tipos de tag markdown para tipos HTML
- Armazenando o markdown convertido em uma classe personalizada
- Utilização do padrão **visitor** para atualizar o documento
- Utilização do padrão **chain-of-responsibility** para aplicar as tags

### Definição de requisitos

- Criar um aplicativo para analizar markdown
- O usuário digitará em uma área de texto
- Cada vez que a área de texto muda, analizaremos todo o documento
- Dividir o documento onde o usuário pressionar Enter
- Os caracteres de abertura determina se a linha é rebatida ou não 
- Inserir # seguido de um espaço deve ser substituido por **h1**
- Inserir ## seguido de um espaço deve ser substituido por **h2**
- Inserir ### seguido de um espaço deve ser substituido por **h3**
- Inserir #### seguido de um espaço deve ser substituido por **h4**
- Inserir --- seguido de um espaço deve ser substituido por **hr**
- Se a linha não iniciar com uma marcação markdown é tratada com um parágrafo **p**
- O HTML resultante será exibido em uma ```<Label />```
- O layout será feito com Semantic-UI e o conteúdo deve ocupar 100% da página

### Executando

Instalando as dependências
```
yarn install
```

Executando o servidor live-server
```
yarn start 
```

![](https://github.com/MarlonPassos/editor-markdown-ts/blob/main/img/editor-markdown.png)