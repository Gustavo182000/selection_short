function selection_short(vetor) {

    let tamanho = vetor.length; // Obtém o tamanho do vetor

    for (let i = 0; i < tamanho; i++) { // Loop para percorrer toda o vetor
        let min_index = i; // Define o índice do menor elemento como índice atual do loop

        for (let j = i + 1; j < tamanho; j++){ // Loop interno para encontrar o indice do menor elemento da matriz não ordenada
            
            if(vetor[j] < vetor[min_index]){ // Se o vetor na posição J for menor que valor do vetor na posicão do menor elemento a posição do menor elemento recebe J
                min_index = j; // Atualiza o índice de menor elemento
            }

        }
        // Se o indice de menor valor for diferente do indice atual do loop externo
        // troca os valores dos elementos nessas posições para mover o menor elemento para o início da matriz não ordenada
        if(min_index !== i){ 
            // Troca os valores dos elementos, atribui os valores da segunda matriz à primeira matriz, ou seja, troca os valores dos dois elementos,
            // linha está trocando os valores dos elementos na posição i e posição min_index na matriz vetor
            [vetor[i], vetor[min_index]] = [vetor[min_index], vetor[i]];
        }

    }

    // Por fim retorna o vetor ordenado
    return vetor

}

var vetor = [5, 7, 2, 1, 6, 10, 32, 4, 8, 9, 3, 11]

console.log(selection_short(vetor))