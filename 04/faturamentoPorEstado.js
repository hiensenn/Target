const faturamentoPorEstado = {
    'SP': 67836.43,
    'RJ': 36678.66,
    'MG': 29229.88,
    'ES': 27165.48,
    'Outros': 19849.53
  };
  
  let total = 0;
  
  // Soma dos valores de faturamento para obter o total
  for (const estado in faturamentoPorEstado) {
    total += faturamentoPorEstado[estado];
  }
  
  // Calculo do percentual de representação de cada estado
  for (const estado in faturamentoPorEstado) {
    const percentual = (faturamentoPorEstado[estado] / total) * 100;
    console.log(`${estado}: ${percentual.toFixed(2)}%`);
  }