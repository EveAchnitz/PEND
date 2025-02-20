var mensagem = "Oii";

function exibirMensagem(){
    let resposta = "Olá";
    
    console.log(mensagem);
    console.log(resposta);
}
exibirMensagem();//aqui a função funcionará normalmente
console.log("Eu mandei: " + mensagem + "! E você respondeu: " + resposta + "!");//enquanto aqui, não será exibido o valor da variável "resposta" que é let