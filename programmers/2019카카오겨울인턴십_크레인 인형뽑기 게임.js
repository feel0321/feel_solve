// 초기답안 틀린거
// function solution(board, moves) {
//   let new_board = [[], [], [], [], []];
//   for (let i in board) {
//     for (let i2 in board[i]) {
//       new_board[i][4 - i2] = board[i2][i];
//     }
//   }
//   moves = moves.map((move) => move - 1);
//   let result = [];
//   let answer = 0;

//   for (let move of moves) {
//     let i3 = new_board[move].filter(Boolean).length;
//     if (i3) {
//       result.push(new_board[move][i3 - 1]);
//       new_board[move][i3 - 1] = 0;
//     }

//     const len = result.length;
//     if (len > 1 && result[len - 1] === result[len - 2]) {
//       result.pop();
//       result.pop();
//       answer += 2;
//     }
//   }
//   return answer;
// }

// 수정 답안
function solution(board, moves) {
  const n = board.length;
  let result = [];
  let answer = 0;

  for (let move of moves) {
    for (let i = 0; i < n; i++) {
      if (board[i][move - 1]) {
        if (result[result.length - 1] === board[i][move - 1]) {
          result.pop();
          answer += 2;
        } else result.push(board[i][move - 1]);

        board[i][move - 1] = 0;
        break;
      }
      continue;
    }
  }
  return answer;
}

const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];
const result = 4;
console.log(solution(board, moves));
console.log(result);
