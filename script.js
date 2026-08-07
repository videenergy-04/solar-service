const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzf6kkodaNcLDNjClWMKmZHvRfVP-nbY3DUvjLWgA5OlR68qXW7PM2fjhX6BK1BkYAGaA/exec";

const form = document.getElementById("complaintForm");

if (form) {
  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const submitBtn = form.querySelector("button");
    submitBtn.disabled = true;
    submitBtn.innerText = "Submitting...";

    const data = {
      name: document.getElementById("name").value,
      mobile: document.getElementById("mobile").value,
      address: document.getElementById("address").value,
      capacity: document.getElementById("capacity").value,
      inverter: document.getElementById("inverter").value,
      complaint: document.getElementById("complaint").value
    };

    try {
      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8"
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (result.success) {
        document.getElementById("message").innerHTML =
          "<h3 style='color:green'>Complaint Submitted Successfully!</h3>" +
          "<p><b>
