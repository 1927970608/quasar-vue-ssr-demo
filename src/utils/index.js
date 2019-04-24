export function getParamValue(name, url) {
  url = url || window.location.search
  let value = url.substring(1).match(new RegExp(name + '=([^&=]*)'))
  return (value && decodeURIComponent(value[1])) || ''
}
