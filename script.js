function kirimPesan() {
  const nama = document.querySelector('input[type="text"]').value;
  const wa = document.querySelector('input[type="tel"]').value;
  const produk = document.querySelector('select').value;
  const jumlah = document.querySelector('input[type="number"]').value;
  const catatan = document.querySelector('textarea').value;

  if (!nama || !wa || !produk || !jumlah) {
    alert('Mohon isi semua kolom yang wajib diisi!');
    return;
  }

  const pesan = `Halo Bhinar Snack! Saya ingin pesan:%0A%0ANama: ${nama}%0AProduk: ${produk}%0AJumlah: ${jumlah} pcs%0ACatatan: ${catatan}`;
  
 window.open(`https://wa.me/6285236250047?text=${pesan}`);
}