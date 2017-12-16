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
