import { createReadStream, createWriteStream, readFileSync, writeFileSync, unlinkSync, existsSync } from 'fs'
import { createGzip, createGunzip } from 'zlib'
import { randomBytes, createCipheriv, createDecipheriv } from 'crypto';
import { Config } from './types';

export function zip (source: string, target: string) {
    const gzip = createGzip();
    const inp = createReadStream(source)
    const out = createWriteStream(target)
    inp.pipe(gzip).pipe(out)    
}

export function unzip(source: string, target: string) {
    const inp = createReadStream(source)
    const out = createWriteStream(target)
    const unzip = createGunzip()
    inp.pipe(unzip).pipe(out)
}

// export function encrypt(config: Config, key: Buffer, iv: Buffer, source: string, target: string) {
//     const content = readFileSync(source, 'utf8')
//     let cipher = createCipheriv(config.algorithm, Buffer.from(key), iv)
//     let encrypted = cipher.update(content)
//     encrypted = Buffer.concat([encrypted, cipher.final()]);
    
//     writeFileSync(target, encrypted.toString(config.encoding), 'utf8')    
// }

// export function decrypt(config: Config, key: Buffer, iv: Buffer, source: string, target: string): void {
//     const encrypted = Buffer.from(readFileSync(source, 'utf8'), config.encoding)
//     const decipher = createDecipheriv(config.algorithm, Buffer.from(key), iv)
//     let decrypted = decipher.update(encrypted)
//     decrypted = Buffer.concat([decrypted, decipher.final()])

//     writeFileSync(target, decrypted.toString(), 'utf8')
// }
