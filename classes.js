/**
 * Classe Caso representa um caso paranormal.
 * @class
 */
class Caso {

    /**
     * Construtor da classe Caso.
     * @constructor
     * @param {string} nomeCaso - Nome do caso paranormal.
     * @param {string} local - O local onde o caso ocorreu.
     * @param {string} nomeVitima - O nome da vítima envolvida no caso.
     * @param {string} acontecimento - Descrição do acontecimento paranormal.
     * @param {Date} data - Data em que o caso ocorreu.
     * @param {string} resolucao - Resolução ou desfecho do caso.
     * @param {string} espirito - Nome do espírito envolvido, se aplicável.
     */
    constructor(nomeCaso, local, nomeVitima, acontecimento, data, resolucao, espirito) {
        this.nomeCaso = nomeCaso;
        this.local = local;
        this.nomeVitima = nomeVitima;
        this.acontecimento = acontecimento;
        this.data = data;
        this.resolucao = resolucao;
        this.espirito = espirito;
    }
}

/**
 * Classe Vitima representa uma vítima envolvida em um caso paranormal.
 * Herda propriedades da classe Caso.
 * @class
 */
class Vitima extends Caso {

    /**
     * Construtor da classe Vitima.
     * @constructor
     * @param {string} nomeVitima - O nome da vítima.
     * @param {number} idade - Idade da vítima.
     * @param {string} status - Status da vítima após o acontecimento.
     * @param {string} relato - Relato da vítima sobre o incidente.
     */
    constructor(nomeVitima, idade, status, relato) {
        // Chama o construtor da classe pai (Caso) com o nome da vítima.
        super(nomeVitima);
        this.idade = idade;
        this.status = status;
        this.relato = relato;
    }
}

/**
 * Classe Youkai representa um espírito envolvido em um caso paranormal.
 * Herda propriedades da classe Caso.
 * @class
 */
class Youkai extends Caso {

    /**
     * Construtor da classe Youkai.
     * @constructor
     * @param {string} espirito - Nome do espírito.
     * @param {string} rank - Rank ou nível de poder do espírito.
     * @param {string} natureza - Natureza ou tipo do espírito.
     */
    constructor(espirito, rank, natureza) {
        // Chama o construtor da classe pai (Caso) com o nome do espírito.
        super(espirito);
        this.rank = rank;
        this.natureza = natureza;
    }
}
