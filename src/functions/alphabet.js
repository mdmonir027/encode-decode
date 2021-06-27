const alphabets = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

const newAlphabets = [];

const difference = 41;

for (let i = 0; i < alphabets.length; i++) {
  newAlphabets[difference + i] = alphabets[i];
}

export default newAlphabets;
