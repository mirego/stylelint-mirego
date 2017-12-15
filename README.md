# stylelint-mirego

The `stylelint-mirego` plugin adds Stylelint rules that help our code meet our code styling guidelines.

## Installation

```bash
$ npm install --save-dev stylelint-mirego
```

## Usage

Add the plugin to your Stylelint plugins:

```
"plugins": [
  "stylelint-mirego"
],
```

then add the rules you want to use:

```
"mirego/single-decimal-line-height": 2,
```

### Rules

#### `single-decimal-line-height`

This rule make sure that no more than a decimal is used in `line-height` numeric values.

```css
/* Good */
#one { line-height: 1; }
#two { line-height: 1.1; }
#three { line-height: 22px; }
#four { line-height: inherit; }

/* Bad */
#five { line-height: 1.24; }
#six { line-height: 20.20; }
```

## License

`stylelint-mirego` is © 2017 [Mirego](http://www.mirego.com) and may be freely distributed under the [New BSD license](http://opensource.org/licenses/BSD-3-Clause).  See the [`LICENSE.md`](https://github.com/mirego/stylelint-mirego/blob/master/LICENSE.md) file.

## About Mirego

[Mirego](https://www.mirego.com/en) is a team of passionate people who believe that work is a place where you can innovate and have fun. We're a team of [talented people](https://life.mirego.com/en) who imagine and build beautiful Web and mobile applications. We come together to share ideas and [change the world](http://www.mirego.org/en).

We also [love open-source software](https://open.mirego.com) and we try to give back to the community as much as we can.
