"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function timeout(time) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve();
        }, time);
    });
}
exports.default = timeout;
//# sourceMappingURL=timeout.js.map