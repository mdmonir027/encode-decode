import alphabets from './alphabet';

const stringEncode = (string) => {
  if (!string) return '';
  const stringSplitForWord = string.toLowerCase().split(' ');
  let result = stringSplitForWord
    .map((word) => {
      return word
        .split('')
        .map((a) => alphabets.indexOf(a))
        .join('');
    })
    .join(' ');
  return result;
};

export default stringEncode;
