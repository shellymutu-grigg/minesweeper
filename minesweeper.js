document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: [{
    row: 0,
    col: 0,
    isMine: false,
    hidden: true
  },  {
    row: 0,
    col: 1,
    isMine: false,
    hidden: true
  },  {
    row: 0,
    col: 2,
    isMine: false,
    hidden: true
  },  {
    row: 0,
    col: 3,
    isMine: false,
    hidden: true
  },  {
    row: 1,
    col: 0,
    isMine: false,
    hidden: true
  },  {
    row: 1,
    col: 1,
    isMine: false,
    hidden: true
  },  {
    row: 1,
    col: 2,
    isMine: false,
    hidden: true
  },  {
    row: 1,
    col: 3,
    isMine: false,
    hidden: true
  },  {
    row: 2,
    col: 0,
    isMine: true,
    hidden: true
  },  {
    row: 2,
    col: 1,
    isMine: false,
    hidden: true
  },  {
    row: 2,
    col: 2,
    isMine: false,
    hidden: true
  },  {
    row: 2,
    col: 3,
    isMine: true,
    hidden: true
  },  {
    row: 3,
    col: 0,
    isMine: true,
    hidden: true
  },  {
    row: 3,
    col: 1,
    isMine: false,
    hidden: true
  },  {
    row: 3,
    col: 2,
    isMine: false,
    hidden: true
  },  {
    row: 3,
    col: 3,
    isMine: false,
    hidden: true}],
}

function startGame () {
    for(var index = 0; index < board.cells.length; index ++){
      board.cells[index].surroundingMines = countSurroundingMines(board.cells[index])
      console.log("startGame() board.cells["+index+"].row: "+ board.cells[index].row + " board.cells["+index+"].col: "+ board.cells[index].col +" board.cells["+index+"].isMine: "+ board.cells[index].isMine+ " board.cells["+index+"].surroundingMines: "+ board.cells[index].surroundingMines)
      
    }
  // Don't remove this function call: it makes the game work!
  lib.initBoard()

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
  if(totals.hiddenCount > 0){
    lib.displayMessage('You still need to find the remaining mines!')
  }else if(totals.isMarkedCount === totals.isMineCount && totals.hiddenCount === 0){
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


