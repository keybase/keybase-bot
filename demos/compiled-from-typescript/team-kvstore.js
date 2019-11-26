#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = __importDefault(require("../../lib/index.js"));
class Runner {
    constructor() {
        this.bot = new index_js_1.default();
        this.msgPrefix = '!storage';
        this.paperKey = process.env.KB_PAPERKEY;
        this.teamname = process.env.KB_TEAMNAME;
        this.username = process.env.KB_USERNAME;
        this.channel = { name: this.teamname, membersType: 'team', topicName: process.env.KB_CHANNEL || 'general' };
    }
    async init() {
        return this.bot.init(this.username, this.paperKey);
    }
    listenForCommands() {
        const onMessage = async (message) => {
            const type = message.content ? message.content.type : null;
            if (!type) {
                console.info('null type');
                return;
            }
            switch (type) {
                case 'text':
                    this.handleTextCommand(message);
                    return;
                default:
                    console.info(`unknown message type ${type}`);
                    return;
            }
        };
        this.bot.chat.watchChannelForNewMessages(this.channel, onMessage);
    }
    async handleTextCommand(message) {
        const body = message.content ? (message.content.text ? message.content.text.body : null) : null;
        if (!body) {
            console.info(`null body`);
            return;
        }
        console.info(`Request: ${body} from ${message.sender.username}`);
        const words = body.split(' ');
        const [prefix, verb, namespace] = words;
        if (prefix !== this.msgPrefix) {
            return;
        }
        switch (verb) {
            case 'help':
                this.handleHelp(body);
                return;
            case 'list':
                namespace ? this.handleListEntryKeys(body) : this.handleListNamespaces(body);
                return;
            case 'put':
                this.handlePut(body);
                return;
            case 'get':
                this.handleGet(body);
                return;
            case 'delete':
                this.handleDelete(body);
                return;
            case 'shutdown':
                this.handleShutdown(message);
                return;
            default:
                throw new Error(`Unknown command ${body}.`);
        }
    }
    handleHelp(body) {
        const helpMessage = 'Available commands:' +
            '\n`!storage put <namespace> <key> <value> (<revision>)`' +
            '\n`!storage get <namespace> <key>`' +
            '\n`!storage delete <namespace> <key> (<revision>)`' +
            '\n`!storage list`  // list namespaces' +
            '\n`!storage list <namespace>`  // list entries in namespace';
        return this.sendMessage(helpMessage);
    }
    async handleListNamespaces(body) {
        // !storage list team
        try {
            const res = await this.bot.kvstore.listNamespaces(this.teamname);
            const message = res.namespaces.join(', ');
            await this.sendMessage(message || 'There are no namespaces.');
        }
        catch (err) {
            await this.sendMessage(`${err}`);
        }
    }
    async handleListEntryKeys(body) {
        // !storage list team namespace
        try {
            const [, , namespace] = body.split(' ');
            const res = await this.bot.kvstore.listEntryKeys(this.teamname, namespace);
            const message = res.entryKeys.map(row => row.entryKey).join(',');
            await this.sendMessage(message || 'There are no entryKeys in this namespace.');
        }
        catch (err) {
            await this.sendMessage(`${err}`);
        }
    }
    async handleGet(body) {
        // !storage get namespace key
        try {
            const [, , namespace, key] = body.split(' ');
            const res = await this.bot.kvstore.get(this.teamname, namespace, key);
            const message = this.bot.kvstore.isPresent(res)
                ? `${res.namespace}/${res.entryKey}: ${res.entryValue} at revision ${res.revision}.`
                : this.bot.kvstore.isDeleted(res)
                    ? `${res.namespace}/${res.entryKey} was deleted in revision ${res.revision}.`
                    : `${res.namespace}/${res.entryKey} does not exist.`;
            await this.sendMessage(message);
        }
        catch (err) {
            await this.sendMessage(`${err}`);
        }
    }
    async handlePut(body) {
        // !storage put namespace key value [revision]
        try {
            const [, , namespace, key, value, rev] = body.split(' ');
            const revision = rev ? parseInt(rev) : null;
            const res = await this.bot.kvstore.put(this.teamname, namespace, key, value, revision);
            const message = `${res.entryKey} is now at revision ${res.revision}.`;
            await this.sendMessage(message);
        }
        catch (err) {
            await this.sendMessage(`${err}`);
        }
    }
    async handleDelete(body) {
        // !storage delete namespace key [revision]
        try {
            const [, , namespace, key, rev] = body.split(' ');
            const revision = rev ? parseInt(rev) : null;
            const res = await this.bot.kvstore.delete(this.teamname, namespace, key, revision);
            const message = `${res.entryKey} has been deleted, new revision ${res.revision}.`;
            await this.sendMessage(message);
        }
        catch (err) {
            await this.sendMessage(`${err}`);
        }
    }
    async handleShutdown(message) {
        // !storage shutdown
        const sender = message.sender.username;
        if (!sender) {
            throw new Error('null username');
        }
        try {
            await this.sendMessage(`Bot shutting down by ${sender}'s command.`);
            await this.bot.deinit();
            console.info('Shutting down...');
            process.exit(0);
        }
        catch (err) {
            await this.sendMessage(`${err}`);
            return;
        }
    }
    async sendMessage(body) {
        return this.bot.chat.send(this.channel, { body });
    }
}
async function main() {
    const runner = new Runner();
    console.info('Created runner');
    await runner.init();
    console.info('Initialized runner');
    runner.listenForCommands();
    console.info('Listening');
}
main();
