const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (sectionTop < screenHeight - 100) {
            section.classList.add("show");
        }
    });
});
function sendMessage() {
    const input = document.getElementById("userInput");
    const chatBox = document.getElementById("chatBox");

    if (input.value === "") return;

    // User message
    const userMsg = document.createElement("div");
    userMsg.className = "user";
    userMsg.innerText = input.value;
    chatBox.appendChild(userMsg);

    // AI response
    setTimeout(() => {
        const botMsg = document.createElement("div");
        botMsg.className = "bot";

        if (input.value.toLowerCase().includes("ai")) {
            botMsg.innerText = "AI — bu kompyuterlarning inson kabi o‘rganishi 🤖";
        } else if (input.value.toLowerCase().includes("salom")) {
            botMsg.innerText = "Salom! Qanday yordam bera olaman? 😊";
        } else {
            botMsg.innerText = "Qiziqarli savol 👍 Keyinroq kengaytiramiz!";
        }

        chatBox.appendChild(botMsg);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 700);

    input.value = "";
}
document.addEventListener("DOMContentLoaded", () => {
    const bars = document.querySelectorAll(".bar div");

    bars.forEach(bar => {
        const finalHeight = bar.getAttribute("style");

        bar.style.height = "0";

        setTimeout(() => {
            bar.style.transition = "height 1.5s ease";
            bar.setAttribute("style", finalHeight);
        }, 300);
    });
});
