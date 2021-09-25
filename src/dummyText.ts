import {createDummyText} from './dummyTextEngine';
import {segment} from './syllabusSegmentation';
import {read, Resources} from "./resources";

function customGenerate(raw: string, count: number): string {
    raw = raw.replace("[။၊ \\s]", "");
    raw = segment(raw, ",");
    const letter: string[] = raw.split(",");
    return createDummyText(letter, count);
}

function generate(resource: Resources, count: number): string {
    return customGenerate(read(resource), count);
}

export {Resources, customGenerate, generate}
