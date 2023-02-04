class Persona{
    nome: string;
    genere: string;
    nascita: Date;
    morte: Date;
    religione: String;
    figli: Persona[];

    constructor(nome: string, genere: string, religione: string, nascita: Date, figli?: Persona[]){
        this.nome = nome;
        this.genere = genere;
        this.religione = religione;
        this.nascita = nascita;
    }

    eredi(){
        
    }
}