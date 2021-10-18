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

console.log("Boas vindas ao jogo de Blackjack!")


if(confirm("Quer iniciar um novo jogo?")){
   
   const sorteio = (p1, p2) =>{
      const carta = comprarCarta()
      const carta2 = comprarCarta()
      const carta3 = comprarCarta()
      const carta4 = comprarCarta()

      const pontuacao1 = carta.valor + carta2.valor
      const pontuacao2 = carta3.valor + carta4.valor
      let cartasUsuario = [carta.texto, carta2.texto]
      
      if (pontuacao2 || pontuacao1 < 22) {   // corrigir aqui depois para ===

         if(confirm("Suas cartas são", carta.texto, carta2.texto, ". A carta revelada do computador é", carta3.texto +
         "\n"+  
         "Deseja comprar mais uma carta?")) {
            for (let i=0; i < 1; i++ ) {
               cartasUsuario.push(comprarCarta())
            }
            if (cartasUsuario >= 22) {
               alert(`Suas cartas são ${cartasUsuario[0], cartasUsuario[1], cartasUsuario[2]} . Sua pontuaçao é de `)
            }
         }

      }else{
         console.log(p1, "- cartas:", carta.texto, carta2.texto, "- pontuação", pontuacao1)
         console.log(p2, "- cartas:", carta3.texto, carta4.texto, "- pontuação", pontuacao2)



      }
   } 
   sorteio("Usuario", "Computador")

}else {
   console.log("O jogo acabou!");
}


