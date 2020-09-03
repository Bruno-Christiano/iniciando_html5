/*
    var evento = window.document.getElementById ('home')
    var evento2 = window.document.getElementById ('specs')
    var eventExit = window.document.getElementById ('home')
    
    evento.addEventListener ('mouseover', MudaFotoHome)
    
    eventExit. addEventListener ('mouseout', MudaExit)
    
    
    function MudaFotoHome() {
        
            document.getElementById ("icone").src = "_imagens/home.png"
    }
    
    function MudaFotoSpecs() {
        document.getElementById('icone').src = "_imagens/especificacoes.png"
    }
    
    function MudaExit() {
        document.getElementById ("icone").src = "_imagens/glass-oculos-preto-peq.png"
    }
*/

function mudaFoto(foto) {
        
    document.getElementById ("icone").src = foto
}