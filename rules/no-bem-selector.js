'use strict';

// Vendor
const {createPlugin, utils} = require('stylelint');

// Configuration
const ruleName = 'mirego/no-bem-selector';
const messages = utils.ruleMessages(ruleName, {
  default: () => {
    return 'BEM selector should not be used in projects with local CSS.';
  }
});

// Constants
const BEM_REGEX = /\w(\-\-|\_\_)\w/;

module.exports = createPlugin(ruleName, () => (cssRoot, result) => {
  cssRoot.walkRules(BEM_REGEX, (rule) => {
    const message = messages.default();
    const line = rule.source.start.line;

    utils.report({ruleName, result, message, line});
  });
});

module.exports.messages = messages;
