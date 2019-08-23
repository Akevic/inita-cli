#!/usr/bin/env node
const argv = require('yargs').argv
const Listr = require('listr')
const {
  makeDir,
  changeDir,
  gitInit,
  npmInit,
  yarnInit,
  gitIgnore
} = require('../lib/methods')


const tasks = new Listr([
  {
    title: 'Creating directory',
    task: () => makeDir()
  },
  {
    title: 'Change directory',
    task: () => changeDir()
  },
  {
    title: 'Create empyty git repository',
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
  },
  {
    title: 'Create empyty .gitignore file',
    task: () => gitIgnore()
  },
])

tasks.run().catch(err => {
    console.error(err)
})
