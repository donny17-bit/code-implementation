// deteksi palindrom
let kata = "malam";
let panjangKata = kata.length - 1;
let result = "";

if (kata != "number") {
  kata = kata.toUpperCase();
  for (let i = panjangKata; i >= 0; i--) {
    result += kata[i];
  }

  if (result == kata) {
    console.log("kata palindrom");
  } else {
    console.log("kata tidak palindrom");
  }
} else {
  console.log(`${kata} bukan harus berupa string`);
}
// console.log(kata != "number");
