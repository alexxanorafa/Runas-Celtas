    // ============ SISTEMA DE MENU ============
    const menuIcon = document.getElementById("menuIcon");
    const menu = document.getElementById("menu");

    menuIcon.addEventListener("click", function(e) {
        e.stopPropagation();
        menu.classList.toggle("active");
        menuIcon.classList.toggle("active");
    });

    document.addEventListener("click", function(e) {
        if (!menu.contains(e.target) && !menuIcon.contains(e.target)) {
            menu.classList.remove("active");
            menuIcon.classList.remove("active");
        }
    });

    document.querySelectorAll(".menu-item").forEach(item => {
        item.addEventListener("mouseenter", function() {
            this.style.transform = "translateY(-3px)";
        });
        item.addEventListener("mouseleave", function() {
            this.style.transform = "translateY(0)";
        });
    });

const runas = [
    { 
        symbol: "ᚁ", 
        title: "Beith", 
        meaning: "Beith representa novos começos, renascimento e purificação. Está ligada à bétula, uma árvore associada à renovação e ao crescimento. Simboliza a clareza mental e a necessidade de deixar o passado para trás, abrindo espaço para novas oportunidades."
    },
    { 
        symbol: "ᚂ", 
        title: "Luis", 
        meaning: "Luis é a runa da proteção espiritual, intuição e cura. Está associada ao sorveira, que na tradição celta protege contra energias negativas. Indica um momento de fortalecimento psíquico e desenvolvimento da percepção intuitiva."
    },
    { 
        symbol: "ᚃ", 
        title: "Fearn", 
        meaning: "Fearn está ligada ao amieiro, árvore que cresce na água e simboliza força interior, resistência e adaptação. Essa runa representa a habilidade de se manter firme diante dos desafios, utilizando sabedoria emocional para superá-los."
    },
    { 
        symbol: "ᚄ", 
        title: "Saille", 
        meaning: "Saille, associada ao salgueiro, simboliza a conexão com a espiritualidade e o mundo subconsciente. Representa sonhos, visões e a capacidade de se adaptar às mudanças emocionais e espirituais."
    },
    { 
        symbol: "ᚅ", 
        title: "Nion", 
        meaning: "Nion é a runa das transformações e dos ciclos da vida. Ligada ao freixo, representa crescimento e maturidade espiritual. Essa runa sugere a necessidade de aceitar as mudanças naturais da vida e aprender com elas."
    },
    { 
        symbol: "ᚆ", 
        title: "Uath", 
        meaning: "Uath representa mistério, transição e proteção contra forças desconhecidas. Associada ao espinheiro, essa runa simboliza tanto desafios inesperados quanto a proteção espiritual que nos guia nesses momentos."
    },
    { 
        symbol: "ᚇ", 
        title: "Duir", 
        meaning: "Duir está ligada ao carvalho, uma árvore símbolo de força, estabilidade e resistência. Essa runa traz uma mensagem de perseverança e coragem para enfrentar qualquer obstáculo, indicando a importância da paciência e do conhecimento ancestral."
    },
    { 
        symbol: "ᚈ", 
        title: "Tinne", 
        meaning: "Tinne é a runa da coragem, determinação e ação. Representa o azevinho, uma árvore de proteção e força. Essa runa encoraja a tomar atitudes e agir com confiança para superar desafios e conquistar objetivos."
    },
    { 
        symbol: "ᚉ", 
        title: "Coll", 
        meaning: "Coll está associada à aveleira e simboliza a sabedoria, a intuição e o conhecimento profundo. Essa runa sugere um momento de aprendizado e descoberta, indicando que respostas importantes podem surgir através da introspecção e da conexão espiritual."
    },
    { 
        symbol: "ᚊ", 
        title: "Quert", 
        meaning: "Quert representa cura, equilíbrio e renovação. Ligada à macieira, uma árvore sagrada para os celtas, essa runa simboliza a necessidade de buscar harmonia na vida, cuidar da saúde e encontrar momentos de paz."
    },
    { 
        symbol: "ᚋ", 
        title: "Muin", 
        meaning: "Muin simboliza comunicação, autoexpressão e verdade. Representa a videira, que na tradição celta está associada à criatividade e ao poder das palavras. Essa runa indica a importância de falar a verdade e se expressar de forma clara e sincera."
    },
    { 
        symbol: "ᚌ", 
        title: "Gort", 
        meaning: "Gort está ligada à hera e simboliza prosperidade, abundância e crescimento contínuo. Representa a capacidade de superar dificuldades e expandir-se, tanto material quanto espiritualmente."
    },
    { 
        symbol: "ᚍ", 
        title: "Ngetal", 
        meaning: "Ngetal é a runa da cura física, renovação e bem-estar. Ligada ao junco, simboliza a flexibilidade e a capacidade de se curar tanto no corpo quanto na mente. Indica um momento de recuperação e fortalecimento."
    },
    { 
        symbol: "ᚎ", 
        title: "Straif", 
        meaning: "Straif representa desafios, crescimento e aprendizado através da adversidade. Associada ao sabugueiro, essa runa sugere a necessidade de enfrentar dificuldades como oportunidades de transformação e amadurecimento."
    },
    { 
        symbol: "ᚏ", 
        title: "Ruis", 
        meaning: "Ruis está ligada à amoreira e simboliza finalizações, introspecção e preparação para novos ciclos. Indica um momento de reflexão profunda, encerramento de ciclos e renovação espiritual."
    },
    { 
        symbol: "ᚐ", 
        title: "Ailm", 
        meaning: "Ailm representa força espiritual, visão e conexão com o divino. Associada ao pinheiro, essa runa simboliza crescimento elevado e clareza para enxergar o caminho certo na vida."
    },
    { 
        symbol: "ᚑ", 
        title: "Onn", 
        meaning: "Onn simboliza mudanças inesperadas, flexibilidade e adaptação. Ligada ao tojo, essa runa sugere que a vida pode trazer reviravoltas, mas que a capacidade de se ajustar a novas realidades será a chave para o sucesso."
    },
    { 
        symbol: "ᚒ", 
        title: "Ur", 
        meaning: "Ur representa resiliência, transformação e ligação com a terra. Associada ao urze, essa runa indica a necessidade de se conectar com a natureza e encontrar força nos ciclos naturais da vida."
    },
    { 
        symbol: "ᚓ", 
        title: "Eadha", 
        meaning: "Eadha simboliza superação de obstáculos, renascimento e renovação. Ligada ao álamo, essa runa sugere que momentos difíceis estão chegando ao fim e que novas oportunidades estão a caminho."
    },
    { 
        symbol: "ᚔ", 
        title: "Idho", 
        meaning: "Idho é a runa do fim de um ciclo, da conexão com os ancestrais e do renascimento espiritual. Representa o teixo, uma árvore que simboliza vida após a morte e transformação profunda. Indica que é hora de deixar para trás o que não serve mais e seguir para um novo caminho com sabedoria."
    }
];


