const path = require('path')
const fs = require('./utils/fspromiseify')

const coverJs = require('./cover/coverJs')
const coverWxml = require('./cover/coverWxml')

function resolve (from) {
  return path.resolve(__dirname, from)
}

let VueTemplate
let MainTemplate

const ready = [
  fs.readFile(resolve('./template/vue.tpl'), 'utf8').then(tpl => VueTemplate = tpl),
  fs.readFile(resolve('./template/main.tpl'), 'utf8').then(tpl => MainTemplate = tpl)
]

const log = console.log
const warn = console.warn
const error = console.error

const pathResolve = path.resolve

const EXAMPLES_DIR = resolve('../examples')
const OUTPUT_DIR = resolve('../src')

function uniq (array) {
  return [...new Set(array)]
}

function getFilePath (path) {
  return path.slice(path, path.lastIndexOf('/'))
}

function getFileArray (path) {
  return [
    getWeFilePath(path, '.js'),
    getWeFilePath(path, '.wxml'),
    getWeFilePath(path, '.wxss'),
    getWeFilePath(path, '.json')
  ]
}

let hadCover = new Set() // 记录已经转换的文件
const nativeFileREG = /\.(js|json|wxml|wxss)$/
function getWeFilePath (file, format = '.json') { // 为4种文件统一路径
  return file.replace(nativeFileREG, format)
}

function cover (path) {
  let outContext = pathResolve(OUTPUT_DIR, path.replace(EXAMPLES_DIR, '').slice(1)).replace(nativeFileREG, '')
  let outPath = getFilePath(outContext)
  fs.stat(path).then(stats => {
    if (stats.isDirectory()) {
      function read () {
        fs.readdir(path).then(files => {
          let filesPath = files.map(file => getWeFilePath(pathResolve(path, file)))
          uniq(filesPath).forEach(file => cover(file)) // 路径去重后转换
        }).catch(e => error(e))
      }
      fs.mkdir(outPath).then(read).catch(read)
    } else if (stats.isFile()) {
      if (nativeFileREG.test(path)) {
        function write () {
          Promise.all(getFileArray(path).map(path => fs.readFile(path, 'utf8')))
            .then(result => {
              if (!VueTemplate || !MainTemplate) error('还没读到模板，不能偷懒了')
              result[0] = coverJs(result[0])
              result[1] = coverWxml(result[1])
              // generator
              let vueContent = VueTemplate.replace('${script}', result[0].trim() ? `<script>\n${result[0]}\n</script>` : '')
                .replace('${template}', result[1].trim() ? `<template>\n<div>\n${result[1]}\n</div>\n</template>` : '')
                .replace('${style}', result[2].trim() ? `<style>\n${result[2]}\n</style>` : '')

              let mainContent = MainTemplate.replace('${config}', `{\nconfig:\n${result[3].replace(/\.\.\/\.\.\/dist\//g, '/iview/')}\n}`)

              fs.appendFile(`${outContext}.vue`, vueContent, 'utf8').then(() => {

              }).catch(e => error(e))
              fs.appendFile(`${outContext}.js`, mainContent, 'utf8').catch(e => error(e))
            })
        }
        fs.mkdir(outPath).then(write)
      }
    }
  }).catch(e => error(e))
}

Promise.all(ready).then(() => {
  log('------开始转换------')
  cover(EXAMPLES_DIR)
})
