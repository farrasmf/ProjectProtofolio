const blogPosts = [
    {
        tittle: "My First Blog Post",
        content: "This is my very first blog post. Exciting!",
        author: "John Doe",
        date: "2023-08-14"
    },
    {   
        tittle: "JavaScript Basics",
        content: "In this post, I'll cover some JavaScript basics for beginners",
        author: "Jane Smith",
        date: "2023-08-15"
    }
];

function createBlogPostElement(post) {
    const blogPostElement = document.createElement("article");
    blogPostElement.className = "blog-post";

    const tittleElement = document.createElement("h2")
    tittleElement.textContent = post.tittle

    const authorElement = document.createElement("p");
    authorElement.textContent = `By ${post.author} on ${post.date}`;

    const contentElement = document.createElement("p")
    contentElement.textContent = post.content;

    blogPostElement.appendChild(tittleElement);
    blogPostElement.appendChild(authorElement);
    blogPostElement.appendChild(contentElement);

    return blogPostElement;
}

const blogList = document.getElementById("blog-list");

function showBlogDetails(post) {
    const detailContainer = document.getElementById("blog-detail");
    detailContainer.innerHTML = "";

    const tittleElement = document.createElement("h2")
    tittleElement.textContent = post.tittle;

    const authorElement = document.createElement("p");
    authorElement.textContent = `By ${post.author} on ${post.date}`;

    const contentElement = document.createElement("p");
    contentElement.textContent = post.content;

    detailContainer.appendChild(tittleElement);
    detailContainer.appendChild(authorElement);
    detailContainer.appendChild(contentElement);
}

blogPosts.forEach(post => {
    const blogPostElement = createBlogPostElement(post);
    blogPostElement.addEventListener("click", () => {
        showBlogDetails(post);
    });
    blogList.appendChild(blogPostElement)
});