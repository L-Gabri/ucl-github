function buscar() {
    // Esta função busca os dados e renderiza os resultados na seção "resultados-pesquisa".
    // Ela itera sobre os dados, cria elementos HTML para cada item e os adiciona à seção.
    
    let section = document.getElementById("resultados-pesquisa"); // Seleciona a seção onde os resultados serão exibidos.
    let resultados = ""; // Variável para armazenar o HTML gerado.

    for (let dado of dados) { // Itera sobre cada item do array "dados".
        // Cria um elemento HTML para cada item e adiciona à variável "resultados".
        resultados += `
            <div class="item-resultado">
                <h2>
                    <a href=${dado.link} target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.instagram} target="_blank">Instagram</a>
            </div>
        `;
    }

    section.innerHTML = resultados; // Insere o HTML gerado na seção.
}