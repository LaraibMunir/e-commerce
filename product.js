// product.js

const products = [
    {
        id: 1,
        category: 'Metallic Crinkle Silk Chiffon',
        name: 'Plain Georgette Hijab',
        price: '$20',
        image: 'path_to_image_1.jpg',
        description: 'A beautiful plain Georgette hijab perfect for any occasion.',
        availability: 'In Stock',
    },
    {
        id: 2,
        category: 'Plain Georgette',
        name: 'Printed Georgette Hijab',
        price: '$25',
        image: 'path_to_image_2.jpg',
        description: 'Stylish printed Georgette hijab with vibrant colors.',
        availability: 'In Stock',
    },
    {
        id: 3,
        category: 'Organza',
        name: 'Printed Georgette Hijab',
        price: '$25',
        image: 'path_to_image_2.jpg',
        description: 'Stylish printed Georgette hijab with vibrant colors.',
        availability: 'In Stock',
    },
    {
        id: 4,
        category: 'Printed Silk',
        name: 'Printed Georgette Hijab',
        price: '$25',
        image: 'path_to_image_2.jpg',
        description: 'Stylish printed Georgette hijab with vibrant colors.',
        availability: 'In Stock',
    },
    {
        id: 5,
        category: 'Premium Satin Crinkle Silk',
        name: 'Printed Georgette Hijab',
        price: '$25',
        image: 'path_to_image_2.jpg',
        description: 'Stylish printed Georgette hijab with vibrant colors.',
        availability: 'In Stock',
    },
    {
        id: 6,
        category: 'Stripe Lawn',
        name: 'Printed Georgette Hijab',
        price: '$25',
        image: 'path_to_image_2.jpg',
        description: 'Stylish printed Georgette hijab with vibrant colors.',
        availability: 'In Stock',
    },
    {
        id: 7,
        category: 'Scrunchies',
        name: 'Printed Georgette Hijab',
        price: '$25',
        image: 'path_to_image_2.jpg',
        description: 'Stylish printed Georgette hijab with vibrant colors.',
        availability: 'In Stock',
    },
    {
        id: 8,
        category: 'Magnet Pins',
        name: 'Printed Georgette Hijab',
        price: '$25',
        image: 'path_to_image_2.jpg',
        description: 'Stylish printed Georgette hijab with vibrant colors.',
        availability: 'In Stock',
    },
    // Add more products as needed
];

function fetchProducts(category) {
    const filteredProducts = products.filter(product => product.category === category);
    displayProducts(filteredProducts);
}

function displayProducts(products) {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = ''; // Clear previous products

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.onclick = () => showProductDetails(product);

        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
        `;

        productContainer.appendChild(productElement);
    });
}

function showProductDetails(product) {
    localStorage.setItem('selectedProduct', JSON.stringify(product));
    window.location.href = 'product-detail.html';
}

