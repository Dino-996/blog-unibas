import './style.css';
import { Blog } from './models/blog';
import { Articolo } from './models/articolo';

// Bottone
const test = document.querySelector('#test') as HTMLElement;
test.textContent = 'Test button';
test.innerHTML += `
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="margin-left: 7px;">
        <path d="M10 7L15 12L10 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
`;

test.onclick = (): void => {
    console.log('Button work');
}

// h1
const titolo = document.querySelector('#titolo') as HTMLElement;
titolo.textContent = 'Titolo';

// h2
const sottotitolo = document.querySelector('#sottotitolo') as HTMLElement;
sottotitolo.textContent = 'Sottotitolo';

// a
const link = document.querySelector('#link') as HTMLElement;
link.textContent = 'anchor';
link.setAttribute('href', 'https://www.google.com');
link.setAttribute('target', '_blank');

// p 
const paragrafo = document.querySelector('#paragrafo') as HTMLElement;
paragrafo.textContent = 'paragrafo';

// Blog
const blog = new Blog('Titolo');
blog.addArticolo(new Articolo(0, 'Titolo', 'Sottotitolo', 'Cover', 'Contenuto', 'Autore', new Date().toLocaleDateString('it-it', { year: "numeric", month: "2-digit", day: "numeric" })));
blog.addArticolo(new Articolo(1, 'Titolo', 'Sottotitolo', 'Cover', 'Contenuto', 'Autore', new Date().toLocaleDateString('it-it', { year: "numeric", month: "2-digit", day: "numeric" })));
blog.addArticolo(new Articolo(2, 'Titolo', 'Sottotitolo', 'Cover', 'Contenuto', 'Autore', new Date().toLocaleDateString('it-it', { year: "numeric", month: "2-digit", day: "numeric" })));
console.log('Articoli: ', blog.getListaArticoli());

// blog-container
const blogContainer = document.querySelector('.blog-container');

// button-container
const buttonContainer = document.querySelector('.button-container');

