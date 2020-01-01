import { Archive, Folder } from "./archive"
import { encrypt, decrypt } from "./encrypt"
import { readFileSync, writeFileSync } from "fs"
import { EncryptionConfig, Action, ZipConfig, FolderConfig, ExtractFolderConfig } from "./types"
import { zip, unzip } from "./zip"

// import { readdirSync, lstatSync, Stats } from 'fs'

// export function _zipFolder(fullPath: string, folder: string) {
//     const _dir = readdirSync(fullPath)

//     const func = (name: string, stats: Stats) => {
//         console.log(`${fullPath}/${name} is a directory ${stats.isDirectory()}`)
//     }

//     _dir.forEach(dir => func(dir, lstatSync(dir)))
// }

// export function zipFolder(folderName: string, source: string) {
//     const dirs = readdirSync(folderName)
//     const func = (dir: string) => {
//         if(dir !== '.DS_Store' && lstatSync(dir).isDirectory())
//             _zipFolder(folderName, dir)
//     }

//     dirs.forEach((dir) => 
//         func(dir)
//     )
// }


export type step = 'archive' | 'un-archive' | 'zip' | 'unzip' | 'encrypt' | 'decrypt'

export const encryptionSteps: step[] = ['archive', 'encrypt', 'zip']

// 'archive': encrypt

export const decryptionSteps: step[] = ['unzip', 'decrypt', 'un-archive']

// export function runEncryptionSteps(rootFolder: Folder): Promise<void> {
//     return new Promise<void>((resolve, reject) => {
//         const archive = new Archive(rootFolder)

//         archive.FoldersOrFiles()
//         .then(results => {
//             const config = JSON.parse(readFileSync('config.json', 'utf8')) as EncryptionConfig
//             const key = readFileSync('key')
//             const iv = readFileSync('iv')
            
//             writeFileSync(config.source, JSON.stringify(results), 'utf8')
//             encrypt(config, key, iv, config.source, config.target)
    
//             zip(config.target, config.zipFile)
//             resolve()
//         }).catch(error => {
//             reject(error)
//         })    
//     })

// }

// export function runDecryptionSteps(): Promise<void> {
//     unzip(config.source, config.target)
//     decrypt(config, key, iv, config.target, config.source, config.target)
    


// }

export const encryptAction: Action = (config: EncryptionConfig): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        resolve()
    })
}

export const decryptAction: Action = (config: EncryptionConfig): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        resolve()
    })
}

export const zipAction: Action = (config: ZipConfig): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        resolve()
    })
}

export const unzipAction: Action = (config: ZipConfig): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        resolve()
    })
}

export const archiveFolderAction: Action = (config: FolderConfig):  Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        resolve()
    })
}

export const extractFolderAction: Action = (config: ExtractFolderConfig): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        resolve()
    })
}
