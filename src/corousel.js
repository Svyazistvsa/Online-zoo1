let screen = document.querySelector(".screen2"),
    content = document.querySelector(".cards2"),
    slider = document.querySelector(".divSlider"),
    button = document.querySelector(".leave > .bigButton > .coverLink"),
    cou = 0;


let sliderCards = [
    {
        foto: null, // Исправлено: null вместо none
        name: "Michael John", 
        local: "Austria", 
        wen: "Today", 
        say: `The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.
The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.
`
    },
    {
        foto: './src/Oskar_S.png', 
        name: "Oskar Samborsky", 
        local: "Austria", 
        wen: "Yesterday", 
        say: `Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. 
The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.

The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.
`
    },
    {
        foto: './src/Fredericka_M.png', // Добавлено расширение файла
        name: "Fredericka Michelin", 
        local: "Austria", 
        wen: "Yesterday", 
        say: `The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.
The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met.
The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.
`
    },
    {
        foto: './src/Mila_R.png', // Добавлено расширение файла
        name: "Mila Riksha", 
        local: "Austria", 
        wen: "Yesterday", 
        say: `My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.
The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.
`
    }
];

class SliderCards {
    constructor ({foto, name, local, wen, say}){
        this.foto = foto;
        this.name = name;
        this.local = local;
        this.wen = wen;
        this.say = say;
    }

    buildCards(){
        let div, fotoRing, local, bigName, message;
        div = document.createElement('div');
        div.classList.add("card");
        fotoRing = document.createElement('div');
        fotoRing.style.backgroundImage = `url('${this.foto}')`;
        fotoRing.classList.add("fotoRing");
        bigName = document.createElement("h2");
        bigName.innerText = this.name;
        local = document.createElement("p");
        local.innerText = "Local " + this.local + " &middot " + this.wen;
        message = document.createElement("p");
        message.innerText = this.say;
        div.append(fotoRing);
        div.append(bigName);
        div.append(local);
        div.append(message);
        return div;
    }
}

sliderCards.forEach((item) => {
    let div = new SliderCards(item);
    let card = div.buildCards();
    content.append(card);
    cou += 1;
})