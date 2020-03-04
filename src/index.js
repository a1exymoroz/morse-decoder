const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    const numbersLength = 10;
    const morseLength = 2;
    const dash = {
        key: '11',
        text: '-'
    };
    const dots = {
        key: '10',
        text: '.'
    };
    const regExp = new RegExp(`.{1,${numbersLength}}`, 'g');
    const morseRegExp = new RegExp(`.{1,${morseLength}}`, 'g');
    const splitExpr = expr.match(regExp);
    const space = '**********';
    return splitExpr.reduce((acu, cur) => {
        if ( space === cur) {
            acu += ' ';
        } else {
            const arrayMorse = cur.match(morseRegExp).map(
                result => {
                    let str = '';
                    switch (result) {
                        case dash.key:
                            str += dash.text;
                            break;
                        case dots.key:
                            str += dots.text;
                            break;
                    }
                    return str;
                }
            );
            acu += MORSE_TABLE[arrayMorse.join('')];
        }
        return acu;
    }, '');
}

module.exports = {
    decode
}