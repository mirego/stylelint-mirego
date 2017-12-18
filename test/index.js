// Vendor
const testRule = require('stylelint-test-rule-tape');

const singleDecimalLineHeight = require('../rules/single-decimal-line-height');
const optionalBoxShadowValues = require('../rules/optional-box-shadow-values');

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

testRule(optionalBoxShadowValues.rule, {
  ruleName: optionalBoxShadowValues.ruleName,
  skipBasicChecks: true,

  accept: [
    {
      code: 'a { box-shadow: 10px 10px 4px #f00; }'
    },
    {
      code: 'a { box-shadow: 10px 10px 4px 2px #f00; }'
    },
    {
      code: 'a { box-shadow: 10px 10px 0 2px #f00; }'
    },
    {
      code: 'a { box-shadow: inset 10px 10px 0 2px #f00; }'
    },
    {
      code: 'a { box-shadow: inset 10px 10px 5px 2px #f00; }'
    },
    {
      code: 'a { box-shadow: inset 10px 10px 5px #f00; }'
    },
    {
      code: 'a { box-shadow: inherit; }'
    }
  ],
  reject: [
    {
      code: 'a { box-shadow: 10px 10px 4px 0 #f00; }',
      message: optionalBoxShadowValues.messages.default()
    },
    {
      code: 'a { box-shadow: inset 10px 10px 10px 0 #f00; }',
      message: optionalBoxShadowValues.messages.default()
    },
    {
      code: 'a { box-shadow: inset 10px 10px 0 0 #f00; }',
      message: optionalBoxShadowValues.messages.default()
    }
  ]
});
