// reverse word
let message = "Hello saya dari tadi";
// message = message.toUpperCase();
let hasil = "";

message = message.split(" ");

let x = message.length - 1;
for (; x >= 0; x--) {
  hasil = hasil + " " + message[x];
}
console.log(hasil);
