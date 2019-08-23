const exec = require('child_process').exec
const argv = require('yargs').argv

const makeDir = () => exec(`mkdir ${argv.n}`)

const changeDir = () => exec(`cd ${argv.n}`)

const gitInit = () => exec(`cd ${argv.n} && git init`)

const npmInit = () => exec(`cd ${argv.n} && npm init -y`)

const yarnInit = () => exec(`cd ${argv.n} && yarn init -y`)

const gitIgnore = () => exec(`cd ${argv.n} && touch .gitignore`)

module.exports = {makeDir, changeDir, gitInit, npmInit, yarnInit, gitIgnore}
