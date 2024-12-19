document.addEventListener("DOMContentLoaded", () => {
    const categoryContainer = document.getElementById("categories");
    const productList = document.getElementById("product-list");

    // Display categories
    categories.forEach(category => {
        const categoryElement = document.createElement("div");
        categoryElement.className = "category";
        categoryElement.textContent = category;
        categoryContainer.appendChild(categoryElement);
    });

    // Display products
    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "col-md-4";

        const discountPrice = product.discount > 0 ? `<p class="text-danger">Discount: ${product.discount}%</p>` : "";
        const stockInfo = product.stock > 0 ? `<p class="text-success">In Stock: ${product.stock}</p>` : `<p class="text-danger">Out of Stock</p>`;

        productCard.innerHTML = `
            <div class="card mb-4">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.description}</p>
                    <p class="card-text">Price: $${product.price}</p>
                    ${discountPrice}
                    ${stockInfo}
                </div>
            </div>
        `;
        productList.appendChild(productCard);
    });
});