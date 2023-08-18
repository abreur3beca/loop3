const numSecreto = 4;
let tentativas = 0;

for (let i = 0; i < 10;i++) {
    let palpiteAtual = parseInt(window.prompt('Digite o valor'));
    if(palpiteAtual === numSecreto){
        document.write("Parabéns"); 
        break
    }
    else {
        if(tentativas <= 6 ){
            document.write("Você excedeu o número de tentativas");
            tentativas++
            if (tentativas == 6) {
                break;
            }
        }
    }

}       