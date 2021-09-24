import { createDummyText } from './dummyTextEngine';
import {segment} from './syllabusSegmentation';

export function generate(raw: string, count: number): string{
    raw = raw.replace("[။၊ \\s]","");
    raw = segment(raw, ",");
    const letter: string[] = raw.split(",");
    return createDummyText(letter, count);
}
