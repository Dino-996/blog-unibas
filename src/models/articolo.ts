export class Articolo {

    private id: number;
    private titolo: string;
    private sottotitolo: string;
    private cover: string;
    private descrizione: string;
    private contenuto: string;
    private autore: string;
    private dataCreazione: string;

    public constructor(id: number, titolo: string, sottotitolo: string, cover: string, descrizione:string, contenuto: string, autore: string, dataCreazione: string) {
        this.id = id;
        this.titolo = titolo;
        this.sottotitolo = sottotitolo;
        this.cover = cover;
        this.descrizione = descrizione;
        this.contenuto = contenuto;
        this.autore = autore;
        this.dataCreazione = dataCreazione;
    }

    public getId(): number {
        return this.id;
    }

    public getTitolo(): string {
        return this.titolo;
    }

    public getSottotitolo(): string {
        return this.sottotitolo;
    }

    public getCover(): string {
        return this.cover;
    }

    public getDescrizione():string {return this.descrizione;}

    public getContenuto(): string {
        return this.contenuto;
    }

    public getAutore(): string {
        return this.autore;
    }

    public getDataCreazione(): string {
        return this.dataCreazione;
    }

    public toString(): string {
        let concat: Array<string>;
        concat.push(this.id.toString());
        concat.push(this.titolo);
        concat.push(this.sottotitolo);
        concat.push(this.cover);
        concat.push(this.descrizione);
        concat.push(this.contenuto);
        concat.push(this.autore);
        concat.push(this.dataCreazione);
        return concat.join("").trim();
    }

}