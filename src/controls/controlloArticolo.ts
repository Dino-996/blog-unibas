import { collection, getDocs } from 'firebase/firestore'
import { db } from '../plugin/firebase';

interface Data {
    [key: string]: any,
}

export class ControlloArticoli {

    private allArticle: Array<Data> = [];

    public constructor() { }

    // Chiamata al database firebase per prendere gli articoli
    public async getAllArticle() {
        const docs = await getDocs(collection(db, "test"));
        docs.forEach((doc) => {
            const data = doc.data();
            this.allArticle.push({ id: doc.id, ...data });
        });
        console.log(this.allArticle);
        return this.allArticle;
    }

}