function sortearRunas() {
    const opcao = document.getElementById("leitura-opcao").value;
    const quantidade = opcao === "cruz" ? 7 : parseInt(opcao, 10);
    const selecionadas = runas.sort(() => 0.5 - Math.random()).slice(0, quantidade);

    document.getElementById("runas-container").innerHTML = selecionadas.map(runa =>
        `<div class="runa">${runa.symbol}</div>`
    ).join("");

    document.getElementById("runas-meanings").innerHTML = selecionadas.map(runa =>
        `<h3>${runa.title}</h3><p>${runa.meaning}</p>`
    ).join("");
}
  
      function sortearRunas() {
        const opcao = document.getElementById("leitura-opcao").value;
        const quantidade = opcao === "cruz" ? 7 : parseInt(opcao, 10);
        const selecionadas = runas.sort(() => 0.5 - Math.random()).slice(0, quantidade);
        const container = document.getElementById("runas-container");
        const resultContainer = document.getElementById("runas-meanings");
        
        container.innerHTML = "";
        resultContainer.innerHTML = "";
  
        selecionadas.forEach(runa => {
          container.innerHTML += `<div class="runa"><div class="runa-title">${runa.symbol}</div></div>`;
          resultContainer.innerHTML += `<h3>${runa.title}</h3><p>${runa.meaning}</p>`;
        });
}
