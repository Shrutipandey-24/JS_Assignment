const API_URL = "https://jsonplaceholder.typicode.com/users";
const tableBody = document.getElementById("userTableBody");
const loading = document.getElementById("loading");
const refreshBtn = document.getElementById("refreshBtn");

async function fetchUsers() {
    try {
        
        loading.classList.remove("hidden");

        const response = await fetch(API_URL);
        const users = await response.json();

       
        tableBody.innerHTML = "";

        
        users.forEach(user => {
            const row = `
                <tr>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.address.city}</td>
                </tr>
            `;
            tableBody.innerHTML += row;
        });
    } catch (error) {
        console.log("Error fetching users:", error);
    } finally {
       
        loading.classList.add("hidden");
    }
}


fetchUsers();


refreshBtn.addEventListener("click", fetchUsers);
