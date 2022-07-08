# OCP Electron JS App.

> An electron-vue project

#### Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:9080
npm run dev

# build electron application for production
npm run build

# run unit & end-to-end tests
npm test


# lint all JS/Vue component files in `src/`
npm run lint

```
``` bash

# If npm install stucks on some packages (chalk etc.), or python2 error shows up
# 1. Update your nodejs and npm 
# 2. Execute scripts below on powershell with admin privileges, then try npm install again (https://github.com/felixrieseberg/windows-build-tools/issues/172)

# Solution - 1: Using npm to install windows build tools

npm install --global --production windows-build-tools@4.0.0
npm config set msvs_version 2017
npm install --global windows-build-tools
npm install

# Solution - 2: Using choco to install windows build tools

choco install python visualcpp-build-tools -y
npm config set msvs_version 2017
npm install

```
---

This project was generated with [electron-vue](https://github.com/SimulatedGREG/electron-vue) using [vue-cli](https://github.com/vuejs/vue-cli). Documentation about the original structure can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html).
