// Given a number n, return the number of positive odd numbers below n, EASY!
// function oddCount(n){
//   let nums = []
//   for(let i = 0; i < n; i++){
//     nums.push(i)
//   }
//   //console.log(nums)
//   let total = 0
//   nums.forEach(function(num){
//     if (num % 2 != 0){
//       total += 1
//       //console.log(num)
//     }
//   })
//   console.log(total)
// }
// oddCount(10)

// function addCount(n){
//   let total = 0
//   for (let i = 0; i < n; i++){
//     if (i % 2 != 0){
//       total += 1
//     }
//   }
//   //return total
//   console.log(total)
// }
// addCount(10)

//this is the one that worked on codewars
function addCount(n){
  if(n % 2 != 0){
    console.log(Math.ceil((n / 2) - 1))
  } else {
    console.log(Math.ceil((n - 1) / 2))
  }
}
addCount(15)
addCount(15023)