const {subcommand, bool, number, command, string} = require('shargs/opts')

const askOpts = [
  string('format', ['FORMAT'], {only: ['json', 'xml']}),
  bool('html', ['NO_HTML']),
  bool('help', ['HELP']),
  string('question', ['QUESTION'])
]

const opts = [
  subcommand(askOpts)('ask', ['ASK'], {required: true}),
  number('answer', ['A', 'ANSWER']),
  bool('help', ['HELP'])
]

const environment = command('environment', opts)

module.exports = {
  environment
}