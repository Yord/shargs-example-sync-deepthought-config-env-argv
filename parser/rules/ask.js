const rules = opts => (
  !opts.some(_ => _.key === 'html' && typeof _.values !== 'undefined') ||
  opts.some(_ => _.key === 'format' && (typeof _.values === 'undefined' || _.values[0] === 'json'))
)

module.exports = rules