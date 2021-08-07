var assert = require('assert');
report = console.log;

var text = 'Domo arigato!';
report('Before defining functions');

function useless(ninjaCallback) {
  report('In useless function');
  return ninjaCallback();
}

function getText() {
  report('In getText function');
  return text;
}

report('Before making all the calls');

assert.strictEqual(useless(getText), text);

report('After all the calls have been made');
