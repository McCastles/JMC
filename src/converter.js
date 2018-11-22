'use strict';

const glob = require('glob');
const metacompose = require('./metacompose.js');
const compose = require('./compose.js');

module.exports = (srcPath, meta, dstPath, customTemplateFileName) => {
  if (dstPath && !dstPath.endsWith('/')) dstPath += '/';
  prepare(srcPath, meta, dstPath, customTemplateFileName);
};

const prepare = (srcPath, meta, dstPath, customTemplateFileName) => {
  let jsonFiles = undefined;
  let subDirs = undefined;
  if (srcPath.endsWith('.json')) {
    jsonFiles = glob.sync(srcPath);
    if (jsonFiles.length == 0) {
      console.log('ERROR: Fitting JSON file are not found.');
      return;
    }
  } else {
    jsonFiles = glob.sync(srcPath + '*.json');
    subDirs = glob.sync(srcPath + '*/');
    subDirs.forEach((dir) => {
      prepare(dir, meta, dstPath, customTemplateFileName);
    });
  }
  jsonFiles.forEach((file) => {
    meta ? metacompose(file, dstPath, customTemplateFileName)
    : compose(file, dstPath, customTemplateFileName);
  });
};
