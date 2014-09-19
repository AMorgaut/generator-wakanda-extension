/*global describe, beforeEach, it*/
'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('wakanda-extension:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .withOptions({ 'skip-install': true })
      .withPrompt({
        githubUser: 'someUser',
        extensionName: 'extension-test',
        description: 'hello world'
      })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'bower.json',
      'package.json',
      'manifest.json',
      '.editorconfig',
      '.jshintrc',
      'Gruntfile.js',
      'README.md',
      'index.js',
      'YOUR_EXTENSION_ICON.png',
      'main.html',
      'scripts/app.js'
    ]);
  });
});
