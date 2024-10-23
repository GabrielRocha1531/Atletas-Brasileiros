function pesquisar() {
    // Seleciona o elemento HTML com o ID "resultados-pesquisa" então Este elemento será utilizado para exibir os resultados da pesquisa
    let section = document.getElementById("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    //se campoPesquisa for uma string vazia
    if(!campoPesquisa){
        section.innerHTML = "<p>Nada foi encontrado. Busca vazia</p>"
        return;
    }
    // transforma as palavras no campo de pesquisa em minusculo para boa comparação
    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar o HTML dos resultados e as variáveis que serão transformadas em minusculo para comparação
    let resultados = "";
    let nome = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada item (dado) no array(ou lista) 'dados'
    for (let dado of dados) {
        //transforma as variáveis usadas na condição em minustulas para boa comparação
        nome = dado.nome.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se titulo includer campoPesquisa, então faça...
        if(nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            // Constrói o novo elemento HTML para cada resultado:
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="${dado.link}" target="_blank">${dado.nome}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="#" target="_blank">Mais informações</a>
            </div>
        `;
        }
    }

    if(!resultados){
        resultados = "<p>Nada foi encontrado. Busca não contida no banco de dados</p>"
    }

    // Atribui o HTML gerado para o elemento 'section', substituindo o conteúdo anterior
    section.innerHTML = resultados;
}