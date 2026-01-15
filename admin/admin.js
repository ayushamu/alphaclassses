const ADMIN_PASSWORD = "alpha2026"; // change later if needed

// Protect dashboard
if (window.location.pathname.includes("dashboard.html")) {
  if (sessionStorage.getItem("adminLoggedIn") !== "true") {
    window.location.href = "admin.html";
  }
}

// Login
function login() {
  const input = document.getElementById("adminPassword").value;
  const error = document.getElementById("errorMsg");

  if (input === ADMIN_PASSWORD) {
    sessionStorage.setItem("adminLoggedIn", "true");
    window.location.href = "dashboard.html";
  } else {
    error.textContent = "Incorrect password";
  }
}

// Logout
function logout() {
  sessionStorage.removeItem("adminLoggedIn");
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

