const makeDir = require('../lib/methods')
const changeDir = require('../lib/methods')
const gitInit = require('../lib/methods')
const npmInit = require('../lib/methods')
const yarnInit = require('../lib/methods')
const gitIgnore = require('../lib/methods')

describe('make directory', () => {
  const makeDirMock = makeDir()

  it('creates directory', () => {
    expect(makeDirMock).toBeTruthy()
  })
})

describe('change directory', () => {
  const changeDirMock = changeDir()

  it('changes location to the given directory', () => {
    expect(changeDirMock).toBeTruthy()
  })
})

describe('create an empty git repository', () => {
  const gitInitMock = gitInit()

  it('creates empty git repository', () => {
    expect(gitInitMock).toBeTruthy()
  })
})

describe('initialize npm package manager', () => {
  const npmInitMock = npmInit()

  it('initializes npm package manager and creates package.json', () => {
    expect(npmInitMock).toBeTruthy()
  })
})

describe('initialize yarn package manager', () => {
  const yarnInitMock = yarnInit()

  it('initializes yarn package manager and creates package.json', () => {
    expect(yarnInitMock).toBeTruthy()
  })
})

describe('initialize empty gitignore file', () => {
  const gitIgnoreMock = gitIgnore()

  it('initializes empty gitignore file', () => {
    expect(gitIgnoreMock).toBeTruthy()
  })
})