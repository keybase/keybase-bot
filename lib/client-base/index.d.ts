/// <reference types="node" />
import { ChildProcess } from 'child_process';
import { InitOptions } from '../utils/options';
import { API_TYPES } from '../constants';
export declare type ApiCommandArg = {
    apiName: API_TYPES;
    method: string;
    options?: Object;
    timeout?: number;
};
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
    spawnedProcesses: ChildProcess[];
    _workingDir: string;
    constructor(workingDir: string);
    _init(homeDir: void | string, options?: InitOptions): Promise<void>;
    _deinit(): Promise<void>;
    _runApiCommand(arg: ApiCommandArg): Promise<any>;
    _guardInitialized(): Promise<void>;
    _pathToKeybaseBinary(): string;
}
export default ClientBase;
