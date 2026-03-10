let leftButton = document.querySelector(".left"),
    rightButton = document.querySelector(".right"),
    screen = document.querySelector(".twoOneCenter"),
    cardsField = screen.querySelector("#cards"),
    card = cardsField.querySelector(".card"),
    currentPosition = 0,
    cardWidth = card.offsetWidth,
    gap = getComputedStyle(cardsField).columnGap;

    leftButton.addEventListener("click", fieldShift);
    rightButton.addEventListener("click", fieldShift);

    function fieldShift(e) {
      let shift = +cardWidth + +gap.slice(0,-2),
          max = cardsField.offsetWidth - screen.offsetWidth;
      
      if(e.currentTarget === leftButton, currentPosition != 0){
        currentPosition += shift;        
      }
      if(e.currentTarget === rightButton, currentPosition != max){
        currentPosition -= shift;
      }
      cardsField.style.transform = `translateX(${currentPosition}px)`;
    }