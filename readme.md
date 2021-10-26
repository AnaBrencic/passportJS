# Passport-google-oauth20

O [passport](http://www.passportjs.org/) é um middleware de autenticação para [Node.js.](https://nodejs.org/en/) Com ele é possível se logar em aplicativos web usando contas do facebook, twitter, github e muito mais. 
Neste módulo há uma estrátegia para autenticação com o Google. 

## instalar
```
$ npm install passport-google-oauth20 
```
## uso

Primeiramente você deve registrar um aplicativo no [Google Developers Console.](https://console.cloud.google.com/apis/dashboard) Vá em: credenciais -> criar credenciais -> ID do cliente Oauth -> Aplicativo da web. Em seguida, informe um URI de redirecionamento. Seu aplicativo receberá um ID do cliente e uma chave secreta do cliente, que devem ser fornecidos à estratégia. 




