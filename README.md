# Conversor de texto para áudio

### Descrição do Objetivo

Desenvolver uma aplicação web em ​Node.js​ com banco de dados ​MySQL​. A aplicação consistirá somente de uma página com dois painéis: no painel posicionado a esquerda, o usuário poderá cadastrar novos comentários. No painel da direita todos os comentários cadastrados devem ser listados, com um botão ao lado de cada um que ao ser clicado executará um áudio de leitura do comentário.

Para realizar a conversão do comentário de texto para áudio, o candidato deverá utilizar a API [Text to Speech do IBM Watson](https://www.ibm.com/cloud/watson-text-to-speech). As operações de cadastro e atualização da lista de comentários devem ser realizadas via AJAX.

### Tecnologias usadas:

 ![https://developer.mozilla.org/pt-BR/docs/Web/JavaScript](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) ![](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node-dot-js&logoColor=white) ![](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)  ![](https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white) ![](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white) ![](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=red)
 
 ### Instalação:
 
```sh
 - git clone git@github.com:alinebw/text-to-speech.git
 
 - cd text-to-speech
 
 - npm install
```

 ### Configuração:
 
```sh
- Acesse https://www.ibm.com/cloud/watson-text-to-speech e crie uma conta gratuita
- Selecione no catálogo Text to Speech, clique em criar e salve suas credenciais (API KEY e URL)
- Crie o banco de dados no seu mysql: CREATE DATABASE text_to_speech / USE text_to_speech
- Na pasta do projeto no VS Code, crie um arquivo .env e insira as variáveis de ambiente da seguinte forma:

BD_USER=seu usuário
BD_PASSWORD=sua senha

TEXT_TO_SPEECH_APIKEY=API KEY salva
TEXT_TO_SPEECH_URL=URL salva
```

 ### Inicialização:

```sh
 - npm start

 - No seu browser favorito, digite localhost:3000/home e a aplicação está pronta para ser usada.
```
