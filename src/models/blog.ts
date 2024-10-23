import { Articolo } from './articolo'

export class Blog {

    titolo: string
    listaArticoli: Array<Articolo>

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

    getArticolo(articolo: Articolo): Articolo {
        let articoloUguale: Articolo;
        for (let articoloFiltrato of this.listaArticoli) {
            try {
                if (articoloFiltrato.id === articolo.id) {
                    articoloUguale = articolo;
                }
            } catch (error) {
                console.warn('Errore nel metodo getArticolo: ', error);
            }
        }
        return articoloUguale;
    }

}