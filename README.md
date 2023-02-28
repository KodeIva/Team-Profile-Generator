# Team-Profile-Generator

## Table of content
  - [Description](#description) 
  - [Installation](#installation)
  - [Usage](#usage)  
  - [Tests](#tests)
  - [License](#license)

  
## Description
  This is Node command-line application that accepts user input and based on those inputs the new HTML file generates. For the process are used Inquirer NPM Package, Jest for testing and File System(FS). The new 'team.html' file is generated into the 'output' folder.



## Usage
  User needs to add the team manager's details and then can choose to add either engineer or intern detail. When finished with adding employees user can choose  'Finish Building Team' and after click Enter key HTML page will be generated.



## Installations
  ```node
    import inquirer from 'inquirer'
    import fs from 'fs/promises'
  ```

  ```node
    npm init -y
    npm install inquirer
    npm install jest

  ```


## Technologies 
 - JavaScript
 - Node.js
 - Inquirer Package
 - Jest
 - HTML

## Tests  
 - Unit testing is performed by using Jest framework
 
  ```
    npm install jest
  ```
  ```
    npm run test
  ```

## License
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 