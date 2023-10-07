document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
        
        // Function to add a product to the cart
function addToCart(productName, price) {
    const item = { name: productName, price: price };
    cart.push(item);
}

       // Event listener for "Add to Cart" button clicks
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', function () {
        const productDiv = button.closest('.product');
        const productName = productDiv.querySelector('h3').textContent;
        const priceString = productDiv.querySelector('p').textContent;
        const price = parseFloat(priceString.replace('Price: $', ''));

        addToCart(productName, price);
        updateCartDisplay(); 
    });
});

            alert('Product added to cart!');
        });
    });
});
