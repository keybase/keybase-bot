"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (input) {
    return JSON.stringify(input).replace(/[\u007F-\uFFFF]/g, function (chr) { return '\\u' + ('0000' + chr.charCodeAt(0).toString(16)).substr(-4); });
});
//# sourceMappingURL=safeJSONStringify.js.map