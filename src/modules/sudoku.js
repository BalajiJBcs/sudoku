
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


/**
* Returns validation of the puzzle
*
* @param { Array } matriz input [row][column]
*/
function includes1to9(numArr) {
    for(let i = 1; i<= numArr.length; i++) {
        if(numArr.includes(i) == false) {
            return false;
        }
    }
    return true;
}

/**
 * Returns validation of the puzzle
 *
 * @param { Array } matriz input [row][column]
 */
function sudokuIsValid(puzzle) {
    for(let i =0; i < puzzle.length; i++) {
        if(includes1to9(puzzle[i]) == false) {
            return false;
        }
    }
    return true;
}

/**
 * Return the compare of two arrays
 *
 * param { Array } matriz input [row][column]
 */
function isSame(sudoku1, sudoku2) {
    for(let i =0; i < sudoku1.length; i++) {
        let a = sudoku1[i];
        let b = sudoku2[i];
        let value =Array.isArray(a) &&
            Array.isArray(b) &&
            a.length === b.length &&
            a.every((val, index) => val === b[index]);
        if(value == false) {
            return false;
        }
    }
    return true;
}

module.exports = { getRow, getColumn, getSection, includes1to9, sudokuIsValid, isSame };
