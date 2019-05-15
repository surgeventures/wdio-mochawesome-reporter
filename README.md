WDIO Mochawesome Reporter
=========================

![Build Status](https://travis-ci.org/fijijavis/wdio-mochawesome-reporter.svg?branch=master) [![NPM version](https://badge.fury.io/js/wdio-mochawesome-reporter.svg)](http://badge.fury.io/js/wdio-mochawesome-reporter) [![npm](https://img.shields.io/npm/dm/wdio-mochawesome-reporter.svg?maxAge=2592000)]() 

Generates test results in the json formated needed to create [Mochawesome](https://github.com/adamgruber/mochawesome) reports.


## WDIO Version Compatibility

There are breaking changes between WDIO v4 and v5 with how custom reporters work.  The chart below shows the versions of this reporter and their WDIO compatibility version.

| WDIO Json Reporter | WDIO |
| ------------------ | ---- |
| <= 2.0.1           | v4   |
| >= 3.0.0           | v5   |


# WDIO v5 Compatibility

** NOTE ** 
With WDIO v5 the reporter has undergone some major changes.  At present there is no mechanism for getting a single combined report.  See [Issue 37](https://github.com/fijijavis/wdio-mochawesome-reporter/issues/37) for details.

## Installation

* NPM
```bash
npm install wdio-mochawesome-reporter --save-dev
```

* Yarn
```bash
yarn add wdio-mochawesome-reporter --dev
```

## Configuration

### Results to STDOUT
```js
reporters: [
  'dot',
  ['mochawesome',{ stdout: true }]
],
```

### Results to File
```js
reporters: [
  'dot',
  ['mochawesome',{
      outputDir: './Results'
  }]
],
```

### Results to File with custom file name
```js
reporters: [
  'dot',
  ['mochawesome',{
    outputDir: './Results',
    outputFileFormat: function(opts) { 
        return `results-${opts.cid}.${opts.capabilities}.json`
    }
  }]
],
```


# WDIO v4 Compatibility


## Installation

* NPM
```bash
npm install wdio-mochawesome-reporter@^2.0.1 --save 
```

* Yarn
```bash
yarn add wdio-json-reporter@^2.0.1 --dev
```

## Using

 Add ```mochawesome``` to the reporters array in your wdio config file.

```js
// sample wdio.conf.js
module.exports = {
  // ...
  reporters: ['dot', 'mochawesome'],
  // ...
};
```

## Reporter Configurations

The following configuration options are supported:

|option|default|description|
|---|---|---|
|includeScreenshots|false|All screenshots captured during test execution will be embedded in the report|
|screenshotUseRelativePath|false|By default sreenshots embeded in a report use an absolute path.  Set this option to true and have screenshot paths be relative to the mochawesome report folder.  This is useful if you want to publish the report to a static web server or zip it as a complete artifact of a build|


To use a configuration option add a ```mochawesomeOpts``` section to your wdio config.  Then add any options.
```js
// sample wdio.conf.js
module.exports = {
  // ...
  reporters: ['dot', 'mochawesome'],
  mochawesomeOpts: {
      includeScreenshots:true,
      screenshotUseRelativePath:true
  },
  // ...
};
```


# Mochawesome Report Generator
To convert the json generated by this package into a Mochawesome report you will need to use the [Mochawesome Report Generator](https://github.com/adamgruber/mochawesome-report-generator).

In summary...

* Add the package to your project
```shell
yarn add mochawesome-report-generator --dev
```

* Add a script to your package.json to generate the report
```json
  "scripts": {
    "generateMochawesome":"marge path/to/results.json --reportTitle 'My Project Results'"
  },
```
1) `path/to/results.json` = path and name of json file
2) `--reportTitle 'My Project Results'` = unique report title

## Version Compatibility
v1.x of ```wdio-mochawesome-reporter``` is compatible with ```2.3.2``` of ```mochawesome-report-generator```

v2.x of ```wdio-mochawesome-reporter``` is compatible with version ```3.1.5``` of ```mochawesome-report-generator```

v3.x of ```wdio-mochawesome-reporter``` is compatible with version ```3.1.5``` of ```mochawesome-report-generator```
