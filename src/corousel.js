let screen = document.querySelector(".screen2"),
    content = document.querySelector(".cards2"),
    slider = document.querySelector(".divSlider"),
    button = document.querySelector(".leave > .bigButton > .coverLink"),
    no_foto = "url('./src/no_foto.png')";
    cou = 0;


let sliderCards = [
    {
        foto: null, 
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
        foto: './src/Fredericka_M.png', 
        name: "Fredericka Michelin", 
        local: "Austria", 
        wen: "Yesterday", 
        say: `The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.
The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met.
The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.
`
    },
    {
        foto: './src/Mila_R.png', 
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
        let div, divBack, fotoRing, local, bigName, message;
        divBack = document.createElement("div");
        div = document.createElement("div");
        div.classList.add("card");
        fotoRing = document.createElement("div");
        if(this.foto){
            fotoRing.style.backgroundImage = `url('${this.foto}')`;
        } else {
            fotoRing.style.backgroundImage = no_foto;
        }        
        fotoRing.classList.add("fotoRing");
        bigName = document.createElement("h4");
        bigName.innerText = this.name;
        local = document.createElement("p");
        local.innerHTML = "Local " + this.local + " " + " &#8226 " + " " + this.wen;
        local.classList.add("local");
        message = document.createElement("p");
        message.innerText = this.say;
        divBack.append(div);
        div.append(fotoRing);
        div.append(bigName);
        div.append(local);
        div.append(message);
        return divBack;
    }
}

sliderCards.forEach((item) => {
    let div = new SliderCards(item);
    let card = div.buildCards();
    content.append(card);
    cou += 1;
});