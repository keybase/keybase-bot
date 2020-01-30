"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var child_process_1 = require("child_process");
var readline_1 = __importDefault(require("readline"));
var path_1 = __importDefault(require("path"));
var keybaseBinaryName_1 = __importDefault(require("./keybaseBinaryName"));
var keybaseExec = function (workingDir, homeDir, args, options) {
    if (options === void 0) { options = { stdinBuffer: undefined, onStdOut: undefined, timeout: undefined }; }
    var runArgs = __spreadArrays(args);
    if (homeDir) {
        runArgs.unshift('--home', homeDir);
    }
    var keybasePath = path_1.default.join(workingDir, keybaseBinaryName_1.default);
    var child = child_process_1.spawn(keybasePath, runArgs);
    var stdOutBuffer = [];
    var stdErrBuffer = [];
    if (options.stdinBuffer) {
        child.stdin.write(options.stdinBuffer);
    }
    child.stdin.end();
    var lineReaderStdout = readline_1.default.createInterface({ input: child.stdout });
    // Use readline interface to parse each line (\n separated) when provided
    // with onStdOut callback
    if (options.onStdOut) {
        lineReaderStdout.on('line', options.onStdOut);
    }
    else {
        child.stdout.on('data', function (chunk) {
            stdOutBuffer.push(chunk);
        });
    }
    // Capture STDERR and use as error message if needed
    child.stderr.on('data', function (chunk) {
        stdErrBuffer.push(chunk);
    });
    var done = false;
    if (options.timeout) {
        setTimeout(function () {
            if (!done) {
                child.kill();
            }
        }, options.timeout);
    }
    return new Promise(function (resolve, reject) {
        child.on('close', function (code) {
            done = true;
            var finalStdOut = null;
            // Pass back
            if (code) {
                var errorMessage = Buffer.concat(stdErrBuffer).toString('utf8');
                return reject(new Error(errorMessage));
            }
            else {
                var stdout = Buffer.concat(stdOutBuffer).toString('utf8');
                try {
                    finalStdOut = options.json ? JSON.parse(stdout) : stdout;
                }
                catch (e) {
                    return reject(e);
                }
            }
            return resolve(finalStdOut);
        });
    });
};
exports.default = keybaseExec;
//# sourceMappingURL=keybaseExec.js.map