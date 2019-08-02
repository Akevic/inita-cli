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
#### Options to be added

In the future some options will be added to the project.

- [x] `--no-init` – initializing a new git project
- [x] `--no-git` – don't initialize anything on the folder
- [ ] `--hub repo-name` – create a new public repository on github

## What's next?

- [x] Scaffolding from GitHub
- [ ] Scaffolding from other git sources (GitLab, Bitbucket, etc.)
- [x] Automatically create the first commit

## [License](LICENSE)

This project is licensed under MIT license