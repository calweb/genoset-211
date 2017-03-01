# genoset-211
[![Build Status](https://travis-ci.org/calweb/genoset-211.png?branch=master)](https://travis-ci.org/calweb/genoset-211)

Use this module to help determine if there's a [problem metabolizing ethanol with ADH (Alcohol dehydrogenase)](http://www.snpedia.com/index.php/Gs211), meaning alcohol has a greater effect.

## Information

<table>
<tr>
<td>Package</td><td>genoset-211</td>
</tr>
<tr>
<td>Description</td>
<td>Problem metabolizing ethanol</td>
</tr>
<tr>
<td>Node Version</td>
<td>~ 6.9.1</td>
</tr>
</table>

## Compatibility

This genoset is to be used with DNA-JSON. See [dna2json](https://github.com/genomejs/dna2json) for more information.

## Usage

```js
var problemMetabolizeEthanol = require('genoset-211')
var dna = require('./dna.json')

console.log(problemMetabolizeEthanol(dna))
// → `true` or `false`
```

## Contributions

This Project follows the StandardJS style guide.

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

To Contribute:

- Clone Repo
- `npm install`
- Write Code
- Write Test(s)
- Submit Pull Request

## License

_genoset-211 is available under the [MIT](https://mths.be/mit) license.
