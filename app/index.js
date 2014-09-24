'use strict';
var util = require('util');
var path = require('path');
var url = require('url');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

/* jshint -W106 */
var proxy = process.env.http_proxy || process.env.HTTP_PROXY || process.env.https_proxy ||
  process.env.HTTPS_PROXY || null;
/* jshint +W106 */
var githubOptions = {
  version: '3.0.0'
};

if (proxy) {
  var proxyUrl = url.parse(proxy);
  githubOptions.proxy = {
    host: proxyUrl.hostname,
    port: proxyUrl.port
  };
}

var GitHubApi = require('github');
var github = new GitHubApi(githubOptions);

if (process.env.GITHUB_TOKEN) {
  github.authenticate({
    type: 'oauth',
    token: process.env.GITHUB_TOKEN
  });
}

var extractExtensionName = function (_, appname) {
  var slugged = _.slugify(appname);
  var match = slugged.match(/^extension-(.+)/);

  if (match && match.length === 2) {
    return match[1].toLowerCase();
  }

  return slugged;
};

var githubUserInfo = function (name, cb) {
  github.user.getFrom({
    user: name
  }, function (err, res) {
    if (err) {
      throw new Error(err.message +
        '\n\nCannot fetch your github profile. Make sure you\'ve typed it correctly.');
    }
    cb(JSON.parse(JSON.stringify(res)));
  });
};

var WakandaExtensionGenerator = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
    this.currentYear = (new Date()).getFullYear();
  },

  prompting: function () {
    var done = this.async();
    var generator = this;
    var extensionName = extractExtensionName(this._, this.appname);

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the Wakanda Studio Extension generator!'
    ));

    var prompts = [{
        name: 'githubUser',
        message: 'Would you mind telling me your username on GitHub?',
        default: 'someuser'
      }, {
        type    : 'input',
        name    : 'extensionName',
        message : 'Your Wakanda Studio extension name',
        default : extensionName
      }, {
        type    : 'input',
        name    : 'description',
        message : 'Description of your studio extension?',
        default: function (answers) {
          var extension, desc;
          extension = answers.extensionName || generator.extensionName;
          desc = extension + ' Wakanda extension created through Yeoman';
          return desc;
        }
      }];

    this.prompt(prompts, function (answers) {
      generator.answers = answers;

      done();
    }.bind(this));
  },

  configuring: {
    answersMapping: function () {
      var answers = this.answers;
      if (answers.extensionName) {
        this.extensionName = answers.extensionName;
        this.githubUser = answers.githubUser;
      }
    },

    userInfo: function () {
      var done = this.async();

      githubUserInfo(this.githubUser, function (res) {
        /*jshint camelcase:false */
        this.realname = res.name;
        //this.email = res.email;
        this.githubUrl = res.html_url;
        done();
      }.bind(this));
    }
  },

  writing: {
    projectfiles: function () {
      this.template('_package.json', 'package.json');
      this.template('_bower.json', 'bower.json');
      this.template('editorconfig', '.editorconfig');
      this.template('jshintrc', '.jshintrc');
      //this.template('_travis.yml', '.travis.yml');
      this.template('README.md');
      this.src.copy('_Gruntfile.js', 'Gruntfile.js');
    },

    extension: function () {
      this.dest.mkdir('scripts');
      this.src.copy('index.js', 'index.js');
      this.src.copy('YOUR_EXTENSION_ICON.png', 'YOUR_EXTENSION_ICON.png');
      this.template('manifest.json', 'manifest.json');
      this.src.copy('manifest-schema.js', 'manifest-schema.js');
      this.template('main.html', 'main.html');
      this.src.copy('scripts/app.js', 'scripts/app.js');

    },

    tests: function () {
      /* TO BE DONE
      this.dest.mkdir('test');
      this.template('test-extension.js', 'test/test-extension.js');
      */
    }
  },

  end: function () {
    this.installDependencies();
  }
});

module.exports = WakandaExtensionGenerator;
