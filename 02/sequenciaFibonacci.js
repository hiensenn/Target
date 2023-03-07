let num = parseInt(prompt("Digite um número a sua escolha: "));

let prev = 0;
let atual = 1;

while(atual < num){
    let prox = prev + atual;
    prev = atual;
    atual = prox;
}

if(atual === num){
    console.log(alert(`O número ${num} pertence a sequência de Fibonacci`));
} else {
    console.log(alert(`O número ${num} não pertence a sequência de Fibonacci`));
}



