import {readFileSync} from 'fs';

export enum Resources {
    MYANMAR = 'myanmar',
    PALI = 'pali',
    SHAN = 'shan',
    KAREN = 'karen',
    MON = 'mon',
    ARAKEN = ' araken',
}

export function read(resource: Resources): string {
    const file = readFileSync(resource, 'utf-8');
    return file;
}
