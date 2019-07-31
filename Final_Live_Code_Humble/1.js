/*
	Dalam sebuah game, hero yang dapat dipilih memiliki jenis tertentu
	Dalam game ini satu tim harus memilih 5 heroes yang akan dimainkan
	Disini kamu diminta menampilkan apakah pick hero yang dilakukan tergolong good atau bad dengan kodisi sebagai berikut
		good pick : jika dari hero yang di pick tidak memiliki lebih dari 2 tipe hero yang sama
    bad pick : jika dari hero yang di pick ada 3 atau lebih tipe hero yang sama
    pick list : ranger, mage, tank, warrior, atau assassin (cuma ada 5 tipe ini)
  tampilkan apakah good pick atau bad pick dan jenis apa yang lebih dari 2, pesan seperti pada test case

  [RULES]
  1. Wajib menggunakan Algoritma/Pseudocode
  2. Hanya boleh menggunakan built in function .split(), .unshift(), dan .push()
*/

// STORE pickList with value of all type
// GET compositionList from composition String
// CHECK 
// IF compositionList length below 5
//   DISPLAY "not sufficient"
// END IF
// ELSE 
//   CHECK IF compositionList all values IS IN pickList
//     THEN CHECK IF compositionList value HAVE MORE THAN 2 same value 
//       DISPLAY "bad pick"
//       END IF
//     ELSE 
//       DISPLAY "good pick"
//   END IF
//   ELSE
//     DISPLAY "not on the list"



function heroPick(composition) {
  // code here
  var pickList = ['ranger', 'mage', 'tank', 'warrior', 'assassin'];
  var compSplit = composition.split(",");
  // console.log(compSplit);
  if (compSplit.length < 5) {
    return "not sufficient players";
  }
  else {
    var obj = {};
    for (var i=0; i<compSplit.length; i++) {
      for (var k=0; k<pickList.length; k++) {
        if (compSplit[i]===pickList[k]) {
          if (obj[compSplit[i]]===undefined) {
            obj[compSplit[i]] = 1;
          }
          else {
            obj[compSplit[i]] +=1;
          }
        }
        // else {
        //   return compSplit[i] + " not in tier list";
        // }
      }
    }
    var keys = Object.keys(obj);
    var values = Object.values(obj);
    // console.log(values);
    for (var m=0; m<values.length; m++) {
      if (values[m]>2) {
        return "bad pick too many " + keys[m]; 
      }
      else {
        return "good pick"
      }
    }
    // return obj;
  }
}

// Test case
console.log(heroPick('ranger,ranger,mage,tank,warrior')) // good pick
console.log(heroPick('mage,mage,tank,mage,warrior')) // bad pick too many mage
console.log(heroPick('mage,mage,tank,mage')) // not sufficient players
console.log(heroPick('mage,mage,god,mage,mage')) // god is not on the pick list
