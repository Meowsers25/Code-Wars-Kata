// Given a number n, return the number of positive odd numbers below n, EASY!

function oddCount(n){
  let num = 0
  for (let i = 0; i < n; i++){
    if (i % 2 != 0){
      num += 1
    }
  }
  console.log(num)
}
oddCount(15023)