const __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : {default: mod}
  }
Object.defineProperty(exports, '__esModule', {value: true})
const os_1 = __importDefault(require('os'))
const path_1 = __importDefault(require('path'))
const crypto_1 = __importDefault(require('crypto'))
function randomTempDir() {
  const name = crypto_1.default.randomBytes(16).toString('hex')
  return path_1.default.join(os_1.default.tmpdir(), 'keybase_bot_' + name)
}
exports.default = randomTempDir
//# sourceMappingURL=randomTempDir.js.map
