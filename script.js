<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register Complaint - Solar Service Portal</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<header>
    <h1>☀️ Solar Service Portal</h1>
    <p>Register Your Service Complaint</p>
</header>

<nav>
    <a href="index.html">Home</a>
    <a href="complaint.html">Register Complaint</a>
    <a href="track.html">Track Complaint</a>
    <a href="contact.html">Contact</a>
</nav>

<div class="hero">

    <h2>Complaint Registration</h2>

    <form id="complaintForm">

        <input
            type="text"
            id="name"
            placeholder="Customer Name"
            required
            style="width:90%;padding:12px;margin:10px 0;">

        <input
            type="tel"
            id="mobile"
            placeholder="Mobile Number"
            required
            style="width:90%;padding:12px;margin:10px 0;">

        <textarea
            id="address"
            placeholder="Installation Address"
            required
            style="width:90%;padding:12px;margin:10px 0;height:80px;"></textarea>

        <input
            type="text"
            id="capacity"
            placeholder="Solar Capacity (kW)"
            required
            style="width:90%;padding:12px;margin:10px 0;">

        <input
            type="text"
            id="inverter"
            placeholder="Inverter Brand"
            required
            style="width:90%;padding:12px;margin:10px 0;">

        <textarea
            id="complaint"
            placeholder="Complaint Details"
            required
            style="width:90%;padding:12px;margin:10px 0;height:100px;"></textarea>

        <button type="submit" class="btn">
            Submit Complaint
        </button>

    </form>

    <br>

    <div id="message"></div>

</div>

<footer style="text-align:center;padding:20px;">
    © 2026 Solar Service Portal
</footer>

<script src="script.js"></script>

</body>
</html>
