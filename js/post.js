function loadPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displayPost(data));
}
function displayPost(posts) {
  const postsContainer = document.getElementById("posts-container");
  for (let post of posts) {
    console.log(post);
    const postDiv = document.createElement("div");
    postDiv.classList.add("pots");
    postDiv.innerHTML = `
        <h4>Id - ${post.id}</h4>
        <h5>User-Id : ${post.userId}</h5>
        <h5>Post : ${post.title}</h5>
        <p>Post Description : ${post.body}</p>
    `;
    postsContainer.appendChild(postDiv);
  }
}
loadPosts();
