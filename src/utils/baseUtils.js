/*
 * @str 字符串
 * */
const _getRealLen = function(str) {
  let len = 0
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > 127 || str.charCodeAt(i) === 94) {
      len += 2
    } else {
      len++
    }
  }
  return len
}

/*
 * @str 字符串
 * @length 需要剪切的字符长度
 * */
const _cutOutString = (str, length) => {
  for (let i = 1; i <= str.length; i++) {
    if (_getRealLen(str.substr(0, i)) > length) {
      str = str.substr(0, i - 1)
      break
    }
  }
  return str
}

/*
 * @str: 传入的字符串
 * @s: 需要判断的字符串
 * */
const _startWith = (str, ...s) => {
  return s.find(it => new RegExp(`^${it}`).test(str))
}

const _endWith = (str, s) => {
  let reg = new RegExp(s + '$')
  return reg.test(str)
}

/*
 *  @str 剪切的字符串
 *  @len 长度设置
 * */
const _filterStringEllipsis = (str, len) => {
  return str ? (_getRealLen(str) > len ? _cutOutString(str, len) + '...' : str) : null
}

// 排除空格的空字符串
const _isEmptyStr = str => {
  return !str || !str.trim()
}

/*
 * @target 需要拷贝的对象
 * */
const _deepCopy = target => {
  if (typeof target !== 'object' || target === null) return target
  // 判断目标类型，来创建返回值
  var newObj = target instanceof Array ? [] : {}
  for (var item in target) {
    // 只复制元素自身的属性，不复制原型链上的
    if (target.hasOwnProperty(item)) {
      newObj[item] = typeof target[item] === 'object' ? _deepCopy(target[item]) : target[item]
    }
  }
  return newObj
}

/*
 * @date 日期，既可以是Date格式，也可是字符串格式
 * @fmt 需要转换的格式，如 'yyyy-MM-dd hh:mm:ss'
 * return 转换后的字符串格式的日期
 * */
const _formatDate = (date, fmt) => {
  if (!date) {
    return null
  }
  // fmt = fmt.replace(/-/g, '/')
  if (typeof date === 'string') {
    date = new Date(Date.parse(date.replace(/-/g, '/')))
  }
  let o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))
    }
  }
  return fmt
}

/**
 * return 返回上月第一天与最后一天
 * */
const _getPreDate = () => {
  let firstDate = new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1)
  let date = new Date()
  let day = new Date(date.getFullYear(), date.getMonth(), 0).getDate()
  let lastDate = new Date(new Date().getFullYear(), new Date().getMonth() - 1, day)
  return { firstDate: _formatDate(firstDate, 'yyyy-MM-dd'), lastDate: _formatDate(lastDate, 'yyyy-MM-dd') }
}

const _getCurrentDateStr = (fmt = 'yyyy-MM-dd') => {
  return _formatDate(new Date(), fmt)
}

// 价格整数和小数分开显示
const _priceSplitShow = (price, className = 'font14') => {
  if (typeof price === 'number') {
    if (price < 1) {
      return `<span class="${className}">${price}</span>`
    } else {
      let priceArr = price.toString().split('.')
      if (priceArr[1]) {
        return `${priceArr[0]}<span class="${className}">.${priceArr[1]}</span>`
      } else {
        return price
      }
    }
  } else {
    return ''
  }
}
// 同时显示币种符号和价格
const _priceTitleShow = (price, currency) => {
  if (typeof price === 'number') {
    if (currency === 'USD' && '$') {
      return `$${price}`
    } else {
      return `￥${price}`
    }
  } else {
    return ''
  }
}
// 主营产品 *空格*分割字符  *、*号连接
const _mainProductShow = str => {
  if (str) {
    return str.split(' ').join('、')
  }
}

export default {
  // 获取字符串字符长度
  getRealLen: _getRealLen,
  // 根据字符长度剪切字符
  cutOutString: _cutOutString,
  // 判断字符串开头
  startWith: _startWith,
  // 字符串结尾
  endWith: _endWith,
  // 截取字符长度并补充省略号
  filterStringEllipsis: _filterStringEllipsis,
  isEmptyStr: _isEmptyStr,
  deepCopy: _deepCopy,
  formatDate: _formatDate,
  // 计算上个月的第一天与最后一天的时间
  getPreDate: _getPreDate,
  getCurrentDateStr: _getCurrentDateStr,
  priceSplitShow: _priceSplitShow,
  // 货币符号和价格显示
  priceTitleShow: _priceTitleShow,
  // 主营产品 *空格*分割字符  *、*号连接
  mainProductShow: _mainProductShow
}
