// Inisialisasi data produk
const products = [
  { id: 1, name: 'Beras', price: 15000 },
  { id: 2, name: 'Telor', price: 25000 },
  { id: 3, name: 'Minyak Goreng', price: 20000 },
  { id: 4, name: 'Aqua Galon', price: 21000 },
  { id: 5, name: 'Gula', price: 12000 },

];

// Inisialisasi data keranjang belanja
let cartItems = [];

// Fungsi untuk menambahkan produk ke keranjang
function addToCart(productId) {
  const selectedProduct = products.find(product => product.id === productId);

  if (selectedProduct) {
    cartItems.push({
      id: selectedProduct.id,
      name: selectedProduct.name,
      price: selectedProduct.price
    });

    updateCart();
  }
}

// Fungsi untuk mengupdate tampilan keranjang
function updateCart() {
  const cartList = document.getElementById('cart-items');
  const totalElement = document.getElementById('total');

  // Bersihkan tampilan keranjang
  cartList.innerHTML = '';

  // Hitung total harga
  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  // Tampilkan item-item dalam keranjang
  cartItems.forEach(item => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<span>${item.name}</span><span>Rp. ${item.price}</span>`;
    cartList.appendChild(listItem);
  });

  // Tampilkan total harga
  totalElement.textContent = `Rp. ${totalAmount}`;
}

// Fungsi untuk melakukan checkout
function checkout() {
  // Implementasi checkout (misalnya, proses pembayaran atau pengiriman)
  alert('Terimakasih Telah berbelanja di toko kami!');
}


function tambahData() {
  const namaProduk = document.getElementById('nama').value;
  const hargaProduk = document.getElementById('produk').value;

  if (namaProduk && hargaProduk) {
    const dataTable = document.getElementById('data-body');
    const newRow = dataTable.insertRow(-1);

    const cellNama = newRow.insertCell(0);
    const cellHarga = newRow.insertCell(1);
    const cellAksi = newRow.insertCell(2);

    cellNama.textContent = namaProduk;
    cellHarga.textContent = hargaProduk;
    cellAksi.innerHTML = '<button onclick="hapusData(this)">Hapus</button>';
  } else {
    alert('Nama produk dan harga harus diisi');
  }
}

// Fungsi untuk menghapus data produk grosir
function hapusData(button) {
  const row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}
