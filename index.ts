import { readdirSync, lstatSync, Stats } from 'fs'

export function _zipFolder(fullPath: string, folder: string) {
    const _dir = readdirSync(fullPath)

    const func = (name: string, stats: Stats) => {
        console.log(`${fullPath}/${name} is a directory ${stats.isDirectory()}`)
    }

    _dir.forEach(dir => func(dir, lstatSync(dir)))
}

export function zipFolder(folderName: string, source: string) {
    const dirs = readdirSync(folderName)
    const func = (dir: string) => {
        if(dir !== '.DS_Store' && lstatSync(dir).isDirectory())
            _zipFolder(folderName, dir)
    }

    dirs.forEach((dir) => 
        func(dir)
    )
}
