import test from 'ava';
import eslint from 'eslint';
import isPlainObj from 'is-plain-obj';
import tempWrite from 'temp-write';

const fixture = `
'use strict';
const x = true;

if (x) {
  console.log();
}
`;

function runEslint(str, conf) {
  const linter = new eslint.CLIEngine({
    useEslintrc: false,
    configFile: tempWrite.sync(JSON.stringify(conf))
  });
  return linter.executeOnText(str).results[0].messages;
}

test('main', t => {
  const conf = require('../');
  t.true(isPlainObj(conf));
  t.true(isPlainObj(conf.rules));
  t.is(runEslint(fixture, conf).length, 0);
});
