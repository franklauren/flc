/**
 * ////////////////
 * changeXRecursive
 * ////////////////
 * Function ini harus dikerjakan dengan menggunakan rekursif.
 * Function ini menerima dua parameter, yaitu:
 *  1. data yang merupakan string dari number
 *  2. jenis yang merupakan string berisi antara ganjil dan genap
 * 
 * [EXAMPLE]
 * Input: data = 012345678922468 dan jenis = ganjil
 * Process: Karena jenisnya ganjil maka setiap bilangan genap diubah menjadi x
 * Output: x1x3x5x7x9xxxxx
 *  
 * [RULES]
 * 1. Dilarang mengubah tipe parameter function
 * 2. Dilarang membuat function diluar function yang disediakan
 * 3. Wajib menggunakan rekursif
 */

function changeXRecursive(data, jenis) {
  // code here
  if (data.length<2) {
    return data;
  }
  else if (jenis === 'ganjil') {
    return 'x' + data[1] + changeXRecursive(data.slice(2));
  }
  else {
    return data[0] + 'x' + changeXRecursive(data.slice(2));
  }
}

console.log(changeXRecursive('012345678922468', 'ganjil'));//x1x3x5x7x9xxxxx
console.log(changeXRecursive('0123456789', 'genap'));//0x2x4x6x8x
