

// Login
// function login() {
//   const password = document.getElementById("adminPassword").value;
//   const error = document.getElementById("errorMsg");

//   fetch("/api/login", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ password })
//   })
//     .then(res => {
//       if (!res.ok) throw new Error("Invalid password");
//       return res.json();
//     })
//     .then(data => {
//       localStorage.setItem("admin_token", data.token);
//       window.location.href = "dashboard.html";
//     })
//     .catch(() => {
//       error.textContent = "Invalid password";
//     });
// }

function login() {
  const password = document.getElementById("adminPassword").value;
  const error = document.getElementById("errorMsg");
  const btn = document.getElementById("loginBtn");
  const text = btn.querySelector(".btn-text");
  const loader = btn.querySelector(".btn-loader");

  error.textContent = "";

  // Show loader
  btn.disabled = true;
  text.style.display = "none";
  loader.style.display = "block";

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
      window.location.href = "/admin/dashboard.html";
    })
    .catch(() => {
      error.textContent = "Invalid password";

      // Restore button
      btn.disabled = false;
      loader.style.display = "none";
      text.style.display = "inline";
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

function togglePassword() {
  const input = document.getElementById("adminPassword");
  const toggle = document.querySelector(".toggle-password");

  if (input.type === "password") {
    input.type = "text";
    toggle.textContent = "Hide";
  } else {
    input.type = "password";
    toggle.textContent = "Show";
  }
}
