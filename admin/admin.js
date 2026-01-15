const ADMIN_PASSWORD = "alpha2026"; // change later if needed

// Protect dashboard
if (window.location.pathname.includes("dashboard.html")) {
  if (sessionStorage.getItem("adminLoggedIn") !== "true") {
    window.location.href = "admin.html";
  }
}

// Login
function login() {
  const password = document.getElementById("adminPassword").value;
  const error = document.getElementById("errorMsg");

  fetch("/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ password })
  })
    .then(res => {
      if (!res.ok) throw new Error("Invalid password");
      return res.json();
    })
    .then(data => {
      localStorage.setItem("admin_token", data.token);
      window.location.href = "dashboard.html";
    })
    .catch(() => {
      error.textContent = "Invalid password";
    });
}


// Logout
function logout() {
  localStorage.removeItem("admin_token");
  window.location.href = "admin.html";
}


// Add blog (google sheet)
function addBlog() {
  const title = document.getElementById("title").value;
  const image = document.getElementById("image").value;
  const content = quill.root.innerHTML;
  

  const status = document.getElementById("statusMsg");

  if (!title || !content) {
    status.textContent = "Title and content required";
    status.style.color = "red";
    return;
  }

  fetch("https://script.google.com/macros/s/AKfycbzI7txmpqX8-vM9o79uXNPzJ68Ztc8oxZuC_DYpfReHQYNkRgp27irhrokeAnmCbGFK/exec", {
    method: "POST",
    body: JSON.stringify({ title, image, content }),
  })
    .then(res => res.json())
    .then(() => {
      status.textContent = "Blog saved successfully!";
      status.style.color = "green";

      document.getElementById("title").value = "";
      document.getElementById("image").value = "";
       quill.root.innerHTML = "";
    })
    .catch(() => {
      status.textContent = "Error saving blog";
      status.style.color = "red";
    });
}

// quill

let quill;

if (document.getElementById("editor")) {
  quill = new Quill("#editor", {
    theme: "snow",
    modules: {
      toolbar: "#toolbar"
    }
  });
}

