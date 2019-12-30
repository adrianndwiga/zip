import { Config } from "./types";
import { readFileSync, writeFileSync } from "fs";
import { createCipheriv, createDecipheriv } from "crypto";

export function encrypt(config: Config, key: Buffer, iv: Buffer, source: string, target: string) {
    const content = readFileSync(source, 'utf8')
    let cipher = createCipheriv(config.algorithm, Buffer.from(key), iv)
    let encrypted = cipher.update(content)
    encrypted = Buffer.concat([encrypted, cipher.final()]);

    writeFileSync(target, encrypted.toString(config.encoding), 'utf8')    
}

export function decrypt(config: Config, key: Buffer, iv: Buffer, source: string, target: string): void {
    const encrypted = Buffer.from(readFileSync(source, 'utf8'), config.encoding)
    const decipher = createDecipheriv(config.algorithm, Buffer.from(key), iv)
    let decrypted = decipher.update(encrypted)
    decrypted = Buffer.concat([decrypted, decipher.final()])

    writeFileSync(target, decrypted.toString(), 'utf8')
}