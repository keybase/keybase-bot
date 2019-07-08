export default (input: object): string =>
  JSON.stringify(input).replace(/[\u007F-\uFFFF]/g, (chr: string): string => '\\u' + ('0000' + chr.charCodeAt(0).toString(16)).substr(-4))
