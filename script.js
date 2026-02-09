// 1️⃣ Welcome message on page load
window.onload = function () {
    console.log("Welcome to SQC Website");
    showToast("Welcome to SQC – Quantum Computing Club 🚀");
};

// 2️⃣ Button interaction
function showMessage() {
    const messages = [
        "Explore Quantum Computing ⚛️",
        "Join SQC – Innovate the Future 🚀",
        "Think Beyond Classical Computing 🧠",
        "Welcome to NIT Jalandhar Tech Culture 💡"
    ];

    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    alert(randomMsg);
}

// 3️⃣ Image hover effect (title change)
const images = document.querySelectorAll(".image-grid img");

images.forEach((img) => {
    img.addEventListener("mouseenter", () => {
        img.style.boxShadow = "0 0 20px #00d4ff";
    });

    img.addEventListener("mouseleave", () => {
        img.style.boxShadow = "none";
    });

    // 4️⃣ Click image → full view
    img.addEventListener("click", () => {
        openImage(img.src);
    });
});

// 5️⃣ Full image preview
function openImage(src) {
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.background = "rgba(0,0,0,0.8)";
    overlay.style.display = "flex";
    overlay.style.alignItems = "center";
    overlay.style.justifyContent = "center";
    overlay.style.zIndex = "1000";

    const img = document.createElement("img");
    img.src = src;
    img.style.maxWidth = "80%";
    img.style.borderRadius = "10px";

    overlay.appendChild(img);

    overlay.onclick = () => {
        document.body.removeChild(overlay);
    };

    document.body.appendChild(overlay);
}

// 6️⃣ Toast notification (custom message)
function showToast(message) {
    const toast = document.createElement("div");
    toast.innerText = message;

    toast.style.position = "fixed";
    toast.style.bottom = "30px";
    toast.style.right = "30px";
    toast.style.background = "#00d4ff";
    toast.style.color = "#000";
    toast.style.padding = "12px 20px";
    toast.style.borderRadius = "5px";
    toast.style.fontWeight = "bold";
    toast.style.boxShadow = "0 0 10px #00d4ff";

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}
// 🌊 Scroll reveal animation
window.addEventListener("scroll", reveal);

function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add("active");
        }
    });
}
