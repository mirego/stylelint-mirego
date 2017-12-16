'use strict';

// Vendor
const {createPlugin, utils} = require('stylelint');

// Configuration
const ruleName = 'mirego/single-decimal-line-height';
const messages = utils.ruleMessages(ruleName, {
  default: (value, suggestedValue) => {
    return `You should not use more than one decimal for line-height numeric values. \`${suggestedValue}\` should look the same as \`${value}\`.`;
  }
});

module.exports = createPlugin(ruleName, () => (cssRoot, result) => {
  cssRoot.walkDecls('line-height', (node) => {
    const {value} = node;
    if (!value.match(/^\d+\.\d{2,}$/)) return;

    const roundedValue = parseFloat(value).toFixed(1);
    const message = messages.default(value, roundedValue);

    utils.report({ruleName, result, node, message});
  });
});

module.exports.messages = messages;
