// Aguarda o carregamento completo da página
document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const contentArea = document.getElementById('content-area');
    const searchResults = document.getElementById('search-results');

    // Verifica se os elementos existem
    if (!searchForm || !searchInput || !contentArea) {
        console.log('Elementos de busca não encontrados');
        return;
    }

    // Função de busca com filtro
    function performSearch(searchTerm) {
        const term = searchTerm.toLowerCase().trim();
        
        // Se o campo estiver vazio, mostra todos os itens
        if (term === '') {
            const items = contentArea.querySelectorAll('.item');
            items.forEach(item => {
                item.style.display = '';
            });
            if (searchResults) {
                searchResults.innerHTML = '';
            }
            // Scroll suave para o topo se necessário
            return;
        }

        // Busca nos itens com atributo data-search e no conteúdo
        const items = contentArea.querySelectorAll('.item');
        let foundCount = 0;
        const searchTerms = term.split(' ').filter(t => t.length > 0); // Divide em múltiplos termos

        items.forEach(item => {
            const searchText = (item.getAttribute('data-search') || '').toLowerCase();
            const itemText = (item.textContent || '').toLowerCase();
            const itemTitle = item.querySelector('h1, h2, h3, h4, h5, h6');
            const titleText = itemTitle ? itemTitle.textContent.toLowerCase() : '';
            
            // Verifica se todos os termos de busca estão presentes
            let matches = true;
            for (let searchWord of searchTerms) {
                if (!searchText.includes(searchWord) && 
                    !itemText.includes(searchWord) && 
                    !titleText.includes(searchWord)) {
                    matches = false;
                    break;
                }
            }
            
            if (matches) {
                item.style.display = '';
                foundCount++;
                
                // Scroll suave para o primeiro resultado encontrado
                if (foundCount === 1) {
                    setTimeout(() => {
                        item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    }, 100);
                }
            } else {
                item.style.display = 'none';
            }
        });

        // Mostra mensagem de resultado
        if (searchResults) {
            if (foundCount === 0) {
                searchResults.innerHTML = '<p class="no-results">Nenhum resultado encontrado para "' + searchTerm + '"</p>';
                searchResults.style.display = 'block';
            } else {
                searchResults.innerHTML = '<p class="results-count">' + foundCount + ' resultado(s) encontrado(s) para "' + searchTerm + '"</p>';
                searchResults.style.display = 'block';
            }
        }
    }

    // Evento de submit do formulário
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const searchTerm = searchInput.value;
        performSearch(searchTerm);
    });

    // Busca ao pressionar Enter
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            searchForm.dispatchEvent(new Event('submit'));
        }
    });

    // Limpa resultados quando o campo é limpo
    searchInput.addEventListener('input', function() {
        if (searchInput.value.trim() === '') {
            const items = contentArea.querySelectorAll('.item');
            items.forEach(item => {
                item.style.display = '';
            });
            if (searchResults) {
                searchResults.innerHTML = '';
                searchResults.style.display = 'none';
            }
        }
    });
});

