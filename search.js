document.addEventListener("DOMContentLoaded", () => {

    const searchInput = document.getElementById("search-input");
    const searchForm = document.getElementById("search-form");
    const contentArea = document.getElementById("content-area");
    const allItems = document.querySelectorAll(".item");
    const allNoResultMessages = document.querySelectorAll(".no-result-here");
    const searchResultsBox = document.getElementById("search-results");

    function clearNoResultMessages() {
        allNoResultMessages.forEach(msg => msg.style.display = "none");
    }

    function resetVisibility() {
        allItems.forEach(item => item.style.display = "");
    }

    function performSearch() {
        const query = searchInput.value.trim().toLowerCase();

        clearNoResultMessages();
        resetVisibility();
        searchResultsBox.innerHTML = "";

        if (query === "") {
            return;
        }

        let resultsFound = 0;

        allItems.forEach(item => {
            const keywords = item.dataset.search.toLowerCase();

            if (!keywords.includes(query)) {
                item.style.display = "none";
            } else {
                resultsFound++;
            }
        });

        let resultsMsg = "";

        if (resultsFound > 0) {
            resultsMsg = `<div class="result-count">${resultsFound} resultado(s) encontrado(s)</div>`;
            searchResultsBox.innerHTML = resultsMsg;

            contentArea.scrollIntoView({ behavior: "smooth", block: "start" });
        }

        allNoResultMessages.forEach(msg => {
            const parentSection = msg.closest("section, .container-lista-residuos, main, .lixeiras");

            const visibleItems = parentSection.querySelectorAll(".item:not([style*='display: none'])");

            if (visibleItems.length === 0) {
                msg.style.display = "block";
            }
        });
    }

    searchForm.addEventListener("submit", (e) => {
        e.preventDefault();
        performSearch();
    });

    searchInput.addEventListener("input", () => {
        if (searchInput.value.trim() === "") {
            clearNoResultMessages();
            resetVisibility();
            searchResultsBox.innerHTML = "";
        }
    });

});