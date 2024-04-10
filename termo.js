let palavras = [
    "porta", "mesas", "livro", "solos", "vidas", "papel", "morro", "luzes", "cesta", "noite",
    "prata", "casas", "pedra", "folha", "cores", "ponte", "fruta", "navio", "chuva", "trigo",
    "campo", "golpe", "sabor", "linho", "juros", "farol", "elite", "sopro", "banco", "tinta",
    "piano", "ferro", "manga", "fundo", "jogos", "dicas", "pesos", "gemas", "salas", "toque",
    "velas", "lazer", "dados", "museu", "pneus", "etapa", "doses", "lojas", "plano", "sacos",
    "regra", "votos", "carga", "canal", "pilhas", "paredes", "grito", "corte", "grade", "molas",
    "geral", "parte", "marca", "fonte", "cesto", "exame", "cofre", "dunas", "alvos", "fatos",
    "risos", "pares", "cinto", "gases", "pista", "tacos", "minas", "bares", "filho", "patas",
    "motos", "fundo", "fases", "salto", "ficha", "sonho", "calor", "signo", "bolso", "idoso",
    "sabia", "trama", "papel", "podre", "punho", "cinto", "pilar", "massa", "curso", "passe",
    "vista", "rocha", "festa", "barco", "garra", "turma", "penas", "fenda", "velho", "norma",
    "lugar", "fases", "falha", "praga", "armas", "peito", "filme", "sinal", "praia", "disco",
    "selva", "prato", "calma", "rosto", "ideia", "texto", "verde", "vapor", "posto", "portos",
    "leite", "redes", "volta", "graus", "porta", "fatos", "peixe", "capas", "falas", "folha",
    "dores", "meios", "frase", "somas", "golfo", "gesso", "medos", "sumos", "valas", "lucro",
    "tenda", "casta", "grade", "calda", "cerca", "tenis", "peles", "fatia", "meses", "trens",
    "louca", "corpo", "pomar", "muros", "acima", "pulso", "copos", "lotes", "naves", "dados",
    "bocas", "nozes", "bolas", "vista", "monte", "norte", "furos", "rumos", "folga", "lobo",
    "traco", "fossa", "sede", "ciclo", "faixa", "matos", "ondas", "borda", "frios", "sorte"
];
random = Math.floor(Math.random() * 200);

palavraselect = palavras[random];
function game(palavra) {
    let input = palavraselect;
    let iguais = [];

    function checkiguais() {
        for (let letra1 = 0; letra1 < palavra.length; letra1 += 1) {
            let found = false;
            for (let letra2 = 0; letra2 < input.length; letra2 += 1) {
                if (input[letra2] == palavra[letra1] && letra2 == letra1) {
                    iguais.push('V');
                    found = true;
                    break;
                } else if (input[letra2] == palavra[letra1]) {
                    found = true;
                    iguais.push('O');
                    break;
                }
            }
            if (!found) {
                iguais.push('X');
            }
        }
    }

    checkiguais();
    console.log(palavra);
    console.log(iguais.join(' '));
}

function controlador() {
    let ganhou = false;
    let jogadas = 6;
    while (!ganhou && jogadas > 0) {
        let palavra = prompt('Digite a palavra:');
        game(palavra);
        if (palavra === ) {
            ganhou = true;
            console.log("Parabéns! Você acertou a palavra.");
            break;
        }
        jogadas -= 1;
        console.log("Restam " + jogadas + " tentativas.");
    }
    if (!ganhou) {
        console.log(`Você não acertou a palavra. A palavra correta era ${palavras[random]} .`);
    }
}

controlador();
