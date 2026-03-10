let cardsContainer = document.getElementById('cards');

class Card {
    constructor({name, picture, native, food}){
        this.name = name;
        this.picture = picture;
        this.native = native;
        this.food = food;
    }
    
    buildNode(){
        let figure, img, figcaption, foodIcon;
        figure = document.createElement('figure');
        img = document.createElement('img');
        img.src = this.picture;
        figcaption = document.createElement('figcaption');
        figcaption.innerHTML = `<span>${this.name}</span><br>${this.native}`;
        foodIcon = document.createElement('img');
        foodIcon.src = this.food;
        foodIcon.classList.add('foodIcon');
        if(this.food == "./src/meat.svg") foodIcon.classList.add('meat');
        figure.append(img);
        figure.append(figcaption);
        figure.append(foodIcon);
        figure.classList.add('card');
        return figure;
    }
}

let cards = [
    {name: 'giant Pandas', picture: './src/giant_pandas.png', native: 'Native to Southwest China', food: './src/banana.svg'},
    {name: 'Gorillas', picture: './src/gorillas.png', native: 'Native to Congo', food: './src/banana.svg'},
    {name: 'Eagles', picture: './src/eagles.png', native: 'Native to South America', food: './src/meat.svg'},
    {name: 'Alligators', picture: './src/alligators.png', native: 'Native to Southeastern U. S.', food: './src/meat.svg'},
    {name: 'cheetahs', picture: './src/cheetahs.png', native: 'Native to Africa', food: './src/meat.svg'},
    {name: 'Penguins', picture: './src/penguins.png', native: 'Native to Antarctica', food: './src/meat.svg'},
    {name: 'Two-toed Sloth', picture: './src/two-toed_sloth.png', native: 'Mesoamerica, South America', food: './src/banana.svg'},
];

cards.forEach((item) => {
    let card = new Card(item);
    let figure = card.buildNode();
    cardsContainer.append(figure);
});

console.log('cards.js loaded');
// после создания карточек:
console.log('Cards rendered:', document.querySelectorAll('.card').length);