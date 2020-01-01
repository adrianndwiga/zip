import { ReadStream, WriteStream } from "fs";
import { Folder, File } from "./archive";

export interface Config {
    algorithm: string
    encoding: BufferEncoding
    archive: {
        name: string
        fullPath: string
    }
}

export interface EncryptionConfig extends Config {
    algorithm: string
    encoding: BufferEncoding
    source: string
    target: string
    zipFile: string
}

export interface ZipConfig extends Config {
    in: ReadStream
    out: WriteStream
}

// export type step = 'archive' | 'un-archive' | 'zip' | 'unzip' | 'encrypt' | 'decrypt'

// export type action = {
//     key: 'archive' | 'un-archive' | 'zip' | 'unzip' | 'encrypt' | 'decrypt', 
//     value: action 
// }

// export interface 

export interface FolderConfig extends Config {
    rootFolder: Folder
}

export interface ExtractFolderConfig extends Config {
    _archive: (Folder | File)[]
}

export type Action = (config: Config) => Promise<string>
