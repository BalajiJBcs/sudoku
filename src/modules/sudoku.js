
/**
* Returns row of puzzle to nth value
*
* @param { matrix } puzzle input [row][column]
* @param { number } index of the row to be returned
*/
function getRow(puzzle, rowIdx) {
    return puzzle[rowIdx];
}

/**
* Returns column of puzzle to nth value
*
* @param { matrix } puzzle input [row][column]
* @param { number } index of the column to be returned
*/
function getColumn(puzzle, colIdx) {
  let result = [];
  for(let i = 0 ; i < puzzle.length; i++) {
    result.push(puzzle[i][colIdx]);
  }
  return result;
}

/**
* Returns section of puzzle to x and yth value
*
* @param { matrix } puzzle input [row][column]
* @param { number } x co-ordinate
* @param { number } y co-ordinate
*/
function getSection(puzzle, x, y) { 
   let result = [];
   for(let i = y * 3; i< (y * 3) + 3; i++) {
     let arr = puzzle[i];
     let val = x * 3;
     for(let j = val; j< val+3; j++) {
        result.push(arr[j]);
     }
   }
   return result;
}

module.exports = { getRow, getColumn, getSection };
