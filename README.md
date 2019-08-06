# Inita CLI

> CLI for easier project initialization

## Installation

To use the `init` command globally install it using the `-g` argument of the `npm install` command like this:


### `npm install -g inita-cli`

To run tests use command:

### `npm test`

## How it works

Inita CLI uses yargs to parse given arguments and create appropriate folder structure

## How to use

It's simple to use Inita CLI, all you have to do is pass folder name and package manager arguments. Let's assume the name is `petProject` and package manager is `yarn`. To create folder and initalize `git` and `yarn` in this case simply use the following command:

### `inita -n petProject -p yarn`

Or to initalize project with `npm`.

### `inita -n petProject -p npm`

Inita CLI can also be used with `npx` command if you'd rather not install it globally.

### `npx inita-cli -n petProject -p yarn`

## License

This project is licensed under MIT license
