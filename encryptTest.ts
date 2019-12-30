import { EncryptionConfig } from "./types";
import { encrypt, decrypt } from "./encrypt";
import { writeFileSync, existsSync, unlinkSync, readFileSync } from "fs";
import { expect } from "chai";

const config: EncryptionConfig = {
    algorithm: 'test-algorithm',
    encoding: 'ascii'
}

const key = Buffer.from('some string', config.encoding);
const iv = Buffer.from('some initialization vector', config.encoding)

const testData = {
    source: 'source.txt',
    target: 'target.txt',
    encryptionText: 'some text to encrypt',
    decryptedFile: 'decryptedFile.txt'
}

describe('encrypt / decrypt', () => {
    beforeEach(() => {
        if (existsSync(testData.source))
            unlinkSync(testData.source)
        if (existsSync(testData.target))
            unlinkSync(testData.target)
        if (existsSync(testData.decryptedFile))
            unlinkSync(testData.decryptedFile)

        writeFileSync(testData.source, testData.encryptionText, 'utf8')
    })

    it('should decrypt encrypted text', () => {
        encrypt(config, key, iv, testData.source, testData.target)
        decrypt(config, key, iv, testData.target, testData.decryptedFile)

        expect(testData.encryptionText).to.eq(readFileSync(testData.decryptedFile, 'utf8'))
    })
})