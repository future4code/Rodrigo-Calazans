/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
/*
console.log("Boas vindas ao jogo de Blackjack!")


if(confirm("Quer iniciar um novo jogo?")){
   
   const sorteio = (p1, p2) =>{
      const carta = comprarCarta()
      const carta2 = comprarCarta()
      const carta3 = comprarCarta()
      const carta4 = comprarCarta()

      const pontuacao1 = carta.valor + carta2.valor
      const pontuacao2 = carta3.valor + carta4.valor

      console.log(p1, "- cartas:", carta.texto, carta2.texto, "- pontuação", pontuacao1)
      console.log(p2, "- cartas:", carta3.texto, carta4.texto, "- pontuação", pontuacao2)

      if (pontuacao1 > pontuacao2) {
         console.log("O", p1, "ganhou!")
      }else if (pontuacao1 < pontuacao2) {
         console.log("O", p2, "ganhou!")
      }else {
         console.log("Empate!")
      }

   }
   sorteio("Usuario", "Computador")

}else {
   console.log("O jogo acabou")
}

*/




