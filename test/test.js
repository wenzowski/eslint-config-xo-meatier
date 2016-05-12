import test from 'ava';
import eslint from 'eslint';
import isPlainObj from 'is-plain-obj';
import tempWrite from 'temp-write';
const conf = require('../');

const mainFixture = `
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
  t.true(isPlainObj(conf));
  t.true(isPlainObj(conf.rules));
  t.is(runEslint(mainFixture, conf).length, 0);
});

const badImportFixture = `
import config from '../';
import path from 'path';

if (config !== path) {
  console.log('are we surprised?');
}
`;

// Should fail import/order rule from eslint-plugin-import
test.skip('bad import order', t => {
  t.is(runEslint(badImportFixture, conf).length, 0);
});

const goodImportFixture = `
import path from 'path';
import config from '../';

if (config !== path) {
  console.log('are we surprised?');
}
`;

test('good import order', t => {
  t.is(runEslint(goodImportFixture, conf).length, 0);
});
