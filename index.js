// ! JANGAN DIMODIFIKASI
/*
  Data Array Object Pegawai
  [
    {
      "id": 1,
      "namaDepan": "Edyth",
      "namaBelakang": "Roberts",
      "jenisKelamin": "M"
    },
    ...
  ]
*/
const arrayObjectPegawai = require("./data-customer.json");

function lakukanLooping(arrPegawai) {
  // ! JANGAN DIMODIFIKASI
  let dataYangAkanDilooping = arrPegawai;

  /*
    TODO 1: Buatlah sebuah variabel bernama "hasilLooping" 
      yang berisi gabungan nama depan dan belakang dari masing masing pegawai

      Contoh: ["Aisyah Nirmala", "Mansur Faisal", ...]
  */
  const arrFullName = [];
  let hasilLooping = null;
  for (let i = 0; i < arrayObjectPegawai.length; i++) {
    arrFullName.push(arrayObjectPegawai[i].namaDepan + ' ' + arrayObjectPegawai[i].namaBelakang);
  }
  hasilLooping = arrFullName;

  /*
    TODO 2: Buatlah sebuah variabel bernama "jumlahPria"
      yang berisi jumlah pria dari masing masing pegawai
  */
  let jmlPria = 0;
  let jumlahPria = null;
  for (let i = 0; i < arrayObjectPegawai.length; i++) {
    if(arrayObjectPegawai[i].jenisKelamin === 'M') {
      jmlPria = jmlPria + 1;
    }
  }
  jumlahPria = jmlPria;

  /*
    TODO 3: Buatlah sebuah variabel bernama "jumlahWanita"
      yang berisi jumlah wanita dari masing masing pegawai
  */
  let jmlWanita = 0;
  let jumlahWanita = null;
  for (let i = 0; i < arrayObjectPegawai.length; i++) {
    if(arrayObjectPegawai[i].jenisKelamin === 'F') {
      jmlWanita = jmlWanita + 1;
    }
  }
  jumlahWanita = jmlWanita;

  /*
    TODO 4: Buatlah sebuah variabel bernama "komentar"
      yang akan mengomentari apakah lebih banyak Pria atau Wanita
      
      Apabila Pria lebih banyak dari Wanita, maka komentar akan berisi:
        "Jumlah Pria lebih banyak dari Wanita"
      Apabila Wanita lebih banyak dari Pria, maka komentar akan berisi:
        "Jumlah Wanita lebih banyak dari Pria"
      Apabila imbang, maka komentar akan berisi:
        "Jumlah Pria dan Wanita berimbang"
  */
  let comment = "";
  let komentar = null;
  if(jumlahPria > jumlahWanita) {
    comment = "Jumlah Pria lebih banyak dari Wanita";
  } else if (jumlahWanita > jumlahPria) {
    comment = "Jumlah Wanita lebih banyak dari Pria";
  } else {
    comment = "Jumlah Pria dan Wanita berimbang";
  }
  komentar = comment;

  // ! JANGAN DIMODIFIKASI
  return {
    hasilLooping,
    jumlahPria,
    jumlahWanita,
    komentar,
  };
}

function main(data) {
  const hasil = lakukanLooping(data || arrayObjectPegawai);

  console.log(hasil.hasilLooping);
  console.log(hasil.jumlahPria);
  console.log(hasil.jumlahWanita);

  return hasil;
}

main(arrayObjectPegawai);

module.exports = main;