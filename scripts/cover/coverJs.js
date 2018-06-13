function Page (data) {
  let dataStr = ''
  let methodsStr = ''
  Object.keys(data).forEach((key) => {
    if (key === 'data') {
      dataStr += `
      data () {
        return ${JSON.stringify(data['data'])}
      },
    `
    } else if (key.indexOf('on') === 0) {
      dataStr += `${data[key].toString()},\n`
    } else {
      methodsStr += `${data[key].toString()},\n`
    }
  })

  methodsStr = methodsStr.slice(0, -1)
  dataStr += `
    methods: {
      setData (data) {
        Object.keys(data).forEach(key => {
          this[key] = data[key]
        })
      },
      ${methodsStr}
    }
  `
  dataStr = `export default {
    ${dataStr}
  }`

  return dataStr
}

function coverJs (jStr) {
  let importStr = jStr.slice(0, jStr.indexOf('Page('))
  jStr = eval(jStr.replace(importStr, ''))
  return importStr + jStr
}

module.exports = coverJs
