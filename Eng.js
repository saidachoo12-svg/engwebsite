function toggleMenu() {
    const menu = document.getElementById("navMenu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function sendMessage(event) {
    event.preventDefault();
    alert("Message sent!");
}
function contactDean() {
    alert("Thank you for reaching out! You will be redirected to the contact page.");
    window.location.href = "contact.html";
}
