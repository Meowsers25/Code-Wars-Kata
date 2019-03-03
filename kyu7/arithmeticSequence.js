var nthterm = function(first, n, c){
  let workingArr = [first]
  for (let i = 0; i < n; i++) {
    let sequence = first += c
    workingArr.push(sequence)
  }
  return workingArr[n]
}
console.log(nthterm(1, 2, 3))

var nthterm = function(first, n, c){
  let workingArr = [first]
  for (let i = 0; i < n; i++) {
    first += c
    workingArr.push(first)
  }
  return workingArr[n]
}
console.log(nthterm(-50, 10, 20))

var nthterm = function(first, n, c){
  return first + n * c
}
console.log(nthterm(-50, 10, 20))