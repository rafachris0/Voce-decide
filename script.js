const caixaprincipal = document.querySelector('.caixa-principal');
const caixaperguntas = document.querySelector('.caixa-perguntas');
const caixaalternativas = document.querySelector('.caixa-alternativas');
const caixaresultados = document.querySelector('.texto-resultado');
const botaoReiniciar = document.getElementById('reiniciar');
const titulo = document.querySelector('h1');

const perguntas = [
    {
        enunciado: "No âmbito tecnológico:",
        alternativas: [
            "Você ganha um supercomputador, mas… só pode usá-lo para projetos de código aberto e todo o seu trabalho será publicamente acessível.",
            "Recebe um software de inteligência artificial avançado, mas… ele decide os projetos nos quais você trabalhará, sem a sua intervenção."
        ],
        resumoAlternativas: [
            "Parabéns, você recebeu um supercomputador, mas todos os seus projetos agora são públicos e acessíveis a todos.",
            "Parabéns, você recebeu um software de IA avançado, mas ele agora decide os projetos por você, sem que você possa intervir."
        ]
    },
    {
        enunciado: "No âmbito social:",
        alternativas: [
            "Você ganha um ano de viagens grátis ao redor do mundo, mas… precisa compartilhar cada momento em tempo real nas redes sociais.",
            "Recebe uma posição de destaque em uma grande empresa, mas… terá que trabalhar 80 horas por semana, sem folgas."
        ],
        resumoAlternativas: [
            "Parabéns, você ganhou um ano de viagens grátis, mas agora sua vida é um livro aberto nas redes sociais.",
            "Parabéns, você obteve uma posição de destaque, mas sua vida agora gira em torno do trabalho incessante, sem descanso."
        ]
    },
    {
        enunciado: "No âmbito ambiental:",
        alternativas: [
            "Você ganha um painel solar para sua casa, mas… deve reduzir seu consumo de energia em 70% para que ele funcione.",
            "Recebe a oportunidade de plantar uma floresta, mas… deve morar em uma área remota e se dedicar integralmente a isso por cinco anos."
        ],
        resumoAlternativas: [
            "Parabéns, você ganhou um painel solar, mas agora vive com 70% menos energia.",
            "Parabéns, você recebeu a oportunidade de plantar uma floresta, mas agora sua vida está dedicada a uma área remota por cinco anos."
        ]
    },
    {
        enunciado: "No âmbito tecnológico:",
        alternativas: [
            "Você tem acesso a um assistente virtual que faz tudo por você, mas… ele grava todas as suas conversas e as envia para a nuvem.",
            "Recebe um aplicativo que organiza sua vida, mas… ele também decide quais eventos e compromissos você deve priorizar."
        ],
        resumoAlternativas: [
            "Parabéns, você recebeu um assistente virtual, mas suas conversas agora estão todas armazenadas na nuvem.",
            "Parabéns, você recebeu um aplicativo organizador, mas ele decide o que é mais importante na sua vida."
        ]
    },
    {
        enunciado: "No âmbito social:",
        alternativas: [
            "Você se torna uma celebridade instantânea, mas… deve viver sob constante vigilância e nunca ter privacidade.",
            "Recebe uma amizade influente, mas… precisa estar sempre disponível para essa pessoa, a qualquer momento."
        ],
        resumoAlternativas: [
            "Parabéns, você se tornou uma celebridade, mas sua vida agora é constantemente vigiada e você não tem privacidade.",
            "Parabéns, você ganhou uma amizade influente, mas sua vida agora gira em torno das necessidades dessa pessoa."
        ]
    },
    {
        enunciado: "No âmbito ambiental:",
        alternativas: [
            "Você ganha um sistema de irrigação automatizado para sua horta, mas… só pode cultivar plantas nativas da região.",
            "Recebe uma casa ecológica na floresta, mas… deve viver sem eletricidade ou internet por cinco anos."
        ],
        resumoAlternativas: [
            "Parabéns, você ganhou um sistema de irrigação automatizado, mas agora só pode cultivar plantas nativas.",
            "Parabéns, você ganhou uma casa ecológica na floresta, mas deve viver desconectado e sem eletricidade por cinco anos."
        ]
    }
];

let atual = 0;
let escolhas = [];

// Função para mostrar as perguntas
function mostraPerguntas() {
    const perguntaAtual = perguntas[atual];
    caixaperguntas.textContent = perguntaAtual.enunciado;

    caixaalternativas.innerHTML = '';

    perguntaAtual.alternativas.forEach((alternativa, index) => {
        const botao = document.createElement('button');
        botao.textContent = alternativa;
        botao.addEventListener('click', () => {
            escolhas.push(perguntaAtual.resumoAlternativas[index]);
            proximaPergunta();
        });
        caixaalternativas.appendChild(botao);
    });
}

// Função para mostrar a próxima pergunta
function proximaPergunta() {
    atual++;
    if (atual < perguntas.length) {
        mostraPerguntas();
        caixaresultados.innerHTML = ''; // Limpa o conteúdo de resultados ao transitar
        botaoReiniciar.style.display = 'none'; 
    } else {
        mostraResultados();
    }
}

// Função para mostrar os resultados
function mostraResultados() {
    titulo.textContent = "Suas escolhas foram:";
    caixaresultados.innerHTML = '<ul>';

    // Remove o botão de reinício para garantir que apenas as escolhas sejam mostradas
    botaoReiniciar.style.display = 'none'; 

    // Exibe as escolhas feitas
    escolhas.forEach((escolha) => {
        caixaresultados.innerHTML += `<li>${escolha}</li>`;
    });

    caixaresultados.innerHTML += '</ul>';

    // Mostra o botão de reinício apenas após mostrar os resultados
    botaoReiniciar.style.display = 'block';
}

// Função para reiniciar o questionário
botaoReiniciar.addEventListener('click', () => {
    atual = 0;
    escolhas = [];
    titulo.textContent = "VOCÊ DECIDE:";
    mostraPerguntas();
    caixaresultados.innerHTML = ''; // Limpa o conteúdo de resultados ao reiniciar
    botaoReiniciar.style.display = 'none'; 
});

mostraPerguntas();
