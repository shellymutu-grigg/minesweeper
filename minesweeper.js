document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {}
var cells = []

//Stretch Goal 01 - automatically generate the board!
function createBoard(size){
  clearTheBoard()
  var index = 0
  var boardSize = size * size
  for(var rowCount = 0; rowCount < size && index < boardSize; rowCount++){
    for(var columnCount = 0; columnCount < size; columnCount++){
      cells.push({
        row: rowCount,
        col: columnCount,
        isMine: Math.random() >= 0.6,
        hidden: true
      })
      index++
    }
  }
  board.cells = cells
  for(var index = 0; index < board.cells.length && index < boardSize; index ++){
    board.cells[index].surroundingMines = countSurroundingMines(board.cells[index])      
  }
   // Don't remove this function call: it makes the game work!
  lib.initBoard()
}
//Stretch Goal 02 - reset the board!
function clearTheBoard(){
  board = {}
  cells = []
  document.getElementById('board').innerHTML = ""
}

function startGame () {      
  createBoard(document.getElementById('zero').value)

  document.addEventListener('click', checkForWin)
  document.addEventListener('contextmenu', checkForWin)

}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  var totals = {
    hiddenCount: 0,
    isMarkedCount: 0,
    isMineCount: 0
  }
  totals.hiddenCount = document.getElementsByClassName('hidden').length
  totals.isMarkedCount = document.getElementsByClassName('marked').length
  totals.isMineCount = document.getElementsByClassName('mine').length

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
 
  if(totals.isMarkedCount === totals.isMineCount && totals.hiddenCount === 0 && board.length !==undefined){
    lib.displayMessage('You win!')
  }

}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col)
  var count =0
  for(var index = 0; index < surrounding.length; index++){
    if(surrounding[index].isMine === true){
      count++
    }
  }
  return count
}


