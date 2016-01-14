const libVersion = '0.0.2';

Package.describe({
  name: 'zodiase:v8-natives',
  version: libVersion,
  summary: 'A wrapper for npm package v8-natives.',
  git: 'https://github.com/Zodiase/meteor-v8-natives.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.export('v8', ['client', 'server']);
  api.addFiles('src/lib/v8-browser-all.js', 'client');
  api.addFiles('v8-natives.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('zodiase:v8-natives');
  api.addFiles('v8-natives-tests.js');
});

Npm.depends({
  'v8-natives': libVersion
});
