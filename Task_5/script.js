
const products = [
    { name: "Laptop", category: "electronics" },
    { name: "Headphones", category: "electronics" },
    { name: "Smartphone", category: "electronics" },
    { name: "T-Shirt", category: "clothing" },
    { name: "Jeans", category: "clothing" },
    { name: "Jacket", category: "clothing" },
    { name: "Book - Science", category: "books" },
    { name: "Book - History", category: "books" },
    { name: "Camera", category: "electronics" },
    { name: "Cap", category: "clothing" }
];


displayProducts(products);


function displayProducts(list) {
    let ul = document.getElementById("productList");
    ul.innerHTML = "";
    list.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item.name;
        ul.appendChild(li);
    });
}


function filterProducts(category) {
    if (category === "all") {
        displayProducts(products);
    } else {
        let filtered = products.filter(p => p.category === category);
        displayProducts(filtered);
    }
}


function searchProducts() {
    let keyword = document.getElementById("searchBox").value.toLowerCase();
    let filtered = products.filter(p => p.name.toLowerCase().includes(keyword));
    displayProducts(filtered);
}
