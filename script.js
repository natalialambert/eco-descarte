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

const contentData = {
  construction: `
    <p>
      Câmara Municipal de Vereadores <br>
      Secretaria Municipal de Educação <br>
      Secretaria Municipal de Infraestrutura <br>
      Secretaria Municipal de Saúde <br>
      Secretaria Municipal de Meio Ambiente <br>
      Prefeitura Municipal <br>
      Hospital Regional de Paraíso <br>
      Teatro Municipal Cora Coralina
    </p>
    <p>
      IFTO <br>
      UNEST <br>
      Escola Estadual Deusa Moraes <br>
      Camil Alimentos <br>
      Farma Coelho <br>
      Paróquia São José Operário <br>
      Plena Alimentos <br>
      REMO - Materiais de Construção <br>
      Vivo
    </p>
  `,
  legal: `
    <p>
      Avenida Transbrasiliana, nº 135, centro
    </p>
  `,
};

const links = document.querySelectorAll('.menu a');
const content = document.getElementById('content');

// Exibir o conteúdo padrão (PAPEL)
content.innerHTML = contentData['construction'];

// Adicionar evento de clique nos links do menu
links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const section = link.getAttribute('data-section');

    // Atualizar o conteúdo
    content.innerHTML = contentData[section];

    // Atualizar o link ativo
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});
