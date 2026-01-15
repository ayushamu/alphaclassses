fetch("https://script.google.com/macros/s/AKfycbzI7txmpqX8-vM9o79uXNPzJ68Ztc8oxZuC_DYpfReHQYNkRgp27irhrokeAnmCbGFK/exec")
  .then(res => res.json())
  .then(blogs => {
    const blogList = document.getElementById("blogList");

    const publishedBlogs = blogs.filter(
      blog => blog.status === "published"
    );

    if (!publishedBlogs.length) {
      blogList.innerHTML = "<p>No blogs published yet.</p>";
      return;
    }

    publishedBlogs.reverse().forEach(blog => {
      const div = document.createElement("div");
      div.className = "blog-card";

      div.innerHTML = `
        <h2>${blog.title}</h2>
        ${blog.image ? `<img src="${blog.image}">` : ""}
        <p class="date">${blog.date}</p>
        <div class="blog-content">${blog.content}</div>
      `;

      blogList.appendChild(div);
    });
  });
