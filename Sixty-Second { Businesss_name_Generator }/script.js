
 let rand = Math.random();
 let first, second, third;

 if (rand < 0.33) {
   first = "Crazy";
 } else if (rand < 0.66) {
   first = "Amazing";
 } else {
   first = "Fire";
 }

 rand = Math.random();
 if (rand < 0.33) {
   second = "Engine";
 } else if (rand < 0.66) {
   second = "Foods";
 } else {
   second = "Garments";
 }

 rand = Math.random();
 if (rand < 0.33) {
   third = "Bros";
 } else if (rand < 0.66) {
   third = "Limited";
 } else {
   third = "Hub";
 }

 document.getElementById(
   "generatedPhrase"
 ).textContent = `${first} ${second} ${third}`;

 function refreshPage() {
   location.reload();
 }
