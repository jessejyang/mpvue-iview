const fs = require('fs')
const path = require('path')

fs.readdir(path.resolve(__dirname, '../src/pages'), (err, files) => {
  if (err) throw err

  const set = []
  files.forEach(file => set.push(`pages/${file}/index`))

  console.log(set)
})
