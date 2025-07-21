document.getElementById("chat-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const business = document.getElementById("business").value.trim();

  if (name && email && business) {
    document.getElementById("chat-form").style.display = "none";
    document.getElementById("thanks").classList.remove("hidden");
    // Optional: send data to your backend/webhook if needed
    console.log({ name, email, business });
  }
});
