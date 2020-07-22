

const val = require("./modules/sudoku.js");


let puzzle = [[ 8,9,5,   7,4,2,   1,3,6 ],
              [ 2,7,1,   9,6,3,   4,8,5 ],
              [ 4,6,3,   5,8,1,   7,9,2 ],

              [ 9,3,4,   6,1,7,   2,5,8 ],
              [ 5,1,7,   2,3,8,   9,6,4 ],
              [ 6,8,2,   4,5,9,   3,7,1 ],

              [ 1,5,9,   8,7,4,   6,2,3 ],
              [ 7,4,6,   3,2,5,   8,1,9 ],
              [ 3,2,8,   1,9,6,   5,4,7 ]];



let getRow = val.getRow(puzzle, 8);
console.log(getRow);

let getColumn = val.getColumn(puzzle, 0);
console.log(getColumn);

let getSection = val.getSection(puzzle, 0, 0);
console.log(getSection);

let getSection2 = val.getSection(puzzle, 1, 1);
console.log(getSection2);
