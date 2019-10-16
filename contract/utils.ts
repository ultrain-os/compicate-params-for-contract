import { intToString } from "ultrain-ts-lib/src/utils";
export enum ArrayType {
    AT_INT = 0,
    AT_STRING = 1
}
export function intArrayToString(arr: u64[]): string {
    if (arr.length == 0) return "[]";

    let v0 = arr[0];
    let json = '[';
    for (let i = 0; i < arr.length; i++) {
        json += intToString(arr[i]);
        if (i != arr.length - 1) { json += ","; }
    }
    json += ']';
    return json;
}

export function strArrayToString(arr: string[]): string {
    if (arr.length == 0) return "[]";

    let v0 = arr[0];
    let json = '[';
    for (let i = 0; i < arr.length; i++) {
        json += '"' + arr[i] + '"';
        if (i != arr.length - 1) { json += ","; }
    }
    json += ']';
    return json;
}

export function jsonKey(k: string): string {
    return '"' + k + '":';
}

export function jsonValue<T>(v: T): string {
    let vs = "";
    if (isInteger(v)) {
        vs += intToString(v);
    } else if (isString(v)) {
        vs += '"' + v + '"';
    } else {
        // ??
    }

    return vs;
}
