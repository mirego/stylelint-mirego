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
    let values = value.split(' ');

    // Skip “inset” keyword value
    if (values[0] === 'inset') values = values.slice(1, values.length);

    if (values[2] !== '0' && values[3] !== '0') return;

    const message = messages.default();

    utils.report({ruleName, result, node, message});
  });
});

module.exports.messages = messages;
