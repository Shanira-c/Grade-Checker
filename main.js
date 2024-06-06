function validateInput(input) {
   var value = parseInt(input.value);
   
   if (isNaN(value)) {
       input.value = ''; // Clear the input if it's not a number
   } else if (value < 0) {
      input.value = '';
       input.placeholder = "Enter marks between 1 and 100"; // Set to minimum value
   } else if (value > 100) {
      input.value = '';
       input.placeholder = "Enter marks between 1 and 100"; // Set to maximum value
   }
}
function validateInput140(input) {
   var value = parseInt(input.value);
   
   if (isNaN(value)) {
       input.value = ''; // Clear the input if it's not a number
   } else if (value < 0) {
      input.value = '';
       input.placeholder = "Enter marks between 1 and 100"; // Set to minimum value
   } else if (value > 140) {
      input.value = '';
       input.placeholder = "Enter marks between 1 and 140"; // Set to maximum value
   }
}


function show_result() {
   let en = document.querySelector("#en").value;
   let hi = document.querySelector("#hi").value;
   let ch = document.querySelector("#ch").value;
   let ph = document.querySelector("#ph").value;
   let bi = document.querySelector("#bi").value;
   let ma = document.querySelector("#ma").value;
   let cl = document.querySelector("#cl").value;
   let pl = document.querySelector("#pl").value;
   let bl = document.querySelector("#bl").value;

   let tot = parseFloat(en) + parseFloat(hi) + parseFloat(ch) + parseFloat(ph) + parseFloat(bi) + parseFloat(ma) +parseFloat(cl) +parseFloat(pl) +parseFloat(bl) ;
   let perc = (tot * 100) / 1020;
   perc = perc.toFixed(2);

   if (perc >= 90) {
      document.querySelector(".grad").innerHTML = "A+";
   } else if (perc >= 80) {
      document.querySelector(".grad").innerHTML = "A";
   } else if (perc >= 70) {
      document.querySelector(".grad").innerHTML = "B+";
   } else if (perc >= 60) {
      document.querySelector(".grad").innerHTML = "B";
   } else if (perc >= 65) {
      document.querySelector(".grad").innerHTML = "C+";
   } else if(perc >= 50){
      document.querySelector(".grad").innerHTML = "C";
   } else if(perc >= 45){
      document.querySelector(".grad").innerHTML = "P";
   } else {
      document.querySelector(".grad").innerHTML = "F";
   }

   document.querySelector(".perc").innerHTML = perc;
   document.querySelector(".tot").innerHTML = tot;

   if (perc >= 45) {
      document.querySelector(".result h4").innerHTML = "Eligible";
      resultMessage.classList.add("pass"); // Add green color
      resultMessage.classList.remove("fail"); // Remove red color
   } else {
      document.querySelector(".result h4").innerHTML = "Not eligible";
      resultMessage.classList.add("fail"); // Add red color
      resultMessage.classList.remove("pass"); // Remove green color
   }
   resultMessage.style.animation = "scaleAnimation 1.8s ease-in-out infinite";
}
