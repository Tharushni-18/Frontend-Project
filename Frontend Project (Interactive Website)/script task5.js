// 1. Select the elements
const dataContainer = document.getElementById('data-container');
const refreshBtn = document.getElementById('refresh-btn');

// 2. Function to fetch data from the API
function getPostData() {
    // Show loading state
    dataContainer.innerHTML = '<p class="loading">Loading...</p>';

    // Generate a random ID between 1 and 100 to get different posts
    const randomId = Math.floor(Math.random() * 100) + 1;

    // Task Step: Use fetch() to retrieve data
    fetch(`https://jsonplaceholder.typicode.com/posts/${randomId}`)
        .then(response => {
            // Check if the response is successful
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json(); // Task Step: Parse JSON data
        })
        .then(data => {
            // Task Step: Dynamically update the DOM
            displayData(data);
        })
        .catch(error => {
            dataContainer.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
        });
}

// 3. Function to display the parsed JSON in the HTML
function displayData(post) {
    dataContainer.innerHTML = `
        <h3 class="post-title">${post.title}</h3>
        <p class="post-body">${post.body}</p>
        <small>Post ID: ${post.id}</small>
    `;
}

// 4. Event listener for the button
refreshBtn.addEventListener('click', getPostData);

// Run the function once on page load
getPostData();