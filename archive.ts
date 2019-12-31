import { readdir, lstatSync, readFileSync } from "fs"
import { basename } from "path"

export interface BaseFileOrFolder {
    type: 'Folder' | 'File'
}

export interface Folder extends BaseFileOrFolder {
    name: string
    fullPath: string
}

export interface File extends BaseFileOrFolder {
    name: string
    fullPath: string
    content: string
}

export class Archive {
    private folderOrFiles: (File | Folder) [] = []

    public async FoldersOrFiles():  Promise<(File | Folder) []> {
        await this.load(this.rootFolder)
        return this.folderOrFiles
    }

    private async load(folder: Folder): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            readdir(folder.fullPath, async (err: NodeJS.ErrnoException, files: string[]) => {
                if (files && files.length) {

                    for(const file of files){
                        const fullFileOrFolderPath = `${folder.fullPath}/${file}`
                        if (lstatSync(fullFileOrFolderPath).isFile()) {
                            this.folderOrFiles.push({
                                name: basename(fullFileOrFolderPath),
                                content: readFileSync(fullFileOrFolderPath, "utf8"),
                                fullPath: fullFileOrFolderPath,
                                type: 'File'
                            })
                        } else {
                            const aFolder: Folder = {
                                name: basename(fullFileOrFolderPath),
                                fullPath: fullFileOrFolderPath,
                                type: 'Folder'
                            }
                            this.folderOrFiles.push(aFolder)
                            await this.load(aFolder)
                        }                        
                    }

                    resolve()
                } else {
                    resolve()
                }
            })
        })
    }

    constructor(private readonly rootFolder: Folder) {}
}

