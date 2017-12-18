'use strict';

// Vendor
const {createPlugin, utils} = require('stylelint');

// Configuration
const ruleName = 'mirego/optional-box-shadow-values';
const messages = utils.ruleMessages(ruleName, {
  default: () => {
    return 'You should not specify `0` as box-shadow’s `blur-radius` or `spread-radius` value because it’s `0` by default.';
  }
});

module.exports = createPlugin(ruleName, () => (cssRoot, result) => {
  cssRoot.walkDecls('box-shadow', (node) => {
    const {value} = node;

    if (!value.match(/(inset\s+)?\w+\s+\w+\s+(0\s+\D|0\s+0|^0\w+\s+0)/)) return;

    const message = messages.default();

    utils.report({ruleName, result, node, message});
  });
});

module.exports.messages = messages;
