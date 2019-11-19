"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_snakecase_1 = __importDefault(require("lodash.snakecase"));
var lodash_camelcase_1 = __importDefault(require("lodash.camelcase"));
var lodash_kebabcase_1 = __importDefault(require("lodash.kebabcase"));
/**
  Takes a Keybase API input JavaScript object and recursively formats it into snake_case or kebab-case instead of camelCase for the service.
  * @ignore
  * @param obj - The object to be formatted.
  * @param apiType - The type of api the the input is being served to. Currently Keybase has chat, team, and wallet apis.
  * @returns - The new, formatted object.
  * @example
  * const inputOptions = formatAPIObject({unreadOnly: true})
  * console.log(inputOptions) // {unread_only: true}
 */
function formatAPIObjectInput(obj, apiType) {
    if (obj === null || obj === undefined || typeof obj !== 'object') {
        return obj;
    }
    else if (Array.isArray(obj)) {
        return obj.map(function (item) { return formatAPIObjectInput(item, apiType); });
    }
    else {
        return Object.keys(obj).reduce(function (newObj, key) {
            var _a, _b;
            // TODO: hopefully we standardize how the Keybase API handles input keys
            var formattedKey;
            if (apiType === 'wallet') {
                formattedKey = lodash_kebabcase_1.default(key);
            }
            else {
                formattedKey = lodash_snakecase_1.default(key);
            }
            if (typeof obj[key] === 'object') {
                return __assign(__assign({}, newObj), (_a = {}, _a[formattedKey] = formatAPIObjectInput(obj[key], apiType), _a));
            }
            return __assign(__assign({}, newObj), (_b = {}, _b[formattedKey] = obj[key], _b));
        }, {});
    }
}
exports.formatAPIObjectInput = formatAPIObjectInput;
/*
 * An internal blacklist of parent levels at which formatAPIObjectOutput transformations
 * shouldn't be performed. A `null` value matches everything.
 */
var transformsBlacklist = {
    team: {},
    wallet: {},
    chat: {
        read: [['messages', null, 'msg', 'reactions', 'reactions', null]],
    },
};
/*
 * Matches a context against the list of blacklisted parent levels.
 * @ignore
 * @param context - The context to match.
 * @returns - Whether the context is blacklisted from being formatted.
 */
function matchBlacklist(context) {
    if (!context ||
        !transformsBlacklist[context.apiName] ||
        !transformsBlacklist[context.apiName][context.method]) {
        return false;
    }
    var parentLength = context.parent ? context.parent.length : 0;
    for (var _i = 0, _a = transformsBlacklist[context.apiName][context.method]; _i < _a.length; _i++) {
        var matcher = _a[_i];
        if (matcher.length !== parentLength) {
            continue;
        }
        // Iterate over the items of the matcher
        var mismatch = false;
        for (var _b = 0, _c = matcher.entries(); _b < _c.length; _b++) {
            var _d = _c[_b], matcherIndex = _d[0], desiredValue = _d[1];
            if (desiredValue === null) {
                continue;
            }
            if (typeof context.parent === 'object' && context.parent[matcherIndex] !== desiredValue) {
                mismatch = true;
                break;
            }
        }
        if (!mismatch) {
            return true;
        }
    }
    return false;
}
/*
 * Appends a new key to the parents array in the formatting context.
 * @ignore
 * @param context - The context to copy and modify.
 * @param key - The key to apprent to the parent array.
 * @returns - A new context.
 */
function buildContext(context, key) {
    if (!context) {
        return context;
    }
    var copiedContext = __assign({}, context);
    if (!copiedContext.parent) {
        copiedContext.parent = [key];
    }
    else {
        copiedContext.parent = copiedContext.parent.slice();
        copiedContext.parent.push(key);
    }
    return copiedContext;
}
/**
  Takes a Keybase output object and formats it in a more digestable JavaScript style by using camelCase instead of snake_case.
  * @ignore
  * @param obj - The object to be formatted.
  * @param context - An optional context with information about the called method required to perform blacklist lookups.
  * @returns - The new, formatted object.
  * @example
  * const outputRes = formatAPIObject({unread_only: true})
  * console.log(outputRes) // {unreadOnly: true}
 */
function formatAPIObjectOutput(obj, context) {
    if (obj == null || typeof obj !== 'object') {
        return obj;
    }
    else if (Array.isArray(obj)) {
        return obj.map(function (item, i) { return formatAPIObjectOutput(item, buildContext(context, i)); });
    }
    else {
        return Object.keys(obj).reduce(function (newObj, key) {
            var _a, _b;
            var formattedKey = matchBlacklist(context) ? key : lodash_camelcase_1.default(key);
            if (typeof obj[key] === 'object') {
                return __assign(__assign({}, newObj), (_a = {}, _a[formattedKey] = formatAPIObjectOutput(obj[key], buildContext(context, key)), _a));
            }
            return __assign(__assign({}, newObj), (_b = {}, _b[formattedKey] = obj[key], _b));
        }, {});
    }
}
exports.formatAPIObjectOutput = formatAPIObjectOutput;
//# sourceMappingURL=formatAPIObject.js.map