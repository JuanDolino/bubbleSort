function bubbleSort(numberArray) {
  
  let actualNumber, secondNumber, actualNumberPosition, secondNumberPosition;
  let changes;

  for(actualNumberPosition = 0; actualNumberPosition != numberArray.length && changes != 0; actualNumberPosition++) {
    secondNumberPosition = actualNumberPosition+1 != numberArray.length ? actualNumberPosition+1 : actualNumberPosition;
    secondNumber = numberArray[secondNumberPosition];

    actualNumber = numberArray[actualNumberPosition];

    if(actualNumber > secondNumber) {
      numberArray.splice(secondNumberPosition+1, 0, actualNumber);
      numberArray.splice(actualNumberPosition, 1);

    }

    if(actualNumberPosition == numberArray.length-1) {
      changes = 0;
      for(actualNumberPosition = actualNumberPosition-1; actualNumberPosition != -1; actualNumberPosition--) {
        actualNumber = numberArray[actualNumberPosition];

        if(secondNumber < actualNumber){
          numberArray.splice(actualNumberPosition, 0, secondNumber);
          numberArray.splice(secondNumberPosition+1, 1);
          changes++;
        }

        secondNumberPosition = secondNumberPosition-1 != -1 ? secondNumberPosition-1 : secondNumberPosition;
        secondNumber = numberArray[secondNumberPosition];
      }

      actualNumberPosition = 0;
    }
  }

  return numberArray;

} 

console.log(bubbleSort([9, 5, 1 ,10, 13, 3, 8 , 12]));
