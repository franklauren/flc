/* 
MENCARI POSISI TEMPAT DUDUK DI RUANG SEMINAR

function findEmptySeat akan menerima array multidimensi yang menggambarkan sebuah ruangan seminar.

Symbol '*' menandakan bahwa kursi telah ditempati seseorang, dan spasi ' ' menandakan bahwa kursi tersebut kosong.

Pada posisi persis tengah ruangan terdapat juga jalur kosong vertikal yang merupakan sebuah jalan.

Carilah posisi kosong pada ruangan tersebut dan tandai dengan menempatkan symbol '#'.

Jika terdapat lebih dari 1 posisi kursi kosong, maka pilihlah posisi dengan baris paling belakang diantara kursi kosong tersebut.
Dan jika ada lebih dari 1 posisi kursi kosong di baris yang sama, maka akan dipilih posisi paling kanan

Kalau tidak ada kursi kosong yang tersedia maka tampilkan pesan "maaf tidak ada kursi kosong tersedia"


INPUT:
[
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', ' ', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', ' ', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*']
]

PROCESS:
- jalur kosong ada di kolom dengan indeks 3
- posisi kursi kosong ada di indeks (4,1) dan (5,5)
- posisi kursi kosong paling belakang ada di indeks (5,5)

OUTPUT: simbol # ditempatkan pada posisi indeks (5,5)

[ ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', ' ', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '#', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'] ]

*/

function findEmptySeat(room) {
  // code here
  var pos = [];
  for (var i=0; i<room.length; i++) {
    var row = room[i];
    for (var k=0; k<row.length; k++ ) {
      var seat = row[k];
      // console.log(seat);
      // console.log(Math.round((row.length/2)-1)-1);
      if(seat !== '*' && k !==Math.ceil(row.length/2)-1) {
        pos.push([i,k]);
      }
    }
  }
  var highest0 = 0;
  var highest1 = 0;
  var bestSeat = [];
  for (var m=0; m<pos.length; m++) {
    // console.log(pos[m][0]);
    if (highest0<pos[m][0]) {
      highest0=pos[m][0];
      bestSeat=pos[m];
    }
  }
  if (bestSeat.length === 0) {
    return "maaf tidak ada kursi kosong tersedia";
  }
  else {
    // return bestSeat;
    room[bestSeat[0]][bestSeat[1]] = '#'
    return room;
  }
}


console.log(findEmptySeat([
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', ' ', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', ' ', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*']
]))
/* 
[ ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', ' ', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '#', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'] ]
*/


console.log(findEmptySeat([
  ['*','*', '*', '*', ' ', '*', '*', '*', '*'],
  ['*','*', '*', '*', ' ', '*', '*', '*', '*'],
  ['*','*', '*', '*', ' ', '*', '*', '*', '*'],
  ['*','*', ' ', '*', ' ', ' ', '*', '*', '*'],
  ['*','*', '*', '*', ' ', '*', '*', '*', '*'],
  ['*','*', '*', '*', ' ', '*', '*', '*', '*'],
  ['*','*', '*', '*', ' ', ' ', '*', '*', '*'],
  ['*','*', ' ', '*', ' ', '*', '*', '*', '*'],
  ['*','*', '*', '*', ' ', '*', '*', '*', '*']
]))
/*
[ [ '*', '*', '*', '*', ' ', '*', '*', '*', '*' ],
  [ '*', '*', '*', '*', ' ', '*', '*', '*', '*' ],
  [ '*', '*', '*', '*', ' ', '*', '*', '*', '*' ],
  [ '*', '*', ' ', '*', ' ', ' ', '*', '*', '*' ],
  [ '*', '*', '*', '*', ' ', '*', '*', '*', '*' ],
  [ '*', '*', '*', '*', ' ', '*', '*', '*', '*' ],
  [ '*', '*', '*', '*', ' ', ' ', '*', '*', '*' ],
  [ '*', '*', '#', '*', ' ', '*', '*', '*', '*' ],
  [ '*', '*', '*', '*', ' ', '*', '*', '*', '*' ] ]
*/

console.log(findEmptySeat([
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*']
]))
// maaf tidak ada kursi kosong tersedia
