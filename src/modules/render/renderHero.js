import { TITLE } from "../const";
import { createElement } from "../createElement";


const container = createElement('div',{
    className: 'container'
});

const content = createElement('div', {
    className: 'hero__content',
}, {
    parent: container
});

const titleElem = createElement('h2', {
    className: 'hero__title',
}, {
    parent: content,
});

const heroLink = createElement('a', {
    className: 'hero__link',
    textContent: 'Перейти'
}, {
    parent: content,
});

export const renderHero = (gender) =>{
    const hero = document.querySelector('.hero');

    if (!gender){
        hero.style.display = 'none';
        return;
    }

    hero.style.display = '';
    hero.className = `hero hero__${gender}`;
    hero.append(container);

    titleElem.textContent = TITLE[gender].title;
    heroLink.href = `#/product/${TITLE[gender].id}`;




    // export const renderHero = (gender) =>{
    //     const hero = document.querySelector('.hero');
    
    //     hero.textContent = ''
    
    //     const container = createElement('div', {
    //         className: 'container',
    //     }, {
    //         parent: hero,
    //     });

    // hero.innerHTML = `
    // <div class="container">
    //     <div class="hero__content">
    //       <h2 class="hero__title">Новая коллекция Бюстгальтер-балконет </h2>
    //       <a href="#" class="hero__link">Перейти</a>
    //     </div>
    //   </div>
    // `;

}