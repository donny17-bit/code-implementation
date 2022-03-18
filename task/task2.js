// reverse word
let message = "Hello kaa kami dari pinjol";
message = message.toUpperCase();
let hasil = "";
let jumKata = 1;
let awalKata = 0;
let word = [];

for (i = 0; i <= message.length - 1; i++) {
  if (message[i] == " ") {
    word[jumKata - 1] = message.slice(awalKata, i);
    awalKata = i + 1;
    jumKata++;
  } else if (i == message.length - 1) {
    word[jumKata - 1] = message.slice(awalKata, i + 1);
  }
}

let x = word.length - 1;
for (; x >= 0; x--) {
  hasil = hasil + " " + word[x];
}
console.log(hasil);
