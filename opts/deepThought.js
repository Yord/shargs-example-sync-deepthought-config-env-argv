const {subcommand, flag, number, command, string, stringPos} = require('shargs/opts')

const description = (
  'Deep Thought was created to come up with the Answer to ' +
  'The Ultimate Question of Life, the Universe, and Everything.'
)

const askOpts = [
  string('format', ['--format'], {only: ['json', 'xml'], desc: 'Respond either with json or xml.'}),
  flag('html', ['--no-html'], {reverse: true, desc: 'Removes HTML tags.'}),
  flag('help', ['-h', '--help'], {desc: 'Print this help message and exit.'}),
  stringPos('question', {required: true, desc: 'State your question.'}),
]

const opts = [
  subcommand(askOpts)('ask', ['ask'], {required: true, desc: 'Ask a question.'}),
  number('answer', ['-a', '--answer'], {desc: 'The answer.'}),
  flag('help', ['-h', '--help'], {desc: 'Print this help message and exit.'}),
]

const ask = command('deepThought ask', askOpts, {desc: description})

const deepThought = command('deepThought', opts, {desc: description})

module.exports = {
  ask,
  deepThought
}