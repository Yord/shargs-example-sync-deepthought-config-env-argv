const {parserSync} = require('shargs')
const {cast, flagsAsBools, requireOpts, restrictToOnly, reverseFlags, splitShortOpts, verifyOpts} = require('shargs/parser')
const askRules = require('./rules/ask')

const stages = {
  argv: [splitShortOpts],
  opts: [requireOpts, reverseFlags, restrictToOnly, cast],
  args: [flagsAsBools]
}

const substages = {
  ask: [verifyOpts(askRules), ...stages.opts]
}

module.exports = parserSync(stages, substages)