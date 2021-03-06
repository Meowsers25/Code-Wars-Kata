// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.
// You got an array with your colleges' points. Now calculate the average to your points!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your classes points. For calculating the average point you may add your point to the given array!

function betterThanAverage(classPoints, yourPoints) {
  let total = 0
  for (let i = 0; i < classPoints.length; i++) {
    total += classPoints[i]
  }
  
  let average = total / classPoints.length
  
  if (yourPoints > average) {
    return true
  } else {
    return false
  }
}

console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9))