document.addEventListener('DOMContentLoaded', function() {
  let leftButton = document.querySelector(".left"),
    rightButton = document.querySelector(".right"),
    screen = document.querySelector(".twoOneCenter"),
    cardsField = screen.querySelector("#cards"),        
    currentPosition = 0,
    cardArr, shift, gap, cardsFieldWidth, columnCount;

    if (!leftButton || !rightButton || !cardsField || cards.length === 0) {
      console.error('Один из элементов не найден');
      return;
    }

  updateDimensions();

  leftButton.addEventListener("click", fieldShift);
  rightButton.addEventListener("click", fieldShift);

  function fieldShift(e) {
  
    let max = screen.offsetWidth - cardsFieldWidth;
   
    if(e.currentTarget === leftButton && currentPosition != 0){
      currentPosition += shift;        
    }
    if(e.currentTarget === rightButton && currentPosition != max && !!(1 - Math.sign(max))){
      currentPosition -= shift;
    }
    cardsField.style.transform = `translateX(${currentPosition}px)`;
  }

  function updateDimensions() {

    cardArr = cardsField.querySelectorAll('.card');
    cardWidth = parseInt(getComputedStyle(cardArr[0]).width, 10);  
    gap = parseInt(getComputedStyle(cardsField).columnGap, 10);        
    shift = cardWidth + gap;
    columnCount = parseInt(document.documentElement.style.getPropertyValue("--cards_columns"), 10);
    cardsFieldWidth = cardWidth * columnCount + gap * (columnCount - 1);
  }
});

window.addEventListener('resize', () => {
   updateDimensions();
 });