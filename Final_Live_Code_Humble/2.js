/*
  ///////////
  diagonAlley
  ///////////
  Function diagonAlley adalah sebuah function yang membentuk tulisan dalam bentuk diagonal dan
  membentuk bingkai kotak seperti pada test cases. function ini akan menerima parameter string, dan
  function ini berfungsi hanya untuk menampilkan.

  [EXAMPLE]
  INPUT: non
  OUTPUT: 
    n-|
    |o|
    |-n
  NOTES:
    - word membentuk diagonal
    - tepi bingkai horizontal disambung dengan -
    - tepi bingkai vertical disambung dengan |

  [RULES]
  1. Ukuran bingkai sesuai dengan panjang karakter yang diberikan.
  2. Minimal panjang karakter yang diinput adalah 3
*/

function diagonAlley(word) {
  // code here
  var dash = '-';
  var spaceRight = ' ';
  var spaceLeft = ' ';
  for (var i=0; i<word.length-3; i++) {
    dash += '-';
  }
  console.log(word[0]+dash+"|");
  for (k=1; k<word.length; k++) {
    for (var m=word.length-1; m>-1; m--) {
      spaceRight += ' ';
    }
    for (var n=0; n<word.length-1; n++) {
      spaceLeft += ' ';
    }
        console.log("|" + spaceLeft + word[k]+ spaceRight +'|');
  }
}


// TEST CASES

diagonAlley('kuroko')
/*
  k----|
  |u   |
  | r  |
  |  o |
  |   k|
  |----o
*/
console.log('')
diagonAlley('non')
/*
  n-|
  |o|
  |-n
*/
console.log('')
diagonAlley('basuke')
/*
  b----|
  |a   |
  | s  |
  |  u |
  |   k|
  |----e
*/
console.log('')
diagonAlley('no')
// Invalid input