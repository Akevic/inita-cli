#!/usr/bin/env node
const exec = require('child_process').exec
const argv = require('yargs').argv
const Listr = require('listr')

const tasks = new Listr([
  {
    title: 'Creating folder',
    task: () => exec(`mkdir ${argv.n}`)
  },
  {
    title: 'Change directory',
    task: () => exec(`cd ${argv.n}`)
  },
  {
    title: 'Initialize git',
    task: () => exec(`cd ${argv.n} && git init`)
  },
  {
    title: 'Initialize package manager',
    task: () => {
      if (argv.p === 'npm') {
        exec(`cd ${argv.n} && npm init -y`)
      } else if (argv.p === 'yarn') {
        exec(`cd ${argv.n} && yarn init -y`)
      } else {
        throw new Error('You must choose package manager')
      }
    }
  }
])

tasks.run().catch(err => {
    console.error(err)
})
