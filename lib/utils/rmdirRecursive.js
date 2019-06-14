const __awaiter =
  (this && this.__awaiter) ||
  function(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value))
        } catch (e) {
          reject(e)
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value))
        } catch (e) {
          reject(e)
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : new P(function(resolve) {
              resolve(result.value)
            }).then(fulfilled, rejected)
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next())
    })
  }
const __generator =
  (this && this.__generator) ||
  function(thisArg, body) {
    let _ = {
        label: 0,
        sent: function() {
          if (t[0] & 1) throw t[1]
          return t[1]
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g
    return (
      (g = {next: verb(0), throw: verb(1), return: verb(2)}),
      typeof Symbol === 'function' &&
        (g[Symbol.iterator] = function() {
          return this
        }),
      g
    )
    function verb(n) {
      return function(v) {
        return step([n, v])
      }
    }
    function step(op) {
      if (f) throw new TypeError('Generator is already executing.')
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y['return']
                  : op[0]
                  ? y['throw'] || ((t = y['return']) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t
          if (((y = 0), t)) op = [op[0] & 2, t.value]
          switch (op[0]) {
            case 0:
            case 1:
              t = op
              break
            case 4:
              _.label++
              return {value: op[1], done: false}
            case 5:
              _.label++
              y = op[1]
              op = [0]
              continue
            case 7:
              op = _.ops.pop()
              _.trys.pop()
              continue
            default:
              if (!((t = _.trys), (t = t.length > 0 && t[t.length - 1])) && (op[0] === 6 || op[0] === 2)) {
                _ = 0
                continue
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1]
                break
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1]
                t = op
                break
              }
              if (t && _.label < t[2]) {
                _.label = t[2]
                _.ops.push(op)
                break
              }
              if (t[2]) _.ops.pop()
              _.trys.pop()
              continue
          }
          op = body.call(thisArg, _)
        } catch (e) {
          op = [6, e]
          y = 0
        } finally {
          f = t = 0
        }
      if (op[0] & 5) throw op[1]
      return {value: op[0] ? op[1] : void 0, done: true}
    }
  }
const __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : {default: mod}
  }
Object.defineProperty(exports, '__esModule', {value: true})
const fs_1 = __importDefault(require('fs'))
const path_1 = __importDefault(require('path'))
const util_1 = require('util')
function rmdirRecursive(dirName) {
  return __awaiter(this, void 0, void 0, function() {
    let fsLstat, fsUnlink, fsRmdir, fsReaddir, dirStat, _i, _a, entry, entryPath, stat
    return __generator(this, function(_b) {
      switch (_b.label) {
        case 0:
          fsLstat = util_1.promisify(fs_1.default.lstat)
          fsUnlink = util_1.promisify(fs_1.default.unlink)
          fsRmdir = util_1.promisify(fs_1.default.rmdir)
          fsReaddir = util_1.promisify(fs_1.default.readdir)
          return [4 /*yield*/, fsLstat(dirName)]
        case 1:
          dirStat = _b.sent()
          if (!dirStat) return [3 /*break*/, 11]
          _i = 0
          return [4 /*yield*/, fsReaddir(dirName)]
        case 2:
          _a = _b.sent()
          _b.label = 3
        case 3:
          if (!(_i < _a.length)) return [3 /*break*/, 9]
          entry = _a[_i]
          entryPath = path_1.default.join(dirName, entry)
          return [4 /*yield*/, fsLstat(entryPath)]
        case 4:
          stat = _b.sent()
          if (!stat.isDirectory()) return [3 /*break*/, 6]
          return [4 /*yield*/, rmdirRecursive(entryPath)]
        case 5:
          _b.sent()
          return [3 /*break*/, 8]
        case 6:
          return [4 /*yield*/, fsUnlink(entryPath)]
        case 7:
          _b.sent()
          _b.label = 8
        case 8:
          _i++
          return [3 /*break*/, 3]
        case 9:
          return [4 /*yield*/, fsRmdir(dirName)]
        case 10:
          _b.sent()
          _b.label = 11
        case 11:
          return [2 /*return*/]
      }
    })
  })
}
exports.default = rmdirRecursive
//# sourceMappingURL=rmdirRecursive.js.map
