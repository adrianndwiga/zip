import { createReadStream, createWriteStream } from 'fs'
import { createGzip, createGunzip } from 'zlib'

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
