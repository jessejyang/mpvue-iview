const fs = require('fs')

const stat = (path) => {
  return new Promise((resolve, reject) => {
      fs.stat(path, (err, stats) => {
          if (err) {
              reject(err);
          }
          resolve(stats);
      });
  });
};

const readdir = (path) => {
  return new Promise((resolve, reject) => {
      fs.readdir(path, (err, stats) => {
          if (err) {
              reject(err);
          }
          resolve(stats);
      });
  });
};

const readFile = (path, options) => {
  return new Promise((resolve, reject) => {
      fs.readFile(path, options, (err, stats) => {
          if (err) {
              reject(err);
          }
          resolve(stats);
      });
  });
};

const appendFile = (path, data, options) => {
  return new Promise((resolve, reject) => {
      fs.appendFile(path, data, options, (err, stats) => {
          if (err) {
              reject(err);
          }
          resolve(stats);
      });
  });
}

const mkdir = (path, mode = 0777) => {
  return new Promise((resolve, reject) => {
      fs.mkdir(path, mode, (err, stats) => {
          if (err) {
              reject(err);
          }
          resolve(stats);
      });
  });
}

module.exports = { stat, readdir, readFile, appendFile, mkdir }
