/// <reference types="node" />
export declare type ExecOptions = {
    stdinBuffer?: Buffer | string;
    onStdOut?: (line: string) => void;
    json?: boolean;
    timeout?: number;
};
declare const keybaseExec: (workingDir: string, homeDir: string | void, args: string[], options?: ExecOptions) => Promise<any>;
export default keybaseExec;
