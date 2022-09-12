import { createReadStream, createWriteStream, ReadStream, WriteStream } from 'fs'
import { createGzip, createGunzip } from 'zlib'

export function zip (source: string, target: string) {
    const gzip = createGzip();
    const inp = createReadStream(source)
    const out = createWriteStream(target)
    return inp.pipe(gzip).pipe(out)    
}

export function zipStream (inp: ReadStream, out: WriteStream) {
    const gzip = createGzip();
    inp.pipe(gzip).pipe(out)    
}

export function unzip(source: string, target: string) {
    const inp = createReadStream(source)
    const out = createWriteStream(target)
    const unzip = createGunzip()
    return inp.pipe(unzip).pipe(out)
}

export function unzipStream(inp: ReadStream, out: WriteStream) {
    const unzip = createGunzip()
    inp.pipe(unzip).pipe(out)
}
