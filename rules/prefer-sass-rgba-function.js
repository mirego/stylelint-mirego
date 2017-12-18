'use strict';

// Vendor
const {createPlugin, utils} = require('stylelint');

// Configuration
const ruleName = 'mirego/prefer-sass-rgba-function';
const messages = utils.ruleMessages(ruleName, {
  default: () => {
    return 'The `rgba(color, alpha)` function signature should be used instead of the `rgba(red, green, blue, alpha)` one.';
  }
});

module.exports = createPlugin(ruleName, () => (cssRoot, result) => {
  cssRoot.walkDecls((node) => {
    const {value} = node;
    if (!value.match(/rgba\([^,]+,[^,]+,[^,]+,[^,]+\)/)) return;

    const message = messages.default();

    utils.report({ruleName, result, node, message});
  });
});

module.exports.messages = messages;
