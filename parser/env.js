const {parserSync} = require('shargs')
const {cast, flagsAsBools, restrictToOnly, verifyOpts} = require('shargs/parser')
const askRules = require('./rules/ask')

const toArgv = env => ({
  argv: (
    Object.entries(env)
    .filter(([key]) => key.startsWith('DT_'))
    .map(([key, value]) => [...key.replace('DT_', '').split('__'), value])
    .flat()
  )
})

const stages = {
  toArgv,
  opts: [restrictToOnly, cast],
  args: [flagsAsBools]
}

const substages = {
  ask: [verifyOpts(askRules), ...stages.opts]
}

module.exports = parserSync(stages, substages)