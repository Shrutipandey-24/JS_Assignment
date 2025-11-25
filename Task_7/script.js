const setupEl = document.getElementById('setup');
const punchlineEl = document.getElementById('punchline');
const nextJokeBtn = document.getElementById('nextJoke');
const errorEl = document.getElementById('error');

function fetchJoke() {

    nextJokeBtn.disabled = true;
    errorEl.textContent = '';
    setupEl.textContent = 'Loading...';
    punchlineEl.textContent = '';

    fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            setupEl.textContent = data.setup;
            punchlineEl.textContent = data.punchline;
            nextJokeBtn.disabled = false;
        })
        .catch(error => {
            setupEl.textContent = '';
            punchlineEl.textContent = '';
            errorEl.textContent = 'Failed to fetch joke. Try again!';
            nextJokeBtn.disabled = false;
            console.error('Error fetching joke:', error);
        });
}


fetchJoke();

nextJokeBtn.addEventListener('click', fetchJoke);
