let cardsContainer = document.getElementById('cards');

class Card {
    constructor({name, picture, native}){
        this.name = name;
        this.picture = picture;
        this.native = native;
    }
    
    buildNode(){
        let figure, img, figcaption;
        figure = document.createElement('figure');
        img = document.createElement('img');
        img.src = this.picture;
        figcaption = document.createElement('figcaption');
        figcaption.innerHTML = `<span>${this.name}</span><br>${this.native}`;
        
        figure.append(img);
        figure.append(figcaption);
        figure.classList.add('card');
        return figure;
    }
}

let cards = [
    {name: 'giant Pandas', picture: './src/giant_pandas.png', native: 'Native to Southwest China'},
    {name: 'Gorillas', picture: './src/gorillas.png', native: 'Native to Congo'},
    {name: 'Eagles', picture: './src/eagles.png', native: 'Native to South America'},
    {name: 'Alligators', picture: './src/alligators.png', native: 'Native to Southeastern U. S.'},
    {name: 'cheetahs', picture: './src/cheetahs.png', native: 'Native to Africa'},
    {name: 'Penguins', picture: './src/penguins.png', native: 'Native to Antarctica'},
    {name: 'Two-toed Sloth', picture: './src/two-toed_sloth.png', native: 'Mesoamerica, South America'},
];

cards.forEach((item) => {
    let card = new Card(item);
    let figure = card.buildNode();
    cardsContainer.append(figure);
});

