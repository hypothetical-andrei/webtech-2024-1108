import crypto from 'crypto-js'

let message = 'i am a secret message'

console.log('Encrypted')
const encryptedMessage = crypto.AES.encrypt(message, 'supersecret')
console.log(encryptedMessage.toString())
const decryptedMessage = crypto.AES.decrypt(encryptedMessage, 'supersecret')
console.log('Decrypted')
console.log(decryptedMessage.toString(crypto.enc.Utf8))
