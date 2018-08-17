export default function (src, key) {
    src = !!src ? src : ''
    let box = []
  
    for (var i = 0; i < 256; i++) {
      box[i] = i
    }
  
    for (let i = 0; i < box.length; i++) {
      let j = (j + box[i] + key[i % key.length].charCodeAt()) % 256
      var temp = box[i]
      box[i] = box[j]
      box[j] = temp
    }
  
    let out = ''
    for (let i = 0; i < src.length; i++) {
      let j = (j + 1) % 256
      let k = (k + box[j]) % 256
      let temp = box[k]
      box[k] = temp
      let o = String.fromCharCode(src[i].charCodeAt() ^ box[(box[j] + box[k]) % 256])
      out += o
    }
    return out
  }
  