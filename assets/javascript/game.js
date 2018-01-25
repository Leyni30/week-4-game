$(document).ready(function(){

 var wins = 0;
     var losses = 0;
     var myScore = 0;
     var randomNumber 
     var pic1 = 0;
     var pic2 = 0;
     var pic3 = 0;
     var pic4 = 0;
     var min
     var max 

    function getANumber(min, max) {
        randomNumber =  Math.floor(Math.random() * (max - min + 1) + min);
        console.log(randomNumber);
}
getANumber(19,120);

    function showNumber(){
$("#ComputerNumber").html(randomNumber);
    }

    showNumber();


        function showScore() {
         
         var number =  Math.floor(Math.random() * (12 - 1 + 1) + 1);
         //console.log(number);
         return number;    
        }

        showScore();


        function refreshPics(){

        pic1 = showScore();
        pic2 = showScore();
        pic3 = showScore();
        pic4 = showScore();

           }

           function updating(){

            $("#score").html(myScore);
           }
        

        refreshPics();


        $("#pic1").click(function(){
            myScore += pic1;
            console.log(myScore);
            updating();
        });

        $("#pic2").click(function(){
            myScore += pic2;
            updating();
        });

        $("#pic3").click(function(){
            myScore += pic3;
            updating();
        });
        $("#pic4").click(function(){
            myScore += pic4;
            updating();
        });
});