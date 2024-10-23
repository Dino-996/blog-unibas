export class Articolo {

    id: number
    titolo: string
    sottotitolo: string
    cover: string
    contenuto: string
    autore: string
    dataCreazione: string

    constructor(id: number, titolo: string, sottotitolo: string, cover: string, contenuto: string, autore: string, dataCreazione: string) {
        this.id = id;
        this.titolo = titolo;
        this.sottotitolo = sottotitolo;
        this.cover = cover;
        this.autore = autore;
        this.dataCreazione = dataCreazione;
    }

    getId(): number {
        return this.id;
    }

    getTitolo(): string {
        return this.titolo;
    }

    getSottotitolo(): string {
        return this.sottotitolo;
    }

    getCover(): string {
        return this.cover;
    }

    getAutore(): string {
        return this.autore;
    }

    getDataCreazione(): string {
        return this.dataCreazione;
    }

    toString(): string {
        let concat: Array<string>;
        concat.push(this.id.toString());
        concat.push(this.titolo);
        concat.push(this.sottotitolo);
        concat.push(this.cover);
        concat.push(this.autore);
        concat.push(this.dataCreazione);
        return concat.join("").trim();
    }

}