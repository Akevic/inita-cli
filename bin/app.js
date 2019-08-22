#!/usr/bin/env node
const exec = require('child_process').exec
const argv = require('yargs').argv
const Listr = require('listr')
const makeDir = require('../lib/methods')
const changeDir = require('../lib/methods')
const gitInit = require('../lib/methods')
const npmInit = require('../lib/methods')
const yarnInit = require('../lib/methods')
const gitIgnore = require('../lib/methods')

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
