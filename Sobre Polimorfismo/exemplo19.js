class Conta{
    constructor(){
        this.saldo = 0
    }
    get Saldo(){return this.saldo}
    set Saldo(pSaldo) {this.saldo = pSaldo}

    Imprimir(){
        return "Saldo:" + this.saldo;
    }
}
class Corrente extends Conta{
    constructor (pLimite){
        super()
        this.limite = pLimite
    }

    get Limite(){return this.limite}
    set Limite(pLimite) {this.limite = pLimite}
    Imprimir(){
       /*let retorno
        retorno = super.Imprimir();
        retorno = retorno + "\nLimite:" + this.limite;
        return retorno
        */
       return super.Imprimir() + "\nLimite: " + this.limite //metodo de sobre escrita polimorfismo serve para que tenhamos uma forma mais rezumida e objetiva de realizar o mesmo procedimento
    }
}
var obj_corrente = new Corrente(300)
console.log(obj_corrente.Imprimir())
