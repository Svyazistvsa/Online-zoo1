let cardsContainer = document.getElementById('cards');

class Card {
    constractor({name, picture, native}){
        this.name = name;
        this.picture = picture;
        this.native = native;
    }
    
    buildNode(){
        let figure, img, figcaption;
        figure = document.createElement('figure');
        img = document.createElement('img').src = this.picture;
        figcaption = document.createElement('figcaption').innerHTML = `<span>${this.name}<span><br>${this.native}`;
        
        figure.append(img);
        figure.append(figcaption);
        figure.classList.add('card');
        return figure;
    }

    see(){
        alert(this.name);
    }
}

let cards = [
    {name: 'giant Pandas', picture: 'url(./giant_pandas.png)', native: 'Native to Southwest China'},
    {name: 'Gorillas', picture: 'url(./gorillas.png)', native: 'Native to Congo'},
    {name: 'Eagles', picture: 'url(./eagles.png)', native: 'Native to South America'},
    {name: 'Alligators', picture: 'url(./alligators.png)', native: 'Native to Southeastern U. S.'},
    {name: 'cheetahs', picture: 'url(./cheetahs.png)', native: 'Native to Africa'},
    {name: 'Penguins', picture: 'url(./penguins.png)', native: 'Native to Antarctica'},
    {name: 'Two-toed Sloth', picture: 'url(./two-toed_sloth.png)', native: 'Mesoamerica, South America'},
];

cards.forEach((item) => {
    let card = new Card(item);
    card.see();
    let figure = card.buildNode();
    cardsContainer.append(figure);
}, );

