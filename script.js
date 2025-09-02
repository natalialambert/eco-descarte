function mostrarInfo(elemento) {
    const bloco = elemento.parentElement;
    const lixeira = elemento.querySelector(".lixeira-container");
    const info = bloco.querySelector(".info");

    // Se já estiver aberta, fecha
    if (lixeira.classList.contains("aberta")) {
        lixeira.classList.remove("aberta");
        info.style.display = "none";
    } else {
        // Fecha todas
        document.querySelectorAll(".lixeira-container").forEach(l => l.classList.remove("aberta"));
        document.querySelectorAll(".info").forEach(i => i.style.display = "none");

        // Abre só a clicada
        lixeira.classList.add("aberta");
        info.style.display = "block";

        // Ajusta a cor do info
        const corpo = elemento.querySelector(".corpo");
        const cor = Array.from(corpo.classList).find(c => c !== "corpo");
        info.className = "info " + cor;
    }
}
  