const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzf6kkodaNcLDNjClWMKmZHvRfVP-nbY3DUvjLWgA5OlR68qXW7PM2fjhX6BK1BkYAGaA/exec";

document.getElementById("complaintForm").addEventListener("submit", async function(e) {

    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        mobile: document.getElementById("mobile").value,
        address: document.getElementById("address").value,
        capacity: document.getElementById("capacity").value,
        complaint: document.getElementById("complaint").value
    };

    document.getElementById("message").innerHTML = "Submitting complaint...";

    try {

        const response = await fetch(SCRIPT_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if(result.status === "success") {
            document.getElementById("message").innerHTML =
                `✅ Complaint submitted successfully! <br>Complaint ID: <b>${result.complaintId}</b>`;

            document.getElementById("complaintForm").reset();
        } else {
            document.getElementById("message").innerHTML = "❌ Submission failed";
        }

    } catch(error) {
        document.getElementById("message").innerHTML = "❌ Error submitting complaint";
        console.error(error);
    }
});
