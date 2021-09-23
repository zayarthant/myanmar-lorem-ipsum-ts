export function createDummyText(latter: string[], count: number): string {
    let dummyText: string = dumParagraph(latter).concat("\n\n");
    while (count != 0) {
        dummyText.concat(dumParagraph(latter)).concat("\n\n");
        count--;
    }
    return dummyText;
}

function dumParagraph(latter: string[]): string {
    let paragraph: string = dumSentence(latter);
    let i = 0;
    const length = randomNumber(6, 9);
    while (i < length) {
        paragraph.concat(" ").concat(dumSentence(latter));
        i++;
    }
    return paragraph;
}


function dumSentence(latter: string[]): string {
    let scentent = dumWord(latter);
    let i = 0;
    const length = randomNumber(2, 9);
    while (i < length) {
        scentent.concat(" ").concat(dumWord(latter));
        i++;
    }
    scentent.concat("။");
    return scentent;
}


function dumWord(latter: string[]): string {
    let word = "";
    let i = 0;
    const length = randomNumber(2, 6);
    while (i < length) {
        word.concat(randomLetter(latter));
        i++;
    }
    return word;
}


function randomLetter(letter: string[]): string {
    let index: number = randomNumber(0, letter.length);
    return letter[index];
}

function randomNumber(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}
