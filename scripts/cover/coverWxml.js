const tagMap = {
  view: 'div',
  text: 'span'
}

function coverWxml (wxml) {
  let template = wxml.replace(/\sbind:?/g, ' @').replace(/(<\/?)(view|test)/g, (str, $1, $2) => {
    return $1 + tagMap[$2]
  }).replace(/\s([\w\-:]{1,})\s?=\s?[\'\"]{{(\s?[\w\.]{1,})\s?}}[\'\"]/g, ($1, $2, $3) => {
    if ($2 === "wx:key") return ` :key="${$3.trim()}"`
    else if ($2 === 'wx:for') return ` wx:for="item in ${$3.trim()}"`
    return ` ${($2.indexOf('wx:') > -1 ? '' : ':') + $2.trim()}="${$3.trim()}"`
  }).replace(/\swx:/g, ' v-')

  return template
}

module.exports = coverWxml
