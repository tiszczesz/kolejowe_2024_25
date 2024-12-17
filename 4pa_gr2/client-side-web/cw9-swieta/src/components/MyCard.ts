import { Recipe } from "../dane/Services/Data";

export const MyCard = (recipe: Recipe):HTMLDivElement => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.width = '26rem';

    const img = document.createElement('img');
    img.src = recipe.img!;
    img.classList.add('card-img-top');
    img.alt = recipe.name;
    card.appendChild(img);

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    
    card.appendChild(cardBody);

    const title = document.createElement('h5');
    title.classList.add('card-title');
    title.textContent = recipe.name;
    cardBody.appendChild(title);

    const description = document.createElement('p');
    description.classList.add('card-text');
    description.textContent = recipe.description;
    cardBody.appendChild(description);

    const list = document.createElement('ul');
    list.classList.add('list-group');
    for(const ingredient of recipe.ingredient){
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        li.textContent = ingredient;
        list.appendChild(li);
    }
    cardBody.appendChild(list);

    const price = document.createElement('p');
    price.classList.add('card-text');
    price.textContent = `Cena: ${recipe.price} zł`;
    price.style.fontWeight = 'bold';
    price.style.color = 'green';
    cardBody.appendChild(price);


    return card;
};