let leftButton = document.querySelector(".left"),
    rightButton = document.querySelector(".right"),
    screen = document.querySelector(".twoOneCenter"),
    cardsField = screen.querySelector("#cards"),
    card = cardsField.querySelector(".card"),
    currentPosition = 0;

    leftButton.addEventListener("click", fieldShift);
    rightButton.addEventListener("click", fieldShift);

    function fieldShift(e) {
      cardWidth = card.offsetWidth;
      gap = getComputedStyle(cardsField).columnGap;
      shift = +cardWidth + +gap.slice(0,-2);
      
      
      if(e.currentTarget === leftButton){
        currentPosition += shift;        
      }
      if(e.currentTarget === rightButton){
        currentPosition -= shift;
      }
      cardsField.style.transform = `translateX(${currentPosition}px)`;
    }