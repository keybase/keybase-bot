/// <reference types="node" />
import { ChildProcess } from 'child_process';
import { API_TYPES } from '../constants';
import { InitOptions } from '../utils/options';
import Bot from '../index';
export interface ApiCommandArg {
    apiName: API_TYPES;
    method: string;
    options?: object;
    timeout?: number;
}
/**
 * A Client base.
 * @ignore
 */
declare class ClientBase {
    initialized: boolean;
    username: void | string;
    devicename: void | string;
    homeDir: void | string;
    verbose: boolean;
    protected _spawnedProcesses: ChildProcess[];
    private _workingDir;
    private _initializedWithOptions;
    protected _bot: Bot;
    constructor(bot: Bot, workingDir: string);
    _init(homeDir: void | string, options?: InitOptions): Promise<void>;
    _deinit(): Promise<void>;
    protected _runApiCommand(arg: ApiCommandArg): Promise<any>;
    protected _guardInitialized(): Promise<void>;
    protected _pathToKeybaseBinary(): string;
}
export default ClientBase;
