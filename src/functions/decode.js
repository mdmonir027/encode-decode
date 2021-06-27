import alphabets from './alphabet';
const stringDecode = (encodedString) => {
  if (!encodedString) return '';
  encodedString.split('').forEach((numberItem) => {
    if (!numberItem >= 41 && !numberItem <= 41 + 26) {
      return 'Undefined Data';
    }
  });

  const numberArray = encodedString.split(' ');
  const result = numberArray.map((number) => {
    let arr2 = number.split('');
    const joinedArray = [];
    arr2.forEach((item, index) => {
      if (index % 2 === 0) {
        const itemToPush = item + arr2[index + 1];
        joinedArray.push(itemToPush);
      }
    });
    return joinedArray.map((no) => alphabets[no]).join('');
  });
  return result.join(' ');
};

export default stringDecode;
