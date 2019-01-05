// @flow
import fs from 'fs'
import path from 'path'
import {promisify} from 'util'

async function rmdirRecursive(dirName: string): Promise<void> {
  const fsLstat = promisify(fs.lstat)
  const fsUnlink = promisify(fs.unlink)
  const fsRmdir = promisify(fs.rmdir)
  const fsReaddir = promisify(fs.readdir)
  const dirStat = await fsLstat(dirName)
  if (dirStat) {
    for (const entry of await fsReaddir(dirName)) {
      const entryPath = path.join(dirName, entry)
      const stat = await fsLstat(entryPath)
      if (stat.isDirectory()) {
        await rmdirRecursive(entryPath)
      } else {
        await fsUnlink(entryPath)
      }
    }
    await fsRmdir(dirName)
  }
}

export default rmdirRecursive
