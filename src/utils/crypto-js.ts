import crypto from 'crypto-js'

//加密方法
export const encrypt = (str: string) => {
  let md5 = crypto.MD5(str)
  const s = md5.toString(crypto.enc.Hex)
  const s1 = s.slice(0, s.length / 2)
  const s2 = s.slice(s.length / 2, s.length)
  let encrypted = crypto.AES.encrypt(str, s)
  return s1 + encrypted.toString() + s2
}

export const md5 = crypto.MD5
