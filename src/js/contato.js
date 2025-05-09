function enviar(){
    const nomeImput = document.getElementById("nome")
    const emailImput = document.getElementById("email")
    const descricaoImput = document.getElementById("descricao")
    let valida = true

        //Funcao exibindo erro 
    function mostrarErro(inputelement, mensagem){
        const controle = inputelement.parentNode
        const erroImg = controle.querySelect(`.erro`)
        const mensagemErro =controle.querySelect('small')

        mensagemErro.innerText =mensagem
        controle.className = 'control erro'
        erroImg.style.display ="block"
    }
    
}