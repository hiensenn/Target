fetch('dados.json')
  .then(response => response.json())
  .then(data => {
    
    const maiorValor = data.reduce((valorMaximo, fatura) => {
        return fatura.valor > valorMaximo ? fatura.valor : valorMaximo;
    }, 0);

    const menorValor = data.reduce((valorMinimo, fatura) => {
        return fatura.valor < valorMinimo ? fatura.valor : valorMinimo;
    }, Infinity);

    const diasComFaturamento = data.filter(dia => dia.valor !== 0)
    
    const mediaMensal = data.reduce((soma, dia) => soma + dia.valor, 0) / diasComFaturamento.length
    
  
    const diasAcimaDaMedia = data.filter(dia => dia.valor > mediaMensal).length

    //O resultado está no console da WEB ;)
    
    console.log(`maior valor encontrado foi: ${maiorValor} e o  menor valor encontrado foi: ${menorValor}`)
    console.log(`A média mensal de faturamento é de R$ ${mediaMensal.toFixed(2)}.`)
    console.log(`No mês, houve ${diasAcimaDaMedia} dias com faturamento acima da média.`)
    
    
  }).catch(error => console.log(error));

    
   
  


