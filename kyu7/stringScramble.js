function scramble(str, arr) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr[arr[i]] = str[i]
  }
  return newArr.join('')
};
console.log(scramble('abcd', [0,3,1,2]))
