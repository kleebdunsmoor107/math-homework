function addNumbers(x, y) {
  return x + y;
}

function subtractNumbers(x, y) {
  return x - y;
}

function multiplyNumbers(x, y) {
  return x * y;
}

function divideNumbers(x, y) {
  if (y === 0) {
    throw new Error('Divide by zero error');
  }
  return x / y;
}

function calculateEquation(expression) {
  const [num1, operator, num2] = expression.match(/\d+/g).map(Number);
  switch(operator) {
    case '+':
      return addNumbers(num1, num2);
    case '-':
      return subtractNumbers(num1, num2);
    case '*':
      return multiplyNumbers(num1, num2);
    case '/':
      return divideNumbers(num1, num2);
  }
}

function solveSudoku(board) {
  const isEmpty = (x, y) => !board[x][y];
  function findEmpty() {
    for (let x = 0; x < board.length; x++) {
      for (let y = 0; y < board.length; y++) {
        if (!isEmpty(x, y)) return [x, y];
      }
    }
    throw new Error('Board is full');
  }

  function solve() {
    const rows = new Set();
    const cols = new Set();
    const squares = new Set();

    for (let x = 0; x < board.length; x++) {
      for (let y = 0; y < board.length; y++) {
        if (!isEmpty(x, y)) {
          if (rows.has(x) || cols.has(y) || squares.has([x - Math.floor(board.length / 2), y])) continue;
          rows.add(x);
          cols.add(y);
          squares.add([x - Math.floor(board.length / 2), y]);
        }
      }
    }

    const marked = [];
    for (let x = 0; x < board.length; x++) {
      for (let y = 0; y < board.length; y++) {
        if (!isEmpty(x, y) && !rows.has(x) && !cols.has(y)) {
          marked.push([x - Math.floor(board.length / 2), y]);
        }
      }
    }

    function backtrack() {
      const row = marked.shift();
      if (row) return;

      for (let num = 1; num <= board[0][0]; num++) {
        let isValid = true;
        for (const [x, y] of marked) {
          if (board[x][y] !== '*' && board[x][y] === num) {
            isValid = false;
            break;
          }
        }

        if (!isValid) continue;

        for (let x = 0; x < board.length; x++) {
          if ((x - Math.floor(board.length / 2)) % 2 === 0 && isEmpty(x, y)) break;
          else if (!isEmpty(x, y)) break;
        }
        else if (y === board.length - 1) return true;

        for (let y = 0; y < board.length; y++) {
          if ((board[0][y] !== '*' && y === board.length - 1) || isEmpty([x, y], num)) continue;
          else break;
        }

        swap(board[x - Math.floor(board.length / 2)][y], board[x - Math.floor(board.length / 2)][(y + 1) % (board.length - 1)]);
      }
    }

    backtrack();
  }

  function swap(a, b) {
    [a[0], a[1]] = [b[0], b[1]];
    return [a];
  }

  const board = [
    ['*'],
    ['*', '*'],
    ['*', '*']
  ];

  console.log(solveSudoku(board));
}

console.log(calculateEquation('3+5=8'));
