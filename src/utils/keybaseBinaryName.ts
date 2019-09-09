import {platform} from 'os'

const binaryName = platform() === 'win32' ? 'keybase.exe' : 'keybase'

export default binaryName
