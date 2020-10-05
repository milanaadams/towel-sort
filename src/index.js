
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined || matrix.length === 0){
    return [];
  }
  let newArr = [];
  for (let i = 0; i < matrix.length; i++){
    if (typeof matrix[i] === 'number'){
        newArr.push(matrix[i]);
    } else if (i === 0 || i % 2 === 0){
        for (let j = 0; j < matrix[i].length; j++){
          newArr.push(matrix[i][j]);
        } 
      } else {
        for (let k = matrix[i].length - 1; k >= 0; k--){
          newArr.push(matrix[i][k]);
        }
    }
  }
  return newArr;
}
