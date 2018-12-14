import {exec} from 'child_process'
import {promisify} from 'util'

export async function killGrep(substr: string): Promise<void> {
  const asyncExec = promisify(exec)
  const awkRes = await asyncExec(`ps ax | grep -v grep | grep -i "${substr}" | awk '{print $1}'`)
  if (awkRes.stdout.length) {
    await asyncExec(`kill ${awkRes.stdout.replace(/\n/g, ' ')}`)
  }
}
