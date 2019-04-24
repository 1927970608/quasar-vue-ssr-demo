const isProdMode = Object.is(process.env.NODE_ENV, 'production')

export const ssoUrl = isProdMode ? 'https://sso2.usoftchina.com' : 'https://account.uuzcc.cn'

export const ssoRestUrl = isProdMode ? 'https://acctrest.usoftchina.com' : 'https://ssorest.uuzcc.cn'

export const sellerUrl = isProdMode ? 'https://mallsellerrest.usoftchina.com' : 'https://mallsellerrest.uuzcc.cn'

export const demandUrl = isProdMode ? 'https://malldemandrest.usoftchina.com' : 'https://malldemandrest.uuzcc.cn'

export const productUrl = isProdMode ? 'https://mallproductrest.usoftchina.com' : 'https://mallproductrest.uuzcc.cn'

export const tradeUrl = isProdMode ? 'https://malltraderest.usoftchina.com' : 'https://malltraderest.uuzcc.cn'
// export const tradeUrl = isProdMode ? 'https://malltraderest.usoftchina.com' : 'https://dev.uuzcc.cn/malltraderest'

export const fileUrl = isProdMode ? 'https://filerest.usoftchina.com' : 'https://filerest.uuzcc.cn'
// export const fileUrl = isProdMode ? 'https://filerest.usoftchina.com' : 'https://dev.uuzcc.cn/filerest'

export const advUrl = isProdMode ? 'https://operationrest.usoftchina.com/' : 'https://operationrest.uuzcc.cn/'

export const imUrl = isProdMode ? 'https://im.usoftchina.com' : 'https://im.uuzcc.cn'

export const b2bUrl = isProdMode ? 'https://b2b.usoftchina.com' : 'http://test-b2b.uuzcc.cn/'

// 测试地址
// https://dev.uuzcc.cn/malltraderest
