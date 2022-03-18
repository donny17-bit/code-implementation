function fazzFood(harga, voucher, jarak, pajak) {
  voucher = voucher.toUpperCase();
  let potongan;
  let biayaAntar;
  let biayaPajak;
  let subtotal;

  if (voucher === "FAZZFOOD50") {
    //penentuan voucher

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
  } else if (voucher === "DITRAKTIR60") {
    //penentuan voucher

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
  } else {
    return console.log("kode voucher tidak ada");
  }

  if (jarak >= 2) {
    // penentuan biaya antar
    biayaAntar = 5000;
    biayaAntar = biayaAntar + (jarak - 2) * 3000;
  } else {
    biayaAntar = 5000;
  }

  if (pajak) {
    // penentuan biaya pajak
    biayaPajak = harga * 0.05;
  } else {
    biayaPajak = 0;
  }

  subtotal = harga - potongan + biayaAntar + biayaPajak;

  console.log(`kode voucher : ${voucher}`);
  console.log(`harga makanan : ${harga}`);
  console.log(`diskon : ${potongan}`);
  console.log(`biaya antar : ${biayaAntar}`);
  console.log(`pajak : ${biayaPajak}`);
  console.log(`sub total : ${subtotal}`);
}

fazzFood(50000, "ditraktir60", 5, false);
