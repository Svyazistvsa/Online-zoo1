let leftButton = document.querySelector(".left"),
    rightButton = document.querySelector(".right"),
    screen = document.querySelector(".twoOneCenter"),
    cardsField = screen.querySelector("#cards"),
    card = cardsField.querySelector(".card");

    leftButton.addEventListener("click", fieldShift);
    rightButton.addEventListener("click", fieldShift);

    function fieldShift(e) {
      cardWidth = card.offsetWidth;
      gap = getComputedStyle(cardsField).columnGap;
      shift = +cardWidth + +gap.slice(0,-2);
      
      if(e.currentTarget === leftButton){
        cardsField.style.right = +cardsField.style.right.slice(0,-2) + shift+"px";
      }
      if(e.currentTarget === rightButton){
        cardsField.style.right = +cardsField.style.right.slice(0, -2) - shift+"px";
      }
      
    }