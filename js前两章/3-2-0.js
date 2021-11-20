//还不会，参阅解题方法如下
const generateBoard = (size) => {
    let board = [];
    for(let x = 0; x < size; ++x) {
      // if even row, first char is space ' '
      const spaceFirstRow = x % 2 === 0;
      let row = [];
      for(let y = 0; y < size; ++y) {
        if (y % 2 === 0) {
          row = [...row, spaceFirstRow ? ' ' : '#'];
        } else {
          row = [...row, spaceFirstRow ? '#' : ' '];
        }
      }
      board = [...board, row ]
    }
    return board;
  }
  
  console.log(generateBoard(8).map(e => e.join('')).join('\n'));