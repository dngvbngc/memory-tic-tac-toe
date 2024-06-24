// Whenever cell is selected, check for winner or change turn
function checkGameStatus() {
  // Setting DOM to all boxes or input field
  var b1, b2, b3, b4, b5, b6, b7, b8, b9;
  b1 = document.getElementById("b1");
  b2 = document.getElementById("b2");
  b3 = document.getElementById("b3");
  b4 = document.getElementById("b4");
  b5 = document.getElementById("b5");
  b6 = document.getElementById("b6");
  b7 = document.getElementById("b7");
  b8 = document.getElementById("b8");
  b9 = document.getElementById("b9");

  // Checking for winners
  if (winnerHasWon(1)) {
    showWinner(1);
  } else if (winnerHasWon(2)) {
    showWinner(2);
  } else if (isTied()) {
    showTie();
  } else {
    showTurn(flag);
  }
}

// Reset game
function reset() {
  location.reload();
  grid = new Array(9 + 1).fill(0);
}

// Initialize game board (grid) and player (1)
grid = new Array(10).fill(0);
flag = 1;

function markCell(cellIndex) {
  if (cellIndex == 0 || cellIndex > grid.length) {
    alert("Invalid row and/or column value for a cell.");
    return;
  }
  if (grid[cellIndex] != 0) {
    alert("Cell has already been selected. Choose another.");
    return;
  }
  // Mark grid after each move
  grid[cellIndex] = flag;
  // Change flag
  if (flag == 1) {
    flag = 2;
  } else {
    flag = 1;
  }
  // Disable cell
  document.getElementById("b" + cellIndex).disabled = true;
}

function isTied() {
  return (
    grid[1] > 0 &&
    grid[2] > 0 &&
    grid[3] > 0 &&
    grid[4] > 0 &&
    grid[5] > 0 &&
    grid[6] > 0 &&
    grid[7] > 0 &&
    grid[8] > 0 &&
    grid[9] > 0
  );
}

function winnerHasWon(flag) {
  const winningCombinations = [
    [1, 2, 3],
    [1, 4, 7],
    [7, 8, 9],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
    [2, 5, 8],
    [4, 5, 6],
  ];

  for (combination of winningCombinations) {
    const [a, b, c] = combination;
    if (grid[a] == flag && grid[b] == flag && grid[c] == flag) {
      return true;
    }
  }

  return false;
}

function showWinner(flag) {
  // Show winner status
  var ins = document.getElementById("ins");
  ins.style.color = "red";
  ins.innerHTML = "Player " + flag + " won";

  // Disable unmarked cell & show marked cell
  for (let i = 1; i < grid.length; i++) {
    var cell = document.getElementById("b" + i);
    var mark = grid[i];
    if (mark == 0) {
      cell.disabled = true;
    } else {
      cell.value = mark;
    }
  }
}

function showTie() {
  document.getElementById("ins").innerHTML = "Match Tie";
  // Show marked cells
  for (let i = 1; i < grid.length; i++) {
    document.getElementById("b" + i).value = grid[i];
  }
}

function showTurn(flag) {
  document.getElementById("ins").innerHTML = "Player " + flag + "'s turn";
}

function myfunc_3() {
  markCell(1);
}

function myfunc_4() {
  markCell(2);
}

function myfunc_5() {
  markCell(3);
}

function myfunc_6() {
  markCell(4);
}

function myfunc_7() {
  markCell(5);
}

function myfunc_8() {
  markCell(6);
}

function myfunc_9() {
  markCell(7);
}

function myfunc_10() {
  markCell(8);
}

function myfunc_11() {
  markCell(9);
}

function hideGrid() {
  document.querySelector(".grid").style.display = "none";
  document.querySelector("#hidegridbtn").style.display = "none";
  document.querySelector(".nogrid").style.display = "block";
  document.querySelector("#showgridbtn").style.display = "";
}

function showGrid() {
  document.querySelector(".grid").style.display = "";
  document.querySelector("#hidegridbtn").style.display = "";
  document.querySelector(".nogrid").style.display = "none";
  document.querySelector("#showgridbtn").style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
  var hideGridBtn = document.querySelector("#hidegridbtn");
  var showGridBtn = document.querySelector("#showgridbtn");
  var gridForm = document.querySelector("#grid-form");
  var rowIndex = document.querySelector("#row-index");
  var colIndex = document.querySelector("#col-index");

  hideGridBtn.addEventListener("click", () => {
    hideGrid();
  });

  showGridBtn.addEventListener("click", () => {
    showGrid();
  });

  gridForm.addEventListener("submit", (event) => {
    event.preventDefault();
    var row = parseInt(rowIndex.value);
    var col = parseInt(colIndex.value);
    if (row <= 0 || col <= 0) {
      alert("Invalid row and/or column value for a cell.");
      return;
    }
    var selectedCell = (row - 1) * 3 + col;
    console.log(selectedCell);
    markCell(selectedCell);
    checkGameStatus();
  });
});
