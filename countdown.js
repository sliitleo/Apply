//Deadline Date 
 var countDownDate = new Date("Jun 5, 2022 23:59:59").getTime();


 var myfunc = setInterval(function() {

 var now = new Date().getTime();
 var timeleft = countDownDate - now;
     
 // Calculating the days, hours, minutes and seconds left
 var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
 var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
 var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
     
 // Result is output to the specific element
 document.getElementById("days").innerHTML = days 
 document.getElementById("hours").innerHTML = hours 
 document.getElementById("mins").innerHTML = minutes 
 document.getElementById("secs").innerHTML = seconds
     
 // Display the message when countdown is over
 if (timeleft < 0) {
     clearInterval(myfunc);

     


     document.getElementById("days").innerHTML = ""
     document.getElementById("hours").innerHTML = "" 
     document.getElementById("mins").innerHTML = ""
     document.getElementById("secs").innerHTML = ""
     document.getElementById("apl").style.display = "none";
    
     

     document.getElementById("btnapt").classList.add('hidden');
     document.getElementById("btnaptt").classList.add('hidden');

     document.getElementById("end").innerHTML = "Applications <b> closed!</b>";
     document.getElementById("end").classList.add('p-2');
     document.getElementById("end").classList.add('md:mt-56');
     document.getElementById("end").classList.add('md:mb-16');
     document.getElementById("end").classList.add('-mb-16');

     document.getElementById("form").style.display = "none";
     document.getElementById("formt").style.display = "none";
     document.getElementById("formth").style.display = "none";
     document.getElementById("formtht").style.display = "none";


     
     
 }

 
 }, 0);
