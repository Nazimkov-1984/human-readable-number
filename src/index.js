module.exports = function toReadable (number) {
    let x='', result = '', y = '', z = '', des = '', eden = '', ostatok='', sotni='';
      
    function getTwoNumbers(number) {
        switch(number) {
            case 0: z = 'zero';break; 
            case 1: z = 'one';break; 
            case 2: z = 'two';break; 
            case 3: z = 'three';break; 
            case 4: z = 'four';break; 
            case 5: z = 'five';break; 
            case 6: z = 'six';break; 
            case 7: z = 'seven';break; 
            case 8: z = 'eight';break; 
            case 9: z = 'nine';break; 
            case 10: z = 'ten';break; 
            case 11: z = 'eleven';break; 
            case 12: z = 'twelve';break; 
            case 13: z = 'thirteen';break; 
            case 14: z = 'fourteen';break; 
            case 15: z = 'fifteen';break; 
            case 16: z = 'sixteen';break; 
            case 17: z = 'seventeen';break; 
            case 18: z = 'eighteen';break; 
            case 19: z = 'nineteen';break; 
        }  

        if (number >19 && number<100 && number%10 === 0){
            y = Math.trunc(number/10);   
        switch(y){
            case 2: des = 'twenty';break; 
            case 3: des= 'thirty';break; 
            case 4: des = 'forty';break; 
            case 5: des = 'fifty';break; 
            case 6: des = 'sixty';break; 
            case 7: des = 'seventy';break; 
            case 8: des = 'eighty';break; 
            case 9: des = 'ninety';break; 
        }
        return des;
        }//end if 
        
      if (number<=19) {
          return z;
      }  

      if (number>19 && number<100 && number%10>0){
        y = Math.trunc(number/10);   
        switch(y){
            case 2: des = 'twenty';break; 
            case 3: des= 'thirty';break; 
            case 4: des = 'forty';break; 
            case 5: des = 'fifty';break; 
            case 6: des = 'sixty';break; 
            case 7: des = 'seventy';break; 
            case 8: des = 'eighty';break; 
            case 9: des = 'ninety';break; 
        } 
        eden = number%10;
        switch(eden){
            case 1: z = 'one';break; 
            case 2: z = 'two';break; 
            case 3: z = 'three';break; 
            case 4: z = 'four';break; 
            case 5: z = 'five';break; 
            case 6: z = 'six';break; 
            case 7: z = 'seven';break; 
            case 8: z = 'eight';break; 
            case 9: z = 'nine';break; 
        }

            return result =  des+ ' '+ z;
      }


    }; // end funktion twoNumb

    if (number<100) {
       return getTwoNumbers(number);
    }

    if (number>=100 && number < 1000 && number%100 === 0){
        switch (number) {
            case 100: x = 'one hundred';break;
            case 200: x = 'two hundred';break;
            case 300: x = 'three hundred';break;
            case 400: x = 'four hundred';break;
            case 500: x = 'five hundred';break;
            case 600: x = 'six hundred';break;
            case 700: x = 'seven hundred';break;
            case 800: x = 'eight hundred';break;
            case 900: x = 'nine hundred';break;
        } 
        return x;
    }   
    
    if (number>100 && number<1000 && number%100>0){
            ostatok = number%100;
            sotni = (Math.trunc(number/100))*100;
            switch (sotni) {
                case 100: x = 'one hundred';break;
                case 200: x = 'two hundred';break;
                case 300: x = 'three hundred';break;
                case 400: x = 'four hundred';break;
                case 500: x = 'five hundred';break;
                case 600: x = 'six hundred';break;
                case 700: x = 'seven hundred';break;
                case 800: x = 'eight hundred';break;
                case 900: x = 'nine hundred';break;
            } 
        return result = x +' '+ getTwoNumbers(ostatok);
    }
}// 
