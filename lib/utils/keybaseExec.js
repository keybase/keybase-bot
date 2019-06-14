const __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : {default: mod}
  }
Object.defineProperty(exports, '__esModule', {value: true})
const child_process_1 = require('child_process')
const readline_1 = __importDefault(require('readline'))
const path_1 = __importDefault(require('path'))
const keybaseExec = function(workingDir, homeDir, args, options) {
  if (options === void 0) {
    options = {stdinBuffer: undefined, onStdOut: undefined, timeout: undefined}
  }
  const runArgs = args.slice()
  if (homeDir) {
    runArgs.unshift('--home', homeDir)
  }
  const keybasePath = path_1.default.join(workingDir, 'keybase')
  const child = child_process_1.spawn(keybasePath, runArgs)
  const stdOutBuffer = []
  const stdErrBuffer = []
  if (options.stdinBuffer) {
    child.stdin.write(options.stdinBuffer)
  }
  child.stdin.end()
  const lineReaderStdout = readline_1.default.createInterface({input: child.stdout})
  // Use readline interface to parse each line (\n separated) when provided
  // with onStdOut callback
  if (options.onStdOut) {
    lineReaderStdout.on('line', options.onStdOut)
  } else {
    child.stdout.on('data', function(chunk) {
      stdOutBuffer.push(chunk)
    })
  }
  // Capture STDERR and use as error message if needed
  child.stderr.on('data', function(chunk) {
    stdErrBuffer.push(chunk)
  })
  let done = false
  if (options.timeout) {
    setTimeout(function() {
      if (!done) {
        child.kill()
      }
    }, options.timeout)
  }
  return new Promise(function(resolve, reject) {
    child.on('close', function(code) {
      done = true
      let finalStdOut = null
      // Pass back
      if (code) {
        const errorMessage = Buffer.concat(stdErrBuffer).toString('utf8')
        reject(new Error(errorMessage))
      } else {
        const stdout = Buffer.concat(stdOutBuffer).toString('utf8')
        try {
          finalStdOut = options.json ? JSON.parse(stdout) : stdout
        } catch (e) {
          reject(e)
        }
      }
      resolve(finalStdOut)
    })
  })
}
exports.default = keybaseExec
//# sourceMappingURL=keybaseExec.js.map
