let products = [];
const grid = document.getElementById("productGrid");
const searchBox = document.getElementById("searchBox");


async function loadProducts() {
    const res = await fetch("https://fakestoreapi.com/products");
    products = await res.json();
    displayProducts(products);
}


function displayProducts(items) {
    grid.innerHTML = "";
    items.forEach(p => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h3>${p.title}</h3>
            <p>$${p.price}</p>
        `;
        grid.appendChild(card);
    });
}


function debounce(func, delay) {
    let timer;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, arguments), delay);
    };
}


function filterProducts() {
    const text = searchBox.value.toLowerCase();
    const filtered = products.filter(p =>
        p.title.toLowerCase().includes(text)
    );
    displayProducts(filtered);
}

searchBox.addEventListener("input", debounce(filterProducts, 300));


loadProducts();
