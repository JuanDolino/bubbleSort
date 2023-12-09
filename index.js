let numberArray = [5, 2, 4, 7, 3, 2, 1, 6, 9, 13, 16, 12, 18]

function bubbleSort() {
  
  let actualNumber, actualNumberPosition, nextNumberPosition, nextNumber;
  let changes;

  for(actualNumberPosition = 0; actualNumberPosition != numberArray.length && changes != 0; actualNumberPosition++) {
    nextNumberPosition = actualNumberPosition+1 != numberArray.length ? actualNumberPosition+1 : actualNumberPosition;
    nextNumber = numberArray[nextNumberPosition];

    actualNumber = numberArray[actualNumberPosition];

    if(actualNumber > nextNumber) {
      numberArray.splice(nextNumberPosition+1, 0, actualNumber);
      numberArray.splice(actualNumberPosition, 1);

    }

    if(actualNumberPosition == numberArray.length-1) {
      changes = 0;
      for(actualNumberPosition = actualNumberPosition-1; actualNumberPosition != -1; actualNumberPosition--) {
        actualNumber = numberArray[actualNumberPosition];

        if(nextNumber < actualNumber){
          numberArray.splice(actualNumberPosition, 0, nextNumber);
          numberArray.splice(nextNumberPosition+1, 1);
          changes++;
        }

        nextNumberPosition = nextNumberPosition-1 != -1 ? nextNumberPosition-1 : nextNumberPosition;
        nextNumber = numberArray[nextNumberPosition];
      }

      actualNumberPosition = 0;
    }
  }

  return numberArray;

} 

console.log(bubbleSort());
