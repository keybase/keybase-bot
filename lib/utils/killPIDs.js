import {exec} from 'child_process'
import {promisify} from 'util'
const asyncExec = promisify(exec)

async function killPIDs(pids: number[]): Promise<void> {
  await asyncExec(`kill ${pids.join(' ')}`)
}

export default killPIDs
