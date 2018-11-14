import jsonp from 'common/js/jsonp'
import {commonRarams, options} from './config'

export function getHotKet() {
  const url = 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg'

  const data = Object.assign({}, commonRarams, {
    uin: 0,
    needNewCode: 1,
    platform: 'h5'
  })

  return jsonp(url, data, options)
}
