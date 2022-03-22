function fazzFood(harga, voucher, jarak, pajak) {
  let potongan;
  let biayaAntar;
  let biayaPajak;
  let subtotal;
  voucher = voucher.toUpperCase();

  //penentuan voucher
  if (voucher === "FAZZFOOD50") {
    potongan = fazzFood50(harga);
  } else if (voucher === "DITRAKTIR60") {
    potongan = ditraktir60(harga);
  } else {
    return console.log("kode voucher tidak ada");
  }

  // penentuan biaya antar
  biayaAntar = hitJarak(jarak);

  if (pajak) {
    // penentuan biaya pajak
    biayaPajak = harga * 0.05;
  } else {
    biayaPajak = 0;
  }
  potongan;
  subtotal = harga - +biayaAntar + biayaPajak;

  console.log(`kode voucher : ${voucher}`);
  console.log(`harga makanan : ${harga}`);
  console.log(`diskon : ${potongan}`);
  console.log(`biaya antar : ${biayaAntar}`);
  console.log(`pajak : ${biayaPajak}`);
  console.log(`sub total : ${subtotal}`);
}

function hitJarak(jarak) {
  if (jarak >= 2) {
    biayaAntar = 5000 + (jarak - 2) * 3000;
  } else {
    biayaAntar = 5000;
  }
  return biayaAntar;
}

function fazzFood50(harga) {
  if (harga >= 50000) {
    // cek harga dan penentuan diskon
    potongan = harga - harga * 0.5;
    if (potongan >= 50000) {
      potongan = 50000;
    } else {
      potongan = potongan;
    }
  } else {
    potongan = 0;
  }

  return potongan;
}

function ditraktir60(harga) {
  if (harga >= 25000) {
    // cek harga dan penentuan diskon
    potongan = harga - harga * 0.6;
    if (potongan >= 30000) {
      potongan = 30000;
    } else {
      potongan = potongan;
    }
  } else {
    potongan = 0;
  }

  return potongan;
}

fazzFood(50000, "ditraktir60", 2, true);
