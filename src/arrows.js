let leftButton = document.querySelector(".left"),
    rightButton = document.querySelector(".right"),
    screen = document.querySelector(".twoOneCenter"),
    cardsField = screen.querySelector("#cards"),        
    currentPosition = 0;   

    leftButton.addEventListener("click", fieldShift);
    rightButton.addEventListener("click", fieldShift);

    function fieldShift(e) {
      let cards = cardsField.querySelectorAll('.card'),
          cardWidth = cards[0].offsetWidth,  
          gap = parseInt(getComputedStyle(cardsField).columnGap, 10),        
          shift = cardWidth + gap,
          columnCount = parseInt(document.documentElement.style.getPropertyValue("--cards_columns"), 10),          
          cardsFieldWidth = cardWidth * columnCount + gap * (columnCount - 1),
          max = screen.offsetWidth - cardsFieldWidth;
      
      if(e.currentTarget === leftButton && currentPosition != 0){
        currentPosition += shift;        
      }
      if(e.currentTarget === rightButton && currentPosition != max && !!(1 - Math.sign(max))){
        currentPosition -= shift;
      }
      cardsField.style.transform = `translateX(${currentPosition}px)`;
    }