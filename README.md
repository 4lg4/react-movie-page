# react-movie-page

> Challenge React Movie Page, create a movie page to display a carousel of posters and movie details with filtering by genre

## Frameworks, Libraries and Tools

- NPM. dependency manager;
- Mocha. test framework;
- Chai. BDD/TDD assertion library;
- ESLint. lint tool;
- ReactJS. For building user interfaces;
- Sinon. Standalone test spies, stubs and mocks;
- NYC. Code coverage tooling;
- Node Fetch. HTTP client;

### Manual installation

Make sure that you are using the NodeJS version is the same as `.nvmrc` file version. If you don't have this version please use a version manager such as `nvm` or `n` to manage your local nodejs versions.

> Please make sure that you are using the correct NodeJS version :)
Assuming you are using `nvm`, please run the commands on the project folder:

```bash
$ nvm install $(cat .nvmrc); # install required Node.js version
$ nvm use $(cat .nvmrc); # use Node.js version
$ npm install
```

In Windows, please install NodeJS using one of these options:

Via `NVM Windows` package: Dowload via [this link](https://github.com/coreybutler/nvm-windows). After that, run the commands:

```bash
$ nvm install $(cat .nvmrc); # install required Node.js version
$ nvm use $(cat .nvmrc); # use Node.js version
$ npm install
```

Via Chocolatey:

```bash
$ choco install nodejs.install -version v8.9.4
```

## Test
```bash
    npm run test
```

## Dev
```bash
    npm run dev
    npm run watch # used together with development for TDD.
```

## Build
```bash
    npm run build
```

## Improvements

Tech debt / improvements list for this project

- Improve User experience.
- The Carousel component has a lot of room to improve. But as the first version we can validate the idea and improve as it goes.
- It has only the base scructural css, missing some beautiful styling
- Missing e2e test with given endpoint.

## Author
**Alga Leal (4lg4)**

+ <http://www.alga.me>
+ <https://www.linkedin.com/in/akgleal>
+ <https://github.com/4lg4>
