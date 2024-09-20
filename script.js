const url = "https://jsonplaceholder.typicode.com/posts/1";

// Define the async function
async function fetchData(callback) {
    try {
        // Wait for the fetch call to resolve
        const response = await fetch(url);

        // Convert the response into JSON
        const data = await response.json();

        // Call the callback function with the result (title)
        callback(data.title);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Event listener for the button
document.getElementById("btn").addEventListener("click", function() {
    // Call the async function and pass the callback to update the output div
    fetchData(function(result) {
        document.getElementById("output").innerText = result;
    });
});
