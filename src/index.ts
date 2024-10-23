import './style.css';
import { Blog } from './models/blog';
import { Articolo } from './models/articolo';
import { ControlloArticoli } from './controls/controlloArticolo';

// Va tutto spostato nelle corrispettive viste

// Blog
const blog = new Blog('Titolo');
// Controllo articoli
const controlloArticoli = new ControlloArticoli();
const tuttiGliArticoli = controlloArticoli.getAllArticle();
console.log('Tutti gli articolo: ', tuttiGliArticoli);

async function inizializzaArticoli() {
    const articoliFiltrati = await tuttiGliArticoli;
    for (let articolo of articoliFiltrati) {
        blog.addArticolo(
            new Articolo(articolo.id,
                articolo.titolo,
                articolo.sottotitolo,
                articolo.cover,
                articolo.descrizione,
                articolo.contenuto,
                articolo.autore,
                articolo.dataCreazione)
        );
    }
    stampaArticoli();
    console.log('Numero articoli: ', blog.getListaArticoli().length);
}

inizializzaArticoli();

function apriArticolo(articolo: Articolo) {
    visualizza.innerHTML = `
            <div class="article-container">
                <button id="button-home" style="margin-bottom: 70px">
                <svg width="24" height="24" style="margin-right: 7px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M18.867 15.8321L18.873 10.0391L14.75 5.92908C13.5057 4.69031 11.4942 4.69031 10.25 5.92908L6.13599 10.0291V15.8291C6.1393 17.5833 7.56377 19.0028 9.31799 19.0001H15.685C17.438 19.0029 18.862 17.5851 18.867 15.8321Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M14 11.365C13.9846 12.1896 13.3064 12.8471 12.4817 12.8369C11.657 12.8267 10.9952 12.1526 11.0003 11.3279C11.0053 10.5031 11.6752 9.83718 12.5 9.83704C12.9015 9.84073 13.2852 10.0038 13.5665 10.2904C13.8478 10.5769 14.0037 10.9635 14 11.365V11.365Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M19.63 5.76314C19.6306 5.34892 19.2953 5.01267 18.8811 5.01209C18.4668 5.0115 18.1306 5.34682 18.13 5.76103L19.63 5.76314ZM18.874 10.0391L18.124 10.038C18.1237 10.2377 18.2031 10.4293 18.3445 10.5702L18.874 10.0391ZM19.9705 12.1912C20.2638 12.4837 20.7387 12.4829 21.0311 12.1896C21.3236 11.8963 21.3229 11.4214 21.0295 11.1289L19.9705 12.1912ZM6.66552 10.5602C6.95886 10.2678 6.95959 9.79291 6.66714 9.49957C6.3747 9.20623 5.89982 9.2055 5.60648 9.49794L6.66552 10.5602ZM3.97048 11.1289C3.67714 11.4214 3.67641 11.8963 3.96886 12.1896C4.2613 12.4829 4.73618 12.4837 5.02952 12.1912L3.97048 11.1289ZM10.5 15.1971C10.0858 15.1971 9.75 15.5329 9.75 15.9471C9.75 16.3613 10.0858 16.6971 10.5 16.6971V15.1971ZM14.5 16.6971C14.9142 16.6971 15.25 16.3613 15.25 15.9471C15.25 15.5329 14.9142 15.1971 14.5 15.1971V16.6971ZM18.13 5.76103L18.124 10.038L19.624 10.0401L19.63 5.76314L18.13 5.76103ZM18.3445 10.5702L19.9705 12.1912L21.0295 11.1289L19.4035 9.50794L18.3445 10.5702ZM5.60648 9.49794L3.97048 11.1289L5.02952 12.1912L6.66552 10.5602L5.60648 9.49794ZM10.5 16.6971H14.5V15.1971H10.5V16.6971Z" fill="currentColor"></path> </g></svg>
                    Torna alla home
                </button>
                <article>
                    <div class="container-inline">
                        <img src="${articolo.getCover()}">
                        <section>
                            <h1>${articolo.getTitolo()}</h1>
                            <p><i>${articolo.getAutore()}</i> - ${articolo.getDataCreazione()}</p>
                        </section>
                    </div>
                    <section>
                        <h2 style="margin-top: 20px">${articolo.getSottotitolo()}</h2>
                        <p>${articolo.getContenuto()}</p>
                    </section>
                </article>
            </div>
        `;

    const buttonHome = document.querySelector('#button-home') as HTMLElement;

    buttonHome.onclick = () => {
        window.location.href = '/';
    }
}

const visualizza = document.querySelector('#visualizza-articoli') as HTMLElement;
function stampaArticoli() {

    for (let articolo of blog.getListaArticoli()) {
        const buttonId = articolo.getId();
        // Se qua usavamo innerHTML avremmo sovrascritto totalmente il DOM ad ogni iterazione
        visualizza.insertAdjacentHTML('beforeend', `
        <div class="container-inline">
            <img src="${articolo.getCover()}">
            <div class="p-4">
                <h1>${articolo.getTitolo()}</h1>
                <h2>${articolo.getSottotitolo()}</h2>
                <p>${articolo.getDescrizione()}</p>
            <div>
            <p><i>${articolo.getAutore()}</i> - ${articolo.getDataCreazione()}</p>
            <div class="container-button">
                <button id="${buttonId}">
                    Visualizza articolo
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="margin-left: 7px;">
                        <path d="M10 7L15 12L10 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </button>
            <div>
        <div>
        `)

        const openArticle = document.getElementById(buttonId.toString());

        openArticle.onclick = (): void => {
            console.log('Button work - ', buttonId);
            apriArticolo(articolo);
        }
    }
}
