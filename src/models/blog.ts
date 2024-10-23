import { Articolo } from './articolo'

export class Blog {

    private titolo: string;
    private listaArticoli: Array<Articolo>;

    constructor(titolo: string) {
        this.titolo = titolo;
        this.listaArticoli = [];
    }

    getTitolo(): string {
        return this.titolo;
    }

    getListaArticoli(): Array<Articolo> {
        return this.listaArticoli;
    }

    addArticolo(articolo: Articolo): void {
        this.listaArticoli.push(articolo);
    }
}