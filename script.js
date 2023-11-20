// Sample data for products
const products = [
  { id: 1, name: 'Beras', price: 15000 },
  { id: 2, name: 'Telor Ayam', price: 25000 },
  { id: 3, name: 'Minyak Goreng', price: 20000 },
  { id: 4, name: 'Aqua Galon', price: 21000 },
  { id: 5, name: 'Gula Pasir', price: 12000 },
];

// Cart data
let cartItems = [];

// Function to add a product to the cart
function addToCart(productId) {
  const product = products.find(item => item.id === productId);

  if (product) {
    cartItems.push(product);
    updateCart();
  }
}

// Function to update the cart display
function updateCart() {
  const cartItemsElement = document.getElementById('cart-items');
  const totalElement = document.getElementById('total');

  // Clear the cart display before updating it
  cartItemsElement.innerHTML = '';

  // Display each item in the cart
  cartItems.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.name} - Rp. ${item.price.toLocaleString()}`;
    cartItemsElement.appendChild(listItem);
  });

  // Calculate and display the total price
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);
  totalElement.textContent = `Rp. ${total.toLocaleString()}`;
}

// Function to handle the checkout process
function checkout() {
  // Perform checkout logic here (e.g., send data to the server)
  alert('Terima kasih atas pembelian Anda! Total belanja: Rp. ' + getTotal());
  // Clear the cart after checkout
  clearCart();
  updateCart();
}

// Function to get the total price of items in the cart
function getTotal() {
  return cartItems.reduce((sum, item) => sum + item.price, 0).toLocaleString();
}
// ... (Your existing JavaScript code)

// Function to handle product deletion from the cart
function deleteProduct() {
    const productId = prompt('Masukkan ID produk yang ingin dihapus dari keranjang:');
    const productIndex = cartItems.findIndex(item => item.id === parseInt(productId, 10));
  
    if (productIndex !== -1) {
      cartItems.splice(productIndex, 1);
      updateCart();
    }
  }
  
  // ... (Your existing JavaScript code)
  

// Function to clear the cart
function clearCart() {
  cartItems = [];
}
