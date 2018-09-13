function lovefunc(flower1, flower2){
  if(flower1 % 2 === 0 && flower2 % 2 != 0) {
    console.log(true)
    return true
  } else if(flower1 % 2 != 0 && flower2 % 2 === 0) {
    console.log(true)
    return true
  } else {
    console.log(false)
    return false
  }
}
lovefunc(457, 556)