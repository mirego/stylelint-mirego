// Vendor
const testRule = require('stylelint-test-rule-tape');

const singleDecimalLineHeight = require('../rules/single-decimal-line-height');

testRule(singleDecimalLineHeight.rule, {
  ruleName: singleDecimalLineHeight.ruleName,
  skipBasicChecks: true,

  accept: [
    {
      code: 'a { line-height: 1; }'
    },
    {
      code: 'a { line-height: 1.2; }'
    },
    {
      code: 'a { line-height: 3.33px; }'
    },
    {
      code: 'a { line-height: inherit; }'
    }
  ],
  reject: [
    {
      code: 'a { line-height: 3.33; }',
      message: singleDecimalLineHeight.messages.default('3.33', '3.3')
    },
    {
      code: 'a { line-height: 20.20; }',
      message: singleDecimalLineHeight.messages.default('20.20', '20.2')
    }
  ]
});

const preferSassRgbaFunction = require('../rules/prefer-sass-rgba-function');

testRule(preferSassRgbaFunction.rule, {
  ruleName: preferSassRgbaFunction.ruleName,
  skipBasicChecks: true,

  accept: [
    {
      code: 'a { background: rgba($color, 0.9); }'
    },
    {
      code: 'a { background: rgba(#f00, 0.9); }'
    },
    {
      code: 'a { background: rgba(blue, $alpha); }'
    }
  ],
  reject: [
    {
      code: 'a { background: rgba($red, $green, $blue, $alpha); }',
      message: preferSassRgbaFunction.messages.default()
    },
    {
      code: 'a { background: rgba(0, 0, 0, 0.9); }',
      message: preferSassRgbaFunction.messages.default()
    }
  ]
});
