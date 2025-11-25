const loadPostsBtn = document.getElementById('loadPosts');
const loadingEl = document.getElementById('loading');
const postListEl = document.getElementById('postList');
const errorEl = document.getElementById('error');


function getPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          
            if (Math.random() < 0.3) {
                reject('Failed to load posts');
            } else {
                resolve([
                    'Understanding JavaScript Promises',
                    'A Guide to Async/Await',
                    'DOM Manipulation Made Easy',
                    'Tips for Clean Code',
                    'How to Debug JavaScript'
                ]);
            }
        }, 2000);
    });
}


async function loadPosts(retries = 1) {
    loadingEl.textContent = 'Loading posts...';
    postListEl.innerHTML = '';
    errorEl.textContent = '';
    loadPostsBtn.disabled = true;

    try {
        const posts = await getPosts();
        posts.forEach(post => {
            const li = document.createElement('li');
            li.textContent = post;
            postListEl.appendChild(li);
        });
        loadingEl.textContent = '';
    } catch (error) {
        if (retries > 0) {
            errorEl.textContent = 'Error loading posts. Retrying...';
            await loadPosts(retries - 1);
        } else {
            loadingEl.textContent = '';
            errorEl.textContent = 'Failed to load posts after retry.';
        }
    } finally {
        loadPostsBtn.disabled = false;
    }
}

loadPostsBtn.addEventListener('click', () => loadPosts(1)); // 1 retry
