export interface Config {
    algorithm: string
    encoding: BufferEncoding
    archive: {
        name: string
        fullPath: string
    }
}

export interface EncryptionConfig {
    algorithm: string
    encoding: BufferEncoding
}