import mon from './resources/mon.json';
import karen from './resources/karen.json';
import araken from './resources/araken.json';
import shan from './resources/shan.json';
import pali from './resources/pali.json';
import myanmar from './resources/myanmar.json';

export enum Resources {
    MYANMAR,
    ARAKEN,
    KAREN,
    MON,
    PALI,
    SHAN
}

let resources: Array<string> = new Array<string>(6);
resources[Resources.MON] = mon.value;
resources[Resources.KAREN] = karen.value;
resources[Resources.ARAKEN] = araken.value;
resources[Resources.SHAN] = shan.value;
resources[Resources.PALI] = pali.value;
resources[Resources.MYANMAR] = myanmar.value;

export function read(resource: Resources): string {
    return resources[resource];
}
