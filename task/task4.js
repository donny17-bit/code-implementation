function divideAndSort(nomor) {
  let result = nomor.toString().split("0");

  // nomor = nomor.toString();
  // result = nomor.split("0");

  result.map((value, index) => {
    // value = value.split("");
    value = [...value]; //mengubah string menjadi array di tiap angka dgn spread operator
    result[index] = value.sort((a, b) => a - b).join("");
    //mengurutkan array dengan method sort
    // dan menggabungkan array menjadi string menggunakan method join
  });

  // mengubah array result menjadi satu string
  result = result.join("");
  console.log(`bilangan awal : ${nomor}`);
  console.log(`setelah proses divide n order : ${result}`);
}
divideAndSort(32301230934);
