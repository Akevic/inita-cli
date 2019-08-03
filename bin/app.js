#!/usr/bin/env node
const exec = require('child_process').exec
const argv = require('yargs').argv
const Listr = require('listr')

const makeDir = () => exec(`mkdir ${argv.n}`)

const changeDir = () => exec(`cd ${argv.n}`)

const gitInit = () => exec(`cd ${argv.n} && git init`)

const npmInit = () => exec(`cd ${argv.n} && npm init -y`)

const yarnInit = () => exec(`cd ${argv.n} && yarn init -y`)


const tasks = new Listr([
  {
    title: 'Creating folder',
    task: () => makeDir()
  },
  {
    title: 'Change directory',
    task: () => changeDir()
  },
  {
    title: 'Initialize git',
    task: () => gitInit()
  },
  {
    title: 'Initialize package manager',
    task: () => {
      if (argv.p === 'npm') {
        npmInit()
      } else if (argv.p === 'yarn') {
        yarnInit()
      } else {
        throw new Error('You must choose package manager')
      }
    }
  }
])

tasks.run().catch(err => {
    console.error(err)
})
