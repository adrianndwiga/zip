import { zip, unzip } from "./zip"
import { existsSync, unlinkSync, writeFileSync, readFileSync } from "fs"
import { expect } from "chai"

const csvfile = {
    name: 'csvFile.csv',
    content: 'name, value\na file, a value',
    zipFile: 'csvFile.csv.gz',
    unzippedFile: 'unzipped_csv_file.csv'
}

describe('zip / unzip test', () => {
    beforeEach(() => {
        if(existsSync(csvfile.name))
            unlinkSync(csvfile.name)
        
        if(existsSync(csvfile.zipFile))
            unlinkSync(csvfile.zipFile)
        
        if(existsSync(csvfile.unzippedFile))
            unlinkSync(csvfile.unzippedFile)

        writeFileSync(csvfile.name, csvfile.content)
    })

    it('zipped file should be the same as the unzipped file', () => {
        zip(csvfile.name, csvfile.zipFile)
        unzip(csvfile.zipFile, csvfile.unzippedFile)

        expect(readFileSync(csvfile.unzippedFile, 'utf8')).to.be(csvfile.content)
    })
})

