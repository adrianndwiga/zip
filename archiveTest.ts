import { Folder, File, Archive } from "./archive"
import { existsSync, unlinkSync, mkdirSync, writeFileSync, rmdirSync } from "fs"
import { expect } from "chai"

describe('archive - compress', () => {
    const content = {
        someContent: 'some content'
    }
    const rootFolder = './store'
    const foldersOrFiles: (Folder | File)[] = [
        {
            name: 'store',
            fullPath: rootFolder,
            type: 'Folder'
        },
        {
            name: 'store.json',
            fullPath: './store/store.json',
            content: JSON.stringify(content),
            type: 'File'
        }
    ]

    beforeEach(() => {
        for(const folderOrFile of foldersOrFiles)
            if (existsSync(folderOrFile.fullPath))
                if(folderOrFile.type === 'Folder')
                    rmdirSync(folderOrFile.fullPath, { recursive: true })

        for (const folderOrFile of foldersOrFiles)
            if (folderOrFile.type === 'Folder')
                mkdirSync(folderOrFile.fullPath)
            else {
                const file: File = folderOrFile as File
                writeFileSync(file.fullPath, file.content, 'utf8')
            }
    })

    it('should archive contents of root folder to a js object array', async () => {
        const files = await new Archive(foldersOrFiles.find(f => f.fullPath === rootFolder) as Folder).FoldersOrFiles()
        expect(files).to.be.eql([foldersOrFiles[1]])
    })
})