<div align="center">
  <img src="https://user-images.githubusercontent.com/11348/55367428-f609d300-54ba-11e9-94d1-e46ad0dc7eb3.png" width="600" />
  <p><br />The `stylelint-mirego` plugin adds Stylelint rules that help our code meet our code styling guidelines.</p>
  <p>
    <a href="https://travis-ci.com/mirego/stylelint-mirego"><img src="https://travis-ci.com/mirego/stylelint-mirego.svg?branch=master" /></a>
    <a href="https://www.npmjs.com/package/stylelint-mirego"><img src="https://img.shields.io/npm/v/stylelint-mirego.svg" /></a>
  </p>
</div>

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

This rule makes sure that no more than a decimal is used in `line-height` numeric values.

```css
/* Good */
#one {
  line-height: 1;
}

#two {
  line-height: 1.1;
}

#three {
  line-height: 22px;
}

#four {
  line-height: inherit;
}

/* Bad */
#five {
  line-height: 1.24;
}

#six {
  line-height: 20.20;
}
```

#### `prefer-sass-rgba-function`

This rule makes sure that when we use the `rgba` function, we use the one Sass provides.

```css
/* Good */
#one {
  background: rgba(#f00, 0.5);
}

#two {
  background: rgba($some-variable, 0.5);
}

#three {
  background: rgba(white, 0.5);
}

/* Bad */
#four {
  background: rgba(255, 255, 255, 0.5);
}
```

#### `box-shadow-optional-values`

This rule makes sure that we don’t specify useless default values in `box-shadow` properties.

```css
/* Good */
#one {
  box-shadow: 10px 10px 0 2px #f00;
}

#two {
  box-shadow: 10px 10px 2px #f00;
}

#three {
  box-shadow: 10px 10px #f00;
}

#four {
  box-shadow: inset 10px 10px 4px #f00;
}

/* Bad */
#five {
  box-shadow: 10px 10px 0 0 #f00;
}

#six {
  box-shadow: 10px 10px 4px 0 #f00;
}

#seven {
  box-shadow: inset 10px 10px 4px 0 #f00;
}
```

### `no-bem-selector`

This rule makes sure that we don't use the BEM notation for selectors.

```css
/* Good */
.button { }

.button.active { }

.button .label { }

/* Bad */
.button--active { }

.button__label { }
```

## License

`stylelint-mirego` is © 2017-2019 [Mirego](http://www.mirego.com) and may be freely distributed under the [New BSD license](http://opensource.org/licenses/BSD-3-Clause).  See the [`LICENSE.md`](https://github.com/mirego/stylelint-mirego/blob/master/LICENSE.md) file.

The nail logo is based on [this lovely icon by Smalllike](https://thenounproject.com/term/nail/1809210), from The Noun Project. Used under a [Creative Commons BY 3.0](http://creativecommons.org/licenses/by/3.0/) license.

## About Mirego

[Mirego](https://www.mirego.com/en) is a team of passionate people who believe that work is a place where you can innovate and have fun. We're a team of [talented people](https://life.mirego.com/en) who imagine and build beautiful Web and mobile applications. We come together to share ideas and [change the world](http://www.mirego.org/en).

We also [love open-source software](https://open.mirego.com) and we try to give back to the community as much as we can.
