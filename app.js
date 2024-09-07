function buscar() {

    let section = document.getElementById("resultados-pesquisa");

    let campoBusca = document.getElementById("campo-busca").value

    if (!campoBusca) {
        section.innerHTML = "<p>Nenhum clube encontrado. Informe o nome do clube</p>"
        return
    }
    
    campoBusca = campoBusca.toLowerCase()

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    for (let dado of dados) { 
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        if (titulo.includes(campoBusca) || descricao.includes(campoBusca) || tags.includes(campoBusca)) {
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
        }
        if (!resultados) {
            resultados = "<p>Nenhum clube encontrado</p>"
        }

    section.innerHTML = resultados;
}
