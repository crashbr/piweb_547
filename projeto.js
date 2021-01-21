const rangeCategorias = [
    'Lanches',
    'Brasileira',
    'Japonesa'
];

class Restaurante {

    /* Atributos 
    capacidade
    categoria
    nome
    endereço
    horario de funcionamento
    menu
    */
    // menu = [];

    constructor (
        nome, 
        categoria, 
        capacidade, 
        horario_funcionamento
    ) {
        this._nome = nome;
        this._categoria = categoria;
        this.capacidade = capacidade;
        this.horario_funcionamento = horario_funcionamento;
        this._menu = [];
    }

    get nome() {
        return this._nome;
    }

    set nome(novoNome) {
        if (typeof(novoNome) !== 'string') throw "novoNome deve ser uma string!!!";
        this._nome = novoNome;
    }

    get categoria() { return this._categoria; }

    set categoria(novaCategoria) {
        const categoriaValida = rangeCategorias.find((categoria) => {
            return categoria.toLowerCase().trim() === novaCategoria.toLowerCase().trim();
        });
        if (!categoriaValida) throw "A categoria não é uma categoria válida!";
        this._categoria = categoriaValida;
    }

    get menu() { return this._menu; }

    addToMenu (...itensCardapio) {
        const todosSaoValidos = itensCardapio.reduce((acc, item) => {
            return acc && (item instanceof ItemCardapio);
        }, true);
        if (!todosSaoValidos) throw "itemCardapio deve ser uma instância da classe ItemCardapio";
        // for (let item of itensCardapio) {
        //     if (!(item instanceof ItemCardapio)) {
        //         throw "itemCardapio deve ser uma instância da classe ItemCardapio";
        //     }
        // }
        this.menu.push(...itensCardapio);
    }

    introductionText () {
        return `Bem-vindo ao ${this.nome}!!
A ${this.categoria} mais amada!
A lotação máxima do nosso estabelecimento é de ${this.capacidade} pessoas. Mas devido à pandemia, estamos operando em 50% da capacidade: ${Math.floor(this.capacidade / 2)} pessoas.
Estaremos abertos a partir das ${this.horario_funcionamento} para atendê-lo.`;
    }

    getFormattedMenu () {
        const formattedMenu = this.menu.reduce((currentText, currentItem, currentIdx) => {
            return currentText + `${currentIdx + 1} - ${currentItem.toItemString()}\n`;
        }, '');
        return formattedMenu;
    }

    run () {
        console.log(this.introductionText());
        console.log(this.getFormattedMenu());
    }
}

class ItemCardapio {

    constructor (nome, preco, categoria) {
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
    }

    toItemString () {
        return `${this.nome} ------------ ${this.preco}
${this.categoria}`;
    }
}

const restaurante = new Restaurante(123, 'Cafeteria', 50, '14:00');
const pizza1 = new ItemCardapio('Calabresa', 35.00, 'Pizza');
const pizza2 = new ItemCardapio('Abobrinha', 33.00, 'Pizza');
// restaurante.categoria = ' lanches ';
restaurante.addToMenu(pizza1, 'pizza2');
restaurante.run();
// console.log(restaurante);




















// const restaurante2 = new Restaurante('Pietro\'s Bar', 'Adega', 200, '20:00');
// const pizza1 = new ItemCardapio('Calabresa', 35.00, 'Pizza');
// const pizza2 = new ItemCardapio('Abobrinha', 33.00, 'Pizza');
// const burguer1 = new ItemCardapio('Monstro Burguer', 17.00, 'Lanches');

// restaurante.addToMenu(pizza1, pizza2, burguer1);
// // restaurante.addToMenu(pizza2);
// // restaurante.addToMenu(burguer1);

// restaurante.run();
// restaurante._nome = 'Pietro';
// restaurante.nome = 'Pietro';
// console.log(restaurante);