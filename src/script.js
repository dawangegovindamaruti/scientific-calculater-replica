 document.addEventListener("DOMContentLoaded", function () {
    // Your code here
    
    const display = document.getElementById('calc-display');
    const buttons = document.getElementsByClassName('btn');
     
     let currentvalue = "";

      function evaluteresult(){

        console.log('currentvalue:', currentvalue)
        const convertedvalue = currentvalue
        .replace("x","*")   
        .replace ("%" ,'*0.01');
        console.log('convertedvalue:', convertedvalue)
        const result = eval(convertedvalue);
        currentvalue = result.toString();
        display.value = currentvalue; 
      }
    for( let i=0; i<buttons.length; i++) {
      const button = buttons[i];
      button.addEventListener('click', function () {
        const value = button.innerText;

        if(value == "AC") {
            currentvalue= "";
            display.value = currentvalue;
        }else if( value == "="){
         evaluteresult();
        } else{
              currentvalue += value;
              display.value = currentvalue;
        }
       
      })
    }
   
   
  });