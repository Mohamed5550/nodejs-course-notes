# Hello world

## Insatlling node

## writing node

- REPL: write node to enter the interactive shell
- you can create a file instead, then call it with node filename (may be without js)

## Different between node and browser

- browser has cookies and DOM
- browser doesn't have filesystem
- browser can't control the user choice but with node you can choose the environment

## Modules

- A module is an encapsulated resuable chunk of code in its context
- Local modules
  - each part of the application should be separated into a module
  - require('file_path') to include a module
  - you can write export in the module to export a specific function
- Module scope
  - Each module has its own scope
- Modul cashing
  - when you call a module for the second time, it uses the first import
- Module patterns
  - you can add export directly to the arrow function
  - you can export more than one function
  - you can use exports instead of module.exports but don't do this
- exports vs module.exports
  - when you write to module.exports it is added too to exports but not vice versa

## ES Modules

- es modules has the extenions .mjs instead of .js
- type `export default object` instead of `module.exports = object`
- type `import object from file` instead of `object = require('file')`
- you can use export more than one time in the same module

## Watch

- run `npm watch file` and changes will be updated automatically
