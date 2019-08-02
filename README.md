# Inita CLI

## Installation

To use the `init` command globally install it using the `-g` argument of the `npm install` command like this:

```bash
npm install -g inita-cli
```

## How it works

Inita uses yargs to parse given arguments and create appropriate folder structure

## How to use

It's simple to use inita-cli, all you have to do is pass name and package manager arguments. Let's assume the name is `petProject` and package manager is `yarn`. To create folder and initalize `git` and `yarn` in this case simply use the following command:

```
inita -n petProject -p yarn
```

## [License](LICENSE)

This project is licensed under MIT license