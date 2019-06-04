export default input =>
  JSON.stringify(input).replace(
    /[\u007F-\uFFFF]/g,
    chr => '\\u' + ('0000' + chr.charCodeAt(0).toString(16)).substr(-4)
  )
