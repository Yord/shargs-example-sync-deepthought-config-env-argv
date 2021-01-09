const {desc, optsDef, optsLists, space, synopses, synopsis, usage} = require('shargs/usage')

const docs = usage([
  synopses,
  space,
  optsLists,
  space,
  desc
])

const askDocs = usage([
  synopsis,
  space,
  optsDef,
  space,
  desc
])

const style = {
  line: [{width: 80}],
  desc: [{padStart: 4, width: 76}],
  cols: [{width: 25}, {width: 55}]
}

module.exports = {
  docs,
  askDocs,
  style
}