const btn = document.getElementById("toggleExpand");
let expanded = false;

btn.addEventListener("click", () => {
    const cards = document.querySelectorAll(".card-conselheiro");

    cards.forEach(card => {
    const detalhes = card.querySelector(".detalhes");

    if (!expanded) {
        detalhes.style.maxHeight = "500px";
        detalhes.style.opacity = "1";
        detalhes.style.marginTop = "10px";
        card.style.width = "300px";
    } else {
        detalhes.style.maxHeight = "0";
        detalhes.style.opacity = "0";
        detalhes.style.marginTop = "0";
        card.style.width = "250px";
    }
    });

    expanded = !expanded;
    btn.textContent = expanded ? "Diminuir cartões" : "Expandir cartões";
});

function toggleChat() {
  const chat = document.getElementById("chatWindow");
  chat.style.display = chat.style.display === "block" ? "none" : "block";
}
