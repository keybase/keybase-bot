"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var os_1 = __importDefault(require("os"));
var path_1 = __importDefault(require("path"));
var crypto_1 = __importDefault(require("crypto"));
function randomTempDir() {
    var name = crypto_1.default.randomBytes(16).toString('hex');
    return path_1.default.join(os_1.default.tmpdir(), "keybase_bot_" + name);
}
exports.default = randomTempDir;
//# sourceMappingURL=randomTempDir.js.map