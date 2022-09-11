// ver v16.6.1

const hex_string = "4a1b48d7322394a78326cd283f0834093e65421a7e98e90e5b452d160b5d07d8"
const Buffer_hex_string = Buffer.from(hex_string, 'hex') // Built-in Object
var base64String = Buffer_hex_string.toString('base64')

var ResultInB64="ShtI1zIjlKeDJs0oPwg0CT5lQhp+mOkOW0UtFgtdB9g="
console.log(base64String)
console.log(ResultInB64==base64String)