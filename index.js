var gql = require('gql')

module.exports = gql.atLeast(2, [
  // rs6413413 - edited in SNPedia - T allele is serine producing variant, not A
  gql.has('rs6413413', 'T'),
  gql.has('rs283413', 'T'),
  gql.has('rs1693482', 'A'),
  gql.has('rs698', 'G')
])
