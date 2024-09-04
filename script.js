// script.js
async function fetchProducts() {
    try {
        const response = await fetch('path_to_your_api_or_data_source');
        const products = await response.json();
        return products;
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

// Function to display products
function displayProducts(products) {
    const productContainer = document.getElementById('product-list');
    products.forEach(product => {
        const productHTML = `
            <div class="product-item">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
        productContainer.innerHTML += productHTML;
    });
}

// Function to initialize products on page load
async function initProducts() {
    const products = await fetchProducts();
    if (products) {
        displayProducts(products);
    }
}

// Call initProducts on page load
document.addEventListener('DOMContentLoaded', initProducts);


document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.addEventListener('click', function (e) {
        e.preventDefault();
        let dropdownContent = this.querySelector('.dropdown-content');

        document.querySelectorAll('.dropdown-content').forEach(content => {
            if (content !== dropdownContent) {
                content.style.display = 'none';
            }
        });

        if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
        } else {
            dropdownContent.style.display = 'block';
        }
    });
});

window.addEventListener('click', function (e) {
    if (!e.target.matches('.dropbtn')) {
        document.querySelectorAll('.dropdown-content').forEach(content => {
            content.style.display = 'none';
        });
    }
});
