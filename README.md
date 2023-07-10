# Creamos un repositorio en el docker hub

![image](https://github.com/andres911/practica5-2p/assets/56493087/3bfd6066-8c08-4479-aa2f-29d48cbec58e)

# Luego generamos un token en la configuracion del perfil de dockerhub
## Esto con el fin de poder conectarse a la cuenta de docker

![image](https://github.com/andres911/practica5-2p/assets/56493087/b734ea96-9ddd-4be9-a0fd-60b47ed74071)

# Creamos las variables de los secrets actions
## Docker_user y Docker_Password

![image](https://github.com/andres911/practica5-2p/assets/56493087/dc6fbfcf-50ca-4a6f-95b7-d1948fb4fa46)

# Luego nos dirigimos a actions
## Y buscamos docker image
Y colocamos la configuracion necesaria para poder hacer cambios y estos se suban al repositorio de dockerhub

![image](https://github.com/andres911/practica5-2p/assets/56493087/628163fb-8efd-48d2-805b-8775dd83281f)

![image](https://github.com/andres911/practica5-2p/assets/56493087/e66f9e0d-783e-4fd4-a20a-5d8cbdff74db)

# Para que esto de aqui funcione debemos crear un archivo de dockerfile del proyecto
## Hacemos una prueba de que el proyecto este perfectamente dockerizado
## En caso de estar mal dockerizado, el cambio no podra subirse al docker hub

![image](https://github.com/andres911/practica5-2p/assets/56493087/b5621e47-6d52-462e-9ed6-a4c714633e03)

# Ahora con el proyecto perfectamente dockerizado podemos realizar cambios y subirlos al github

![image](https://github.com/andres911/practica5-2p/assets/56493087/f7b9cca0-33d7-4bd5-af86-2aa96bef2d76)

![image](https://github.com/andres911/practica5-2p/assets/56493087/0cc00c41-f758-4bb9-a149-804cbc457e7c)

# Luego el action comenzara actuar para subir el cambio al dockerhub

![image](https://github.com/andres911/practica5-2p/assets/56493087/3709a7f2-dbe1-410f-8690-21c05774dbbf)

![image](https://github.com/andres911/practica5-2p/assets/56493087/9cd3f525-d4d7-44fd-8c25-ecd36ba753b4)

![image](https://github.com/andres911/practica5-2p/assets/56493087/ddc10da6-5f16-4ca1-8ce0-a28d06e67e3e)

# Una vez terminada y ver que no hay error el cambio sale que se subio correctamente

![image](https://github.com/andres911/practica5-2p/assets/56493087/97e2ee46-58ad-4268-8d28-e1d492f9b2f6)

# Luego podemos revisar que se creo una nueva version de la imagen en el dockerhub

![image](https://github.com/andres911/practica5-2p/assets/56493087/46d622b5-4c84-4f6f-bcbe-10bfa107231c)




<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